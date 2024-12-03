import { useState } from "react";
import { useContext } from "react";
import PropsContext from "src/routes/context";
import "./index.scss";
import { AvatarSVG } from "src/assets/icons";

export const UiHeaderLop = () => {
    const { translate } = useContext(PropsContext);
    const [search, setSearch] = useState("");

    const handleKeyDown = (e) => {
        // Xử lý sự kiện tìm kiếm nếu cần
    };

    return (
        <div>
            <div className="text-title"> Quản lý học phần</div>
            <div className="d-flex justify-content-between align-items-center p-8 header-container">
                <div>
                    <button className="btn btn-open-class">Mở lớp học phần</button>
                </div>
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

