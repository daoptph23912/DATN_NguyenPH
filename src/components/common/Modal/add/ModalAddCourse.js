import React, { useEffect, useState } from "react";
import { Checkbox, Col, Modal, Row } from "antd";
import { useTranslation } from "react-i18next";
import "../../../../assets/modalStyle/postNews.scss";
import { useDispatch } from "react-redux";
import BaseButton from "../../Button/BaseButton";
import LabelInput from "../../LabelInput";
import { GetValueStore } from "src/components/function";
import { setOpenModalAddProduct } from "src/services/store";
import { IconUpLoad } from "src/assets/icons";
import InputText from "../../Input/InputText";
import { APIAddCourse } from "src/services/connectAPI/course";

const ModalAddCourse = ({ title, postDeals }) => {
  const { StoreOpenModalCourse } = GetValueStore()
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });
  const [datapost, setDataPost] = useState({
    courseName: "",
    maximumStudent: "",
    teacherId: "",
    condition: "",
    credit: "",
  });

  const handleSave = () => {
    if (
      !datapost.courseName ||
      !datapost.teacherId || !datapost.maximumStudent || !datapost.condition || !datapost.credit
    ) {
      setError({
        isError: true,
        msg: "Vui lòng nhập đầy đủ thông tin",
      });
      return;
    }
    const formPost = new FormData();
    formPost.append("maximumStudent", datapost.maximumStudent);
    formPost.append("courseName", datapost.courseName);
    formPost.append("teacherId", datapost.teacherId);
    formPost.append("condition", datapost.condition);
    formPost.append("credit", datapost.credit);
    const ret = APIAddCourse(formPost);

  };

  const handleCancel = () => {
    setOpenModalAddProduct(false, dispatch);
  };
  return (
    <>
      <Modal
        maskClosable={false}
        className="wrapperModalPostNews"
        title={t(title)}
        centered
        width={1300}
        open={StoreOpenModalCourse}
        onCancel={handleCancel}
        footer={[
          <BaseButton
            content={"Thêm mới"}
            typeBtn="btnOrange"
            icon={<IconUpLoad />}
            handleClick={handleSave}
          />,
        ]}
      >
        <Row>
          <Col span={4}>
            <LabelInput text={"Tên học phần"} />
          </Col>
          <Col span={20}>
            <InputText
              focus
              text={datapost.courseName}
              setText={(value) => setDataPost({ ...datapost, courseName: value })}
              placeholder={"Tên học phần"}
              maxLength={155}
              typeInput={`${!datapost.courseName && error.isError
                ? "checkEmptyText baseInput"
                : "baseInput"
                }`}
            />
          </Col>
        </Row>
        <Row style={{ margin: "1.5rem 0" }}>
          <Col span={4}>
            <LabelInput text={"Giới hạn số học sinh đăng ký"} />
          </Col>
          <Col span={20}>
            <InputText
              typeInput={`${!datapost.maximumStudent && error.isError
                ? "checkEmptyText baseInput"
                : "baseInput"
                }`}
              text={datapost.maximumStudent}
              setText={(value) =>
                setDataPost({ ...datapost, maximumStudent: value })
              }
              placeholder={"Giới hạn số học sinh đăng ký"}

            />
          </Col>
        </Row>
        <Row style={{ margin: "1.5rem 0" }}>
          <Col span={4}>
            <LabelInput text={"Mã định danh của giáo viên giảng dạy học phần "} />
          </Col>
          <Col span={20}>
            <InputText
              typeInput={`${!datapost.teacherId && error.isError
                ? "checkEmptyText baseInput"
                : "baseInput"
                }`}
              text={datapost.teacherId}
              setText={(value) =>
                setDataPost({ ...datapost, teacherId: value })
              }
              placeholder={"Mã định danh của giáo viên giảng dạy học phần"}
            />
          </Col>
        </Row>
        <Row style={{ margin: "1.5rem 0" }}>
          <Col span={4}>
            <LabelInput text={"Mã định danh của học phần tiên quyết"} />
          </Col>
          <Col span={20}>
            <InputText
              typeInput={`${!datapost.condition && error.isError
                ? "checkEmptyText baseInput"
                : "baseInput"
                }`}
              text={datapost.condition}
              setText={(value) =>
                setDataPost({ ...datapost, condition: value })
              }
              placeholder={"Mã định danh của học phần tiên quyết"}
            />
          </Col>
        </Row>
        <Row style={{ margin: "1.5rem 0" }}>
          <Col span={4}>
            <LabelInput text={"Số tín chỉ"} />
          </Col>
          <Col span={20}>
            <InputText
              typeInput={`${!datapost.credit && error.isError
                ? "checkEmptyText baseInput"
                : "baseInput"
                }`}
              text={datapost.credit}
              setText={(value) =>
                setDataPost({ ...datapost, credit: value })
              }
              placeholder={"Số tín chỉ"}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ModalAddCourse;
