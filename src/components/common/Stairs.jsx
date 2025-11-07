import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const Stairs = (props) => {
  const currentpath = useLocation().pathname;
  const divref = useRef(null);
  const pageref=useRef(null);

  console.log(currentpath);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(divref.current, {
        display: "block",
   
      });
      tl.from(".stairs", {
        height: 0,
        stagger: {
          amount: 0.6,
        },
      });
      tl.to(".stairs", {
        y: "100%",
        stagger: {
          stagger: { amount: 0.4, from: "start" },
        },
      });
      tl.to(divref.current, {
        display: "none",
      });
      tl.to(divref.current, {
        y: "0%",
      });

      gsap.from(pageref.current, {
        opacity: 0,
        delay: 1,
        scale:1.2
      });
    },
    [currentpath]
  );

  return (
    <div>
      <div className="h-screen w-full fixed top-0 z-20  " ref={divref}>
        <div className="  stairs  h-screen w-full  flex">
          <div className="stairs  w-1/5 h-full bg-black "></div>
          <div className="stairs  w-1/5 h-full bg-black "></div>
          <div className="stairs  w-1/5 h-full bg-black "></div>
          <div className="stairs  w-1/5 h-full bg-black "></div>
          <div className="stairs  w-1/5 h-full bg-black "></div>
        </div>
      </div>
      <div ref={pageref}>{props.children}</div>
    </div>
  );
};

export default Stairs;
