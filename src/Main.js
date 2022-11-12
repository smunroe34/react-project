import "./Main.css";

export default function Main() {
  let weatherData = {
    city: "Toronto",
    mainTemperature: "22",
    humidity: "25",
    wind: "8",
    pressure: "789",
    description: "Few clouds",
    date: "Sunday 12:54",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };
  return (
    <div className="overview">
      <h1>{weatherData.city}</h1>
      <ul className="mb-3">
        <li className="mb-4">
          Last updated: <span>{weatherData.date}</span>
        </li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <div className="clearfix weather-temperature pb-2">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-start"
            />
            <div className="float-start">
              <strong>{weatherData.mainTemperature}</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              humidity:
              <strong>
                <span> {weatherData.humidity}</span>%
              </strong>
            </li>
            <li>
              wind:
              <strong>
                <span> {weatherData.wind}</span> km/h
              </strong>
            </li>
            <li>
              pressure:
              <strong>
                <span> {weatherData.pressure}</span> mm
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
