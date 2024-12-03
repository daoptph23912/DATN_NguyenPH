import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.setToken = (token) => {
    instance.defaults.headers['Authorization'] = 'Bearer ' + token
    localStorage.setItem('token', token)
}

export const MethodLogin = async (url, param) => {
    try {
        const res = await instance({
            method: "POST",
            url: url,
            data: param,
        })
        return res.data;
    }
    catch (e) {
        return e.response?.data || e
    }
}
export const MethodRegister = async (url, param) => {
    try {
        const res = await instance({
            method: "POST",
            url: url,
            data: param
        })
        return await res.data;
    }
    catch (e) {
        return e.response?.data || e
    }
}

export const MethodRefreshToken = async (url) => {
    try {
        const res = await instance({
            method: "POST",
            url: url,
            withCredentials: true
        })
        if (res.data.newAccessToken) {
            return res.data.newAccessToken;
        }
    } catch (error) {
        let text = "Hết phiên đăng nhập, yêu cầu đăng nhập lại";
        if (window.confirm(text) === true) {
            window.open("/login", "_parent")
        } else {
            window.open("/login", "_parent")
        }
        setTimeout(() => { console.log("login lại") }, 5000)
    }
}
export const MethodGet = async (url) => {
    try {
        const ret = await axios({
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: window.ip_server + url
        })
        return await ret.data
    }
    catch (e) {
        if ((e.code === "ERR_NETWORK") || (e.response.status === 401)) {
            return MethodRefreshToken().then(async (rs) => {
                const { token } = rs.data
                instance.setToken(token);
                const config = e.config
                config.headers['Authorization'] = 'Bearer ' + token
                const result = await instance(config)
                return await result.data
            })
        }
        return e.response.data
    }
}


export const MethodPost = async (url, param) => {
    try {
        const ret = await axios({
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: window.ip_server + url,
            data: param
        })
        return await ret.data
    }
    catch (e) {
        if ((e.code === "ERR_NETWORK") || (e.response.status === 401)) {
            console.log("MethodPost login", e)
            return MethodRefreshToken().then(async (rs) => {
                const { token } = rs.data
                instance.setToken(token);
                const config = e.config
                config.headers['Authorization'] = 'Bearer ' + token
                const result = await instance(config)
                return await result.data

            })
        }
        return e.response?.data || e
    }

}

export const MethodPut = async (url, param) => {
    try {
        const ret = await axios({
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: window.ip_server + url,
            data: param
        })
        return await ret.data
    }
    catch (e) {
        if ((e.code === "ERR_NETWORK") || (e.response.status === 401)) {
            return MethodRefreshToken().then(async (rs) => {
                const { token } = rs.data
                instance.setToken(token);
                const config = e.config
                config.headers['Authorization'] = 'Bearer ' + token
                const result = await instance(config)
                return await result.data
            })
        }
        return e.response.data
    }
}

export const MethodDelete = async (url) => {
    try {
        const ret = await axios({
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            url: window.ip_server + url,
        })
        return await ret.data
    }
    catch (e) {
        if ((e.code === "ERR_NETWORK") || (e.response.status === 401)) {
            return MethodRefreshToken().then(async (rs) => {
                const { token } = rs.data
                instance.setToken(token);
                const config = e.config
                config.headers['Authorization'] = 'Bearer ' + token
                const result = await instance(config)
                return await result.data
            })
        }
        return e.response.data
    }
}