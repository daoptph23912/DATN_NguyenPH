import { MethodGet, MethodPost, MethodRegister } from "./meThod"
//api của admin

//tạo danh sách học phần 
export const APIAddCourse = async (param) => {
    const { courseName, maximumStudent,
        teacherId, condition, credit } = param
    try {
        const data = { courseName: courseName, maximumStudent: maximumStudent, teacherId: teacherId, condition: condition, credit: credit }
        return await MethodPost("/api/course/create", data)
    } catch (e) {
        return e
    }
}
//lấy danh sách học phần
export const APIGetCourse = async (param) => {
    return await MethodGet("/api/course/search", param)
}

//cập nhật danh sách học phần
export const APIUpdateCourse = async (param) => {
    return await MethodPost("/api/course/update", param)
}

//xoá học phần 
export const APIDeleteCourse = async (param) => {
    return await MethodPost("/api/course/delete", param)
}