import React from "react";
import Card from "./Components/Card/Card";
import Sdata from "./Sdata";

const nCard = (val) => {
  return(
    <Card
    key={val.id}
    imgsrc={val.imgsrc}
    category={val.category}
    title={val.title}
    link={val.link}
  />
  )

};
const App = () => {
  return (
    <>
      <h1 className="heading_style">List fo Top 5 Netflix series</h1>
      {Sdata.map(nCard)}
    </>
  );
};

export default App;
