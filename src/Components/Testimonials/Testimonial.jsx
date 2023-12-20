import React from "react";
const Testimonial = () => {
  return (

<></>
  
  )
};
export default Testimonial;

// import React from "react";
// import {Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "./Testimonial.css";
// import { pagination } from "swiper";

// import img1 from "../../img/profile1.jpg";
// import img2 from "../../img/profile2.jpg";
// import img3 from "../../img/profile3.jpg";
// import img4 from "../../img/profile4.jpg";

// import "./swiper/css/pagination";

// const Testimonial = () => {
//   const clients = [
//     {
//       img: img1,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quos dignissimos fugit at assumenda",
//     },

//     {
//       img: img2,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quos dignissimos fugit at assumenda",
//     },
//     {
//       img: img3,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quos dignissimos fugit at assumenda",
//     },
//     {
//       img: img4,
//       review:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quos dignissimos fugit at assumenda",
//     },
//   ];
//   return (
//     <div className="t-wrapper">
//       <div className="t-heading">
//         <span>Clients alwayes get </span>
//         <span> Exceptional Work</span>
//         <span>from me...</span>

//         <div
//           className="blur t-blur1"
//           style={{ background: "var(--purple)" }}
//         ></div>
//         <div
//           className="blur t-blur2"
//           style={{ background: "var(--skyblue)" }}
//         ></div>
//       </div>

//       {/* slider  */}

//       <Swiper
//         modules={[pagination]}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {clients.map((client, index) => {
//           return (
//             <SwiperSlide key={index}>
//               <img src={client.img} alt="" />
//               <span> {client.review}</span>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };
// export default Testimonial;