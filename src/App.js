import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import axios from "axios";
import { BallSpinner } from "react-spinners-kit";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-back-project.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <BallSpinner size={30} color="#00cdbd" loading={isLoading} />
    </div>
  ) : (
    <>
      <Header />
      <Hero data={data.restaurant} />
      <Content data={data.categories} />
    </>
  );
}

export default App;
