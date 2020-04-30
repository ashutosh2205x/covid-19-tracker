import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const Data = async (country) => {
  let changedUrl =url;
  if(country){
    changedUrl = `${url}/countries/${country}`
  }
  if(country==='global')
  {changedUrl= url}
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const newData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return newData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    console.log();
    return countries.map((country) => country.name);
  } catch (errr) {
    console.log(errr);
  }
};
