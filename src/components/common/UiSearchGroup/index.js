import { LoadingOutlined } from '@ant-design/icons';
import { Input, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { IconSearch } from 'src/assets/icons';
import PropsContext from 'src/routes/context';
import "./index.scss"
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);
export const UiSearchGroup = (props) => {
    const { translate } = useContext(PropsContext)
    const [searchTerm, setSearchTerm] = useState("")
    const [select, setSelect] = useState(false)
    const [check, setCheck] = useState(true)

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchTerm.length > 0) {
                props.onChange(searchTerm)
            }
            else {
                props.onChange(searchTerm)
                setSelect(false)
            }
            setCheck(true)
        }, 1000)
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    const onChange = (e) => {
        setCheck(false)
        setSearchTerm(e.target.value)
    }
    return (
        <Input placeholder={translate('search')} className="text-search" prefix={check
            ? <IconSearch />
            : <Spin indicator={antIcon} />
        } style={{ background: "#FFFFFF", borderRadius: 15, color: "#FFFFFF", height: 30 }} value={searchTerm} onChange={onChange} onKeyDown={props._handleKeyDown} />
    )
}
