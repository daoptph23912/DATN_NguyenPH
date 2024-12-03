import React from "react"
import { useContext } from "react"
import "./index.scss"
import PropsContext from "src/routes/context"
export const UiButton = (props) => {
  const { translate, dispatch } = useContext(PropsContext)

  const { name } = props
  return (
    <div className="div-botton" onClick={(e) => props.onClick()}>
      {translate("button", { returnObjects: true })[
        name
      ]}
    </div>
  )
}

export const UiButtonGray = (props) => {
  const { translate, dispatch } = useContext(PropsContext);
  const { name } = props;
  return (
    <div className="div-botton-gray" onClick={() => props.onClick()}>
      {translate("button", { returnObjects: true })[name]}
    </div>
  );
};


export const UiButtonImport = (props) => {
  const { name } = props
  const { translate, dispatch } = useContext(PropsContext)

  const inputFileRef = React.useRef();
  const onBtnClick = () => {
    inputFileRef?.current.click();
  };


  return (
    <div>
      <input
        onChange={(e) => props.onFile(e)}
        type='file'
        ref={inputFileRef}
        accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
        style={{ display: 'none' }}
      />
      <div className="div-botton" onClick={onBtnClick}>
        {translate("button", { returnObjects: true })[
          name
        ]}
      </div>
    </div>

  )
}