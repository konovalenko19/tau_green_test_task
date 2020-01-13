import axios from "axios";

let api = null;

function getInitializedApi() {

  // Возвращаем api, если он уже инициализирован
  if (api) return api;

  api = axios.create({
    timeout: 60000,
    // withCredentials: true,
    baseURL: getBaseUrl(),
    responseType: "json",
  });

  return api;
}

function getBaseUrl() {
  // Поместить сюда логику для получения baseURL:
  // 1. Анализа URL для определения окружения, в котором запущено приложение
  // 2. Поиска переменной среды как части процесса сборки
  return "https://api.tau.green/v1/";
}

getInitializedApi();

export default api;