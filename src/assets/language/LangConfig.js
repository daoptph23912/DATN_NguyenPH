import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "vn",
  resources: {
    vn: {
      translation: {
        search: "Tìm kiếm",
        Deals: "Ưu đãi",
        News: "Tin tức",
        Payment: "Tích thanh toán",
        button: {
          save: "Save"
        },
        dialog: {
          tiltle: "Thời gian",
          time_create: "Thời gian tạo",
          time_start: "Thời gian bắt đầu",
          time_end: "Thời gian kết thúc"
        },
        news: {
          title: "Tiêu đề",
          person_create: "Người tạo",
          time_create: "Thời gian tạo",
          function: "Chức năng"
        },
        deals: {
          title: "Tiêu đề",
          scope: "Phạm vi",
          time_start: "Thời gian bắt đầu KM",
          time_end: "Thời gian kết thúc KM",
          time_create: "Thời gian tạo",
          status: "Trạng thái",
          function: "Chức năng"
        },
        date: {
          all: "Tất cả",
          one_year: "1 năm",
          two_year: "2 năm",
          three_year: "3 năm"
        },
        title: {
          news: "Thống kê tương tác của khách hàng với bài viết",
          deals: "Thống kê tương tác của khách hàng với ưu đãi",
          payment: "Tích chọn thanh toán",
        },
      },
    },
    en: {
      translation: {
        search: "Tìm kiếm",
        Deals: "Ưu đãi",
        News: "Tin tức",
        Payment: "Tích thanh toán",
        button: {
          save: "Save"
        },
        dialog: {
          tiltle: "Thời gian",
          time_create: "Thời gian tạo",
          time_start: "Thời gian bắt đầu",
          time_end: "Thời gian kết thúc"
        },
        news: {
          title: "Title",
          person_create: "Create Person",
          time_create: "Create Time",
          function: "Function"
        },
        date: {
          all: "All",
          one_year: "1 year",
          two_year: "2 year",
          three_year: "3 year"
        },
        title: {
          news: "Thống kê tương tác của khách hàng với bài viết",
          deals: "Thống kê tương tác của khách hàng với ưu đãi",
          payment: "Tích chọn thanh toán",
        },
        deals: {
          title: "Tiêu đề",
          scope: "Phạm vi",
          time_start: "Thời gian bắt đầu KM",
          time_end: "Thời gian kết thúc KM",
          time_create: "Thời gian tạo",
          status: "Trạng thái",
          function: "Chức năng"
        },
        payment: {
          title: "Tiêu đề",
          scope: "Phạm vi",
          time_start: "Thời gian bắt đầu KM",
          time_end: "Thời gian kết thúc KM",
          time_create: "Thời gian tạo",
          status: "Trạng thái",
          function: "Chức năng"
        },
      }
    }
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
