import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <article>
        <section className="card" style={{ backgroundColor: "#C5FFF8" }}>
          <div className="text-content">
            <h3>What is userList?</h3>
            <p>
              userList a dedicated platform designed to support Micro, Small,
              and Medium Enterprises. Our app offers a suite of features to help
              businesses grow, connect with customers, and streamline their
              operations.
            </p>
          </div>
          <div className="visual">
            <img
              src="https://cdn.prod.website-files.com/5f0fd69d589737869f5cd203/61f3813cf8402e6a9e063c62_animation%20video%20service%20-%20video%20supply%202.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="card" style={{ backgroundColor: "#FFE9D0" }}>
          <div className="text-content">
            <h3>Discover and Share</h3>
            <p>
              Explore a personalized feed of recent videos and images tailored
              just for you. Enjoy a full-screen viewing experience where each
              video showcases the Business Name, Video Title, and Description,
              immersing you in the content. Additionally, you can contribute by
              posting your own videos, images, and text
            </p>
          </div>
          <div className="visual">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/531/386/original/young-people-with-smartphones-chatting-happy-boys-and-girls-talking-and-typing-on-phone-female-and-male-characters-collection-flat-cartoon-illustration-vector.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="card" style={{ backgroundColor: "#C5FFF8" }}>
          <div className="text-content">
            <h3>Trusted Business Guide</h3>
            <p className="special">
              Discover a curated list of top-rated businesses ranked by ratings
              and reviews, showcasing their credibility and success. Access
              detailed insights for each business, including their name,
              address, contact number, and user comments, providing you with all
              the information you need. Share your own experiences by submitting
              reviews and comments
            </p>
          </div>
          <div className="visual">
            <img
              src="https://c8.alamy.com/comp/2E57J7E/concept-of-successful-task-completion-organize-effective-daily-plan-2E57J7E.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="card" style={{ backgroundColor: "#FFE9D0" }}>
          <div className="text-content">
            <h3 className="special">Unlock Exclusive Benefits</h3>
            <p className="special">
              Stay updated with your subscribed stores, where you can view their
              latest offers and detailed business information. Effortlessly
              monitor all your tasks, both active and completed, ensuring you
              stay on top of your responsibilities and never miss an opportunity
              to engage with the businesses you follow.
            </p>
          </div>
          <div className="visual">
            <div className="image-container"></div>
          </div>
        </section>
      </article>

    
    </>
  );
};

export default Homepage;
