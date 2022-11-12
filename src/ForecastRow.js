import "./ForecastRow.css";

export default function ForecastRow() {
  return (
    <div className="Row">
      <div className="weather-forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-day">Wed</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain.png"
              alt="forecast-icon"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">31°C</span>
              <span className="weather-forecast-temperature-min">25°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}