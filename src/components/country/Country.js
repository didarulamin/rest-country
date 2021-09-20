import React from "react";

export default function Country(props) {
  const { name, flag, region, capital, population } = props.country;

  const divSize = {
    backgroundColor: "#7a7a52",
    color: "#FFFFFF",
  };
  const imgSize = {
    height: 100,
    width: 200,
  };

  return (
    <div style={divSize} className="col-3  m-1 text-center">
      <h4 className="text-warning">This is: {name}</h4>
      <img style={imgSize} src={flag} alt="" />
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        Capital is: {capital} population: {population}
      </p>
    </div>
  );
}
