import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    // "https://deliveroo-back-project.herokuapp.com/"
    const response = await axios.get("http://localhost:3200/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Header />
      <Hero data={data.restaurant} />
      <Content data={data.categories} />
    </>
  );
}

export default App;
