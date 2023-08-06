import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const card = data.map((props) => {
    return <Card {...props} />;
  });
  return (
    <div>
      <Header />
      {card}
    </div>
  );
}
