import axios from "axios";
// import clear from "../assets/video/ScatteredClouds.mp4";
// import rain from "../assets/video/rain.mp4";
// import snow from "../assets/video/Snow.mp4";
const API_key = process.env.REACT_APP_WEATHER_API_KEY;

export const currentWeatherData = (city = "maryland") => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_key}`
      );
      resolve(request);
    } catch (err) {
      reject(err);
    }
  });
};

// export const todaysWeather = async (city = "San Francisco") => {
//   return new Promise(async(resolve, reject) => {
//     try {
//       const request = await axios.get(
//         `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`
//       );
//       resolve(request)
//     } catch (error) {
//       reject(erro);
//     }
//   });
// };

export const dailyWeatherData = async (city = "maryland") => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_key}`
      );
      resolve(request);
      console.log(request);
    } catch (err) {
      reject(err);
    }
  });
};

export const getCurrentLocationWeather = async (lat, lon) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`
      );
      resolve(request);
    } catch (err) {
      reject(err);
    }
  });
};
 

// export const chooseVideo = (video) => {
//   switch (video) {
// 		case "Rain":
// 			return rain;
// 		case "Clouds":
// 			return snow;
// 		case "Clear":
// 			return clear;
// 	}
// }