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
              <div className="col-md-6 ">
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
              <div className="col-md-6 d-flex flex-column justify-content-center mb-4 container">
                <div className="col-md-12 mb-4">
                  <img src="https://static.vecteezy.com/system/resources/previews/015/411/455/non_2x/two-bloggers-recording-video-adult-persons-having-an-emotional-conversation-on-camera-social-media-network-process-friends-making-content-for-their-channel-camera-ring-light-on-tripods-vector.jpg" alt="" style={{height:"250px",width:"100%",borderRadius:"10px"}}/>
                </div>
                <div className="d-flex flex-row col-md-6 justify-content-between align-items-center">
                  <img src="https://thumbs.dreamstime.com/b/mobile-phone-users-taking-photo-recording-videos-internet-addicted-people-making-sharing-content-online-social-media-network-280275142.jpg" alt="" style={{width:"100%",height:"250px",borderRadius:"10px"}}/>
                  <img src="https://img.freepik.com/free-vector/young-people-listening-music-illustrated_23-2148287452.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais" alt="" style={{width:"100%",height:"250px",borderRadius:"10px",marginLeft:"1.8rem"}} />
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
