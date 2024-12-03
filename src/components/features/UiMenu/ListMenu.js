
import { IconButton } from "@mui/material";
import { Dashboard, IconPosts, MenuClass, MenuCourse, MenuKhoa, MenuNganh, MenuStudent, MenuSubject, MenuTeacher } from "src/assets/icons";
const ListMenu =
    [{
        type: 1,
        icon: <Dashboard className="select-menu" />,
        name: "Dashboard",
        path: "/dashboard",
    },
    {
        type: 1,
        icon: <MenuSubject className="select-menu" />,
        name: "Quản lý môn học",
        path: "/subject-manangement",
    },
    {
        type: 1,
        icon: <MenuNganh className="select-menu" />,
        name: "Quản lý ngành",
        path: "/industry-manangement",
    },
    {
        type: 1,
        icon: <MenuCourse className="select-menu" />,
        name: "Quản lý học phần",
        path: "/course-manangement",
    },
    {
        type: 1,
        icon: <MenuTeacher className="select-menu" />,
        name: "Quản lý giáo viên",
        path: "/teacher-manangement",
    },
    {
        type: 1,
        icon: <MenuStudent className="select-menu" />,
        name: "Quản lý sinh viên",
        path: "/student-manangement",
    },
    {
        type: 1,
        icon: <MenuKhoa className="select-menu" />,
        name: "Quản lý khoa",
        path: "/faculty-manangement",
    },
    {
        type: 1,
        icon: <MenuClass className="select-menu" />,
        name: "Quản lý lớp",
        path: "/class-manangement",
    },

    ]

export default ListMenu