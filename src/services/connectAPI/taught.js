import { MethodGet, MethodPost } from "./meThod"
//api của lecture và student

//lấy danh sách sinh viên
export const APIGetStudent = async (param) => {
    return await MethodGet("/api/student/search", param)
}

//lấy danh sách học phần đang giảng dạy
export const APIGetTaught = async (param) => {
    return await MethodGet("/api/course/searchCurrentTaught", param)
}

//lấy danh sách sinh viên theo từng học phần giảng dạy
export const APIGetStudentByTaught = async (param) => {
    return await MethodGet("/api/course/getListStudent", param)
}

//nhập điểm cho sinh viên
export const APIInputPoint = async (param) => {
    return await MethodPost("/api/course/inputPoint", param)
}

//đăng ký học phần
export const APIRegisterCourse = async (param) => {
    return await MethodPost("/api/course/register", param)
}

//xem danh sách học phần đã đăng ký
export const APISearchRegisteredCourse = async (param) => {
    return await MethodGet("/api/course/searchRegisteredCourse", param)
}
//lấy danh sách học phần
export const APIGetCourseStudent = async (param) => {
    return await MethodGet("/api/course/search", param)
}

//hủy đăng ký học phần
export const APICacelCourseStudent = async (param) => {
    return await MethodPost("/api/course/cancle", param)
}

//xem kết quả học tập
export const APIGetResultCourse = async (param) => {
    return await MethodGet("/api/result/get", param)
}

//đánh giá giáo viên
export const APIEvaluateGiaoVien = async (param) => {
    return await MethodGet("/api/evaluate", param)
}


//load danh sách câu hỏi
export const APIEvaluateQuestion = async (param) => {
    return await MethodGet("/api/evaluate/question", param)
}