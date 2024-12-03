import { useState } from "react";
import { useContext } from "react";
import PropsContext from "src/routes/context";
import "./index.scss";
import BaseButton from "src/components/common/Button/BaseButton";
import { IconPlus } from "src/assets/icons";
import { setOpenModalAddProduct } from "src/services/store";
import { GetValueStore } from "src/components/function";
import ModalAddCourse from "src/components/common/Modal/add/ModalAddCourse";

export const UiHeader = () => {
    const { translate, dispatch } = useContext(PropsContext);
    const [search, setSearch] = useState("");
    const { StoreOpenModalCourse } = GetValueStore()
    const handleKeyDown = (e) => {
        // Xử lý sự kiện tìm kiếm nếu cần
    };

    return (
        <div>
            {StoreOpenModalCourse && (
                <ModalAddCourse title={"Thêm mới khoá học"} />
            )}
            <div className="text-title"> Quản lý học phần</div>
            <div className="d-flex justify-content-between align-items-center p-8 header-container">
                <BaseButton
                    handleClick={() => setOpenModalAddProduct(true, dispatch)}
                    width={180}
                    typeBtn={"btnOrange"}
                    icon={
                        <IconPlus
                            width={16}
                            height={14}
                            style={{ marginRight: "0.5rem" }}
                        />
                    }
                    content={`Thêm mới`}
                />
                <div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="search-input"
                    />
                </div>
            </div>
        </div>
    );
};

