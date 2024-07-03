import React, { useState } from "react";
import './Faq.css'
import { FaCaretDown } from "react-icons/fa";

// import 'bootstrap/dist/css/bootstrap.css';
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const showAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAnswers = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div className="bgg2">
      <div className="container mb-4 brdr bg-blue py-4 bgg2">
      <article>
        <div className="img-container"></div>
        <div className="faq">
          <h2>All the UserList A's to your Q's</h2>
          {questionsAnswers.map((item, index) => (
            <div className="q-a" key={index}>
              <div
                className="q-wrapper"
                onClick={() => showAnswer(index)}
                onKeyDown={(e) => e.key === "Enter" && showAnswer(index)}
                tabIndex="0"
              >
                <h3 className={activeIndex === index ? "h3-active" : ""}>
                  {item.question}
                </h3>
                <FaCaretDown  style={{height:"25px",width:"25px"}}/>

              </div>
              <p className={activeIndex === index ? "p-visible" : ""}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>  
    </div>
  );
};

export default Faq;
