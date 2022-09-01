import React, { useState } from "react";
import faqs from "../faq-data";
import arrow from "../images/icon-arrow.svg";

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const [faqSelected, setFaqSelected] = useState(null);
  const onClickItem = (id) => {
    setFaqOpen((prev) => !prev);
    setFaqSelected(id);
  };
  return (
    <section className="faq">
      <h1 className="text-center">Frequently Asked Questions</h1>

      <p className="desc faq-desc">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="question">
        <ul className="items-ul">
          {faqs.map((faq) => {
            return (
              <div className="items" key={faq.id}>
                <li onClick={() => onClickItem(faq.id)}>
                  <span>
                    {faq.question}
                    <img className="arrow-svg" src={arrow} alt="arrow" />
                  </span>
                </li>
                {console.log(faqOpen)}
                <li
                  className={
                    faqOpen && faqSelected === faq.id
                      ? "faq-ans"
                      : "faq-ans faq-hide"
                  }
                >
                  {faq.ans}
                </li>
              </div>
            );
          })}
        </ul>
        <div className="d-flex mb-3">
          <button className="btn btn-chrome text-center mt-5">More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
