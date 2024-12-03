import React, { useContext, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import "./index.scss"
import PropsContext from "src/routes/context"
export const UiSelectTime = (props) => {
    const { propkey, check, styles } = props
    const { translate } = useContext(PropsContext)

    useEffect(() => {
    }, [props])
    return (
        <Form.Select className={styles || "form-select-time"} onChange={(e) => props.onClick(e.target.value)}>
            <option selected={propkey === "all" ? true : false} value="all">{translate("date", { returnObjects: true })["all"]}</option>
            <option selected={propkey === "1_year" ? true : false} value="one_year">{translate("date", { returnObjects: true })["one_year"]}</option>
            <option selected={propkey === "2_year" ? true : false} value="two_year">{translate("date", { returnObjects: true })["two_year"]}</option>
            <option selected={propkey === "3_year" ? true : false} value="three_year">{translate("date", { returnObjects: true })["three_year"]}</option>
        </Form.Select>
    )
}
