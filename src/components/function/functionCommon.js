import moment from "moment";
import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (data) return data;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => getSavedValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  return [data, setData];
}
export const formatPrice = (num) => {
  let currencyFormat;
  if (Number(num) > 1) {
    currencyFormat = `${num.toLocaleString(undefined, {
      currency: "USD",
    })} VND`;
  } else {
    currencyFormat = num;
  }
  return currencyFormat;
};

export const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY HH:mm:ss");
};

export const isNumeric = (value) => {
  return /^\d+$/.test(value);
};
export async function saveTokenToLocalStorage(token) {
  try {
    await localStorage.setItem("accesstoken", token);
  } catch (err) {
    console.error("Error occurred", err);
  }
}
export async function saveRefreshTokenToLocalStorage(refresh) {
  try {
    await localStorage.setItem("refreshtoken", refresh);
  } catch (err) {
    console.error("Error occurred", err);
  }
}

export async function getTokenFromLocalStorage() {
  try {
    const token = await localStorage.getItem("accesstoken");
    return token;
  } catch (err) {
    console.error("Error occurred", err);
  }
}
// export function removeAccents(str) {
//   var AccentsMap = [
//     "aàảãáạăằẳẵắặâầẩẫấậ",
//     "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
//     "dđ",
//     "DĐ",
//     "eèẻẽéẹêềểễếệ",
//     "EÈẺẼÉẸÊỀỂỄẾỆ",
//     "iìỉĩíị",
//     "IÌỈĨÍỊ",
//     "oòỏõóọôồổỗốộơờởỡớợ",
//     "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
//     "uùủũúụưừửữứự",
//     "UÙỦŨÚỤƯỪỬỮỨỰ",
//     "yỳỷỹýỵ",
//     "YỲỶỸÝỴ",
//   ];
//   for (var i = 0; i < AccentsMap.length; i++) {
//     var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
//     var char = AccentsMap[i][0];
//     str = str.replace(re, char);
//   }
//   return str;
// }

export const Logout = () => {
  localStorage.removeItem("accessToken");
};
export function isValidPrice(priceString) {
  // Kiểm tra định dạng: Giá tiền có chứa chỉ số, dấu thập phân và ký hiệu tiền tệ phù hợp
  var priceRegex = /^\d+(\.\d{1,2})?$/; // Định dạng chấp nhận số nguyên hoặc số thập phân với tối đa 2 chữ số sau dấu phẩy
  return priceRegex.test(priceString);
}
export const checkNumber = (value) => {
  const parsedInt = parseInt(value);
  return parsedInt.toString() === value;
};
export const validateUrl = (str) => {
  var urlRegex =
    "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
  var url = new RegExp(urlRegex, "i");
  return str.length < 2083 && url.test(str);
};
export function containsWhitespace(value) {
  const whitespaceRegex = /\s/;
  return whitespaceRegex.test(value);
}
export const isValidPass = (pass) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-.])[A-Za-z\d#?!@$%^&*-.]{8,}$/;
  return passwordRegex.test(pass);
};
export function addValueWithDefault(array, newValue) {
  let defaultValue;
  // Nếu mảng không rỗng, loại bỏ giá trị cuối cùng (được giữ làm giá trị cố định)
  if (array.length > 0) {
    defaultValue = { ...array[array.length - 1], index: array.length + 1 };
    array.pop();
  }
  // Thêm giá trị mới và giá trị cố định vào cuối mảng
  return [...array, { ...newValue, index: array.length + 1 }, defaultValue];
}
