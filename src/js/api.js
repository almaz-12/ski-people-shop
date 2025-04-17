import { API_URL } from "./const";
import { findSubstring } from "./helpers";

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

export const getDataByQuery = async (query) => {
  try {
    const response = await fetch(API_URL);

    if (response.ok) {     
      let data = await response.json();
      const search = query.replace(/\+/g, " ");
      console.log(search);
      data = data.filter(el => findSubstring(el.name,search) || findSubstring(el.type,search));
      console.log(data);

      return data;
    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
    return null;
  } catch (error) {
    console.log('error' + error);
  }
}