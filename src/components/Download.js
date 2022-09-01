import React from "react";
import Card from "../UI/Card";
import cardData from "../cards-data";
import dots from "../images/bg-dots.svg";

const Download = () => {
  return (
    <section className="download">
      <h2>Download the extension</h2>
      <p className="desc">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="cards">
        {cardData.map((data) => {
          return (
            <Card>
              <>
                <img className="card-img" src={data.img} alt="browser" />
                <h3>{data.descH1}</h3>
                <p>{data.descP}</p>
                <img className="dots" src={dots} alt="dots" />
                <button className="btn btn-chrome">{data.btn}</button>
              </>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Download;
