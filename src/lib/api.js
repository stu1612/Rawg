// vars
export const apiKey = process.env.REACT_APP_API_KEY;
export const baseURL = "https://api.rawg.io/api";

// get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// get day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// dynamic dates
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const today = new Date();

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
export const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const last30Days = new Date(new Date().setDate(today.getDate() - 30));
const next30Days = new Date(new Date().setDate(today.getDate() + 30));
const last7Days = new Date(new Date().setDate(today.getDate() - 7));
const next7Days = new Date(new Date().setDate(today.getDate() + 7));

const formattedLast30Days = last30Days.toISOString().slice(0, 10);
const formattedNext30Days = next30Days.toISOString().slice(0, 10);
const formattedLast7Days = last7Days.toISOString().slice(0, 10);
const formattedNext7Days = next7Days.toISOString().slice(0, 10);

// fixed dates
export const topFive = `dates=2000-01-01,${currentDate}&ordering=-added&page_size=5`;
export const bestOfTheYear = `dates=2023-01-01,${currentDate}&ordering=-rating&page_size=20`;
export const popularIn2022 = `dates=2022-01-01,2022-12-31&ordering=-rating&page_size=20`;
export const allStars = `dates=2000-01-01,${currentDate}&ordering=-rating&page_size=20`;
export const lastMonth = `dates=${formattedLast30Days},${currentDate}&ordering=-added&page_size=20`;
export const thisWeek = `dates=${formattedLast7Days},${currentDate}&ordering=-added`;
export const nextWeek = `dates=${currentDate},${formattedNext7Days}&ordering=-released`;

// export const nextMonth = `dates=${currentDate}, ${formattedNext30Days}&ordering=-added&page_size=20`;
// export const nextYear = `dates=2023-01-29,2024-01-29&ordering=-added`;

// const thirtyDays = new Date(new Date().setDate(today.getDate() - 30));
// export const lastThirtyDays = getCurrentDay() - 30;
// const newDate = new Date(thirtyDays);
