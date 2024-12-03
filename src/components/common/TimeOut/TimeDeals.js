import moment from "moment";
import React, { useState, useContext } from "react";
import { DatePicker } from 'antd';
import { IconClose } from "src/assets/icons";
import { UiButton } from "../Button";
import PropsContext from "src/routes/context";
import "./index.scss";

export const TimeDeals = (props) => {
    const { translate } = useContext(PropsContext);
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [dateCreate, setDateCreate] = useState(null);
    const dateFormat = "DD/MM/YYYY";

    const onChangeStart = (date) => {
        setDateStart(date ? date.format("YYYY-MM-DD") : null);
    };
    const onChangeEnd = (date) => {
        setDateEnd(date ? date.format("YYYY-MM-DD") : null);
    };
    const onChangeCreate = (date) => {
        setDateCreate(date ? date.format("YYYY-MM-DD") : null);
    };
    const handleSave = () => {
        if (dateStart && dateEnd && dateCreate) {
            props.onChangeDate('start', dateStart);
            props.onChangeDate('end', dateEnd);
            props.onChangeDate('create', dateCreate);
            props.CallBackClose(false);
        }
    };

    return (
        <div>
            <div className="title-dialog d-flex justify-content-between">
                <div className="title-color">
                    {translate("dialog", { returnObjects: true })["tiltle"]}
                </div>
                <div onClick={() => props.CallBackClose(false)}>
                    <IconClose fill="white" style={{ cursor: "pointer" }} />
                </div>
            </div>
            <div className="padding-body">
                <div className="row mt-3">
                    <div className="col-5">{translate("dialog", { returnObjects: true })["time_start"]}</div>
                    <DatePicker
                        placeholder=""
                        className="col-7"
                        format={dateFormat}
                        onChange={onChangeStart}
                    />
                </div>
                <div className="row mt-3">
                    <div className="col-5">{translate("dialog", { returnObjects: true })["time_end"]}</div>
                    <DatePicker
                        placeholder=""
                        className="col-7"
                        format={dateFormat}
                        onChange={onChangeEnd}
                    />
                </div>
                <div className="row mt-3">
                    <div className="col-5">{translate("dialog", { returnObjects: true })["time_create"]}</div>
                    <DatePicker
                        placeholder=""
                        className="col-7"
                        format={dateFormat}
                        onChange={onChangeCreate}
                    />
                </div>
                <div className="mt-4 d-flex justify-content-between">
                    <div></div>
                    <div>
                        <UiButton
                            name="save"
                            onClick={handleSave}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
