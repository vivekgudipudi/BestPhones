import React from "react";
import "./styles.css";
import { useState } from "react";

const smartPhoneDictionary = {
  Camera: [
    { name: "Apple iphone 13 pro max", rating: "10/10" },
    { name: "Samsung Galaxy S21 Ultra", rating: "9.5/10" },
    { name: "Huawei Mate 40 Pro", rating: "9/10" }
  ],

  Performance: [
    { name: "nubia Red Magic 6 Pro ", rating: "10/10" },
    { name: "ROG Phone 5", rating: "9/10" },
    { name: "iQOO 7", rating: "9.5/10" }
  ],
  Battery: [
    { name: "Samsung Galaxy F62", rating: "9.5/10" },
    { name: "Samsung Galaxy M51", rating: "9/10" },
    { name: "Xiaomi Redmi 10 Prime", rating: "8.5/10" }
  ]
};

export default function App() {
  const [selectedPreference, setPreference] = useState("Performance");
  function genreClickHandler(preference) {
    setPreference(preference);
  }
  return (
    <div className="App">
      <h1> Best Smartphones 2021 📱 </h1>
      <h3>Select your preference in mobile</h3>

      <div>
        {Object.keys(smartPhoneDictionary).map((preference) => (
          <button
            className="button"
            onClick={() => genreClickHandler(preference)}
          >
            {preference}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul>
          {smartPhoneDictionary[selectedPreference].map((phone) => (
            <li key={phone.name}>
              <div className="phoneName">{phone.name}</div>

              <div className="phoneRating">{phone.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
