import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../../img/profile1.jpg";
import profilePic2 from "../../../img/profile2.jpg";
import profilePic3 from "../../../img/profile3.jpg";
import profilePic4 from "../../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempore quos neque ad unde non ex quod, assumenda fuga molestiae odio, facilis repellat architecto modi?",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempore quos neque ad unde non ex quod, assumenda fuga molestiae odio, facilis repellat architecto modi?",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempore quos neque ad unde non ex quod, assumenda fuga molestiae odio, facilis repellat architecto modi?",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tempore quos neque ad unde non ex quod, assumenda fuga molestiae odio, facilis repellat architecto modi?",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span> from me..</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial" id='Testimonials'>
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
