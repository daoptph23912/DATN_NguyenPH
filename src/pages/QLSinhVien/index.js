import { UiListSinhVien } from "src/components/features/UiListGiaoVien/UiListGiaoVien";
import { UiHeaderSinhVien } from "src/components/features/UiListSinhVien/UiHeader";

const StudentManagement = () => {
    return (<div>
        <UiHeaderSinhVien />
        <UiListSinhVien />
    </div>)
}
export default StudentManagement;