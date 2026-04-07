export const getWeather = async (setWeather) => {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=76bd287cbb58ff6d251c4c9495997365&units=metric"
    );
    const data = await res.json();
    setWeather(data);
  } catch (err) {
    console.log(err);
  }
};