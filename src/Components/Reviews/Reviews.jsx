import { AiFillStar } from "react-icons/ai";
import "./Reviews.css";

import Client1 from "../../Assets/Client1.jpg";
import Client2 from "../../Assets/Client2.jpg";
import Client3 from "../../Assets/Client3.jpg";
import Client4 from "../../Assets/Client4.jpg";
import Client5 from "../../Assets/Client5.jpg";
import Image from "../../Assets/Image.jpg";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos="fade-up">
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>

          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex" data-aos="fade-up">
            <img src={Client1} alt="Client Image" />
            <img src={Client2} alt="Client Image" />
            <img src={Client3} alt="Client Image" />
            <img src={Client4} alt="Client Image" />
            <img src={Client5} alt="Client Image" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={Image} alt="Div Image" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
