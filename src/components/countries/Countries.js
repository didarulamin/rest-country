// import Country from "../country/Country";
import React, { useEffect, useState } from "react";
import Country from "../country/Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1 className="text-center">Rest API Project</h1>
      <div className="row  mt-2 justify-content-center">
        {countries.map((country) => (
          <Country key={country.capital} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
