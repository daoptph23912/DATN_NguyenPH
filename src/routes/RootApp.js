import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { PropsProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../pages/Login/index";
import Register from "src/pages/Register";
import IndustryManagement from "src/pages/QLNganh";
import SubjectManagement from "src/pages/QLMonHoc";
import TeacherManagement from "src/pages/QLGiaoVien";
import StudentManagement from "src/pages/QLSinhVien";
import CourseManagement from "src/pages/QLHocPhan";
import FancultyManagement from "src/pages/QLKhoa";
import ClassManagement from "src/pages/QLLop";
import Dashboard from "src/pages/Dashboard";
export function RootApp(props) {
  const dispatch = useDispatch();
  const { translation } = props;
  return (
    <PropsProvider value={{ translate: translation, dispatch: dispatch }}>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<CourseManagement />} />
          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* quản lý học phần */}
          <Route path="/course-manangement" element={<CourseManagement />} />
          {/*quản lý môn học */}
          <Route path="/subject-manangement" element={<SubjectManagement />} />
          {/*quản lý ngành */}
          <Route path="/industry-manangement" element={<IndustryManagement />} />
          {/*quản lý giáo viên */}
          <Route path="/teacher-manangement" element={<TeacherManagement />} />
          {/*quản lý sinh viên */}
          <Route path="/student-manangement" element={<StudentManagement />} />
          {/*quản lý khoa */}
          <Route path="/faculty-manangement" element={<FancultyManagement />} />
          {/*quản lý lớp */}
          <Route path="/class-manangement" element={<ClassManagement />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </PropsProvider>
  );
}
