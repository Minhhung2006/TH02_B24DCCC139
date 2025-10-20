import React, { useState } from "react";
import axios from "axios";

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (error) {
      alert("Không tìm thấy thành phố!");
    }
  };

  return (
    <div className="p-4">
      <h2>🌤️ Ứng dụng thời tiết</h2>
      <input
        type="text"
        value={city}
        placeholder="Nhập tên thành phố..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Tìm</button>

      {weather && (
        <div className="mt-3">
          <p><strong>Nhiệt độ:</strong> {weather.current_condition[0].temp_C}°C</p>
          <p><strong>Tình trạng:</strong> {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
