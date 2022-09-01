import React, { useState } from "react";
import tabFeatures from "../feature-tabs";

const Features = () => {
  const names = tabFeatures.map((tabs) => tabs.name);
  const [active, setActive] = useState(true);
  const [selected, setSelected] = useState("Simple Bookmarking");
  const onClickTab = (name) => {
    setActive(true);
    setSelected(name);
  };
  return (
    <>
      <section className="features">
        <h2>Features</h2>
        <p className="desc">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </section>
      <div className={`tab-wrapper ${active ? "active" : ""}`}>
        <div className="tabs">
          <div className="tab-names">
            {names.map((name) => {
              console.log(selected === name);
              return (
                <h4
                  onClick={() => onClickTab(name)}
                  className={selected !== name ? "names" : "names active"}
                >
                  {name}
                </h4>
              );
            })}
          </div>
        </div>

        {tabFeatures.map((tabfeature) => {
          {
            return (
              tabfeature.name === selected && (
                <div className="tab" key={tabfeature.id}>
                  <img
                    className="feature-img"
                    src={tabfeature.img}
                    alt="feature"
                  />
                  <div className="feature-img-bg">&nbsp;</div>
                  <div className="feature-info">
                    <h4>{tabfeature.name}</h4>
                    <p>{tabfeature.desc}</p>
                    <button className="btn btn-chrome">More Info</button>
                  </div>
                </div>
              )
            );
          }
        })}
      </div>
    </>
  );
};

export default Features;
