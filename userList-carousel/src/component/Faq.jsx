import React from "react";
import "../App.css";

const Faq = () => {
  return (
    <div>
      <div className="faq-styling">
        <section className="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="faq-title text-center pb-3">
                  <h2>All the userList A's to your Q's</h2>
                </div>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="faq" id="accordion">
                  {faqItems.map((item, index) => (
                    <div className="card" key={index}>
                      <div className="card-header" id={`faqHeading-${index}`}>
                        <div className="mb-0">
                          <h5
                            className="faq-title"
                            data-toggle="collapse"
                            data-target={`#faqCollapse-${index}`}
                            aria-expanded={index === 0}
                            aria-controls={`faqCollapse-${index}`}
                          >
                            <span className="badge">{index + 1}</span>
                            {item.question}
                          </h5>
                        </div>
                      </div>
                      <div
                        id={`faqCollapse-${index}`}
                        className={`collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={`faqHeading-${index}`}
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text...",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
  },
  {
    question: "Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
  },
  {
    question: "Where does it come from?",
    answer:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested...",
  },
  {
    question: "Why do we use it?",
    answer:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text...",
  },
];

export default Faq;
