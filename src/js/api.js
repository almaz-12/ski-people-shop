import { API_URL } from "./const";

export const getData = async () => {
  try {
    const response = await fetch(API_URL);

    if (response.ok) {     
      let data = await response.json();
      return data;
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
    return null;
  } catch (error) {
    console.log('error' + error);
  }
}