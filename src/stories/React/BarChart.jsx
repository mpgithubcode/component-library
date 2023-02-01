import PropTypes from "prop-types";
import { useState } from "react";

const BarChart = () => {
  const [data, setData] = useState();

  const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

  const fetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };
  

  return (
    <div>{
      "text"
    }</div>
  )
}

export default BarChart
