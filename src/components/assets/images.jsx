import React from "react";

import Vec1 from "../../assets/vec1.svg";
import Vec2 from "../../assets/vec2.svg";
import Vec3 from "../../assets/vec3.svg";
import Vec4 from "../../assets/vec4.svg";
import Hack1 from "../../assets/hack.jpg";

const Image1 = () => {
  return (
    <>
      <img src={Vec1} />
    </>
  );
};

const Image2 = () => {
  return (
    <>
      <img src={Vec2} />
    </>
  );
};

const Image3 = () => {
  return (
    <>
      <img src={Vec3} />
    </>
  );
};

const Image4 = () => {
  return (
    <>
      <img src={Vec4} />
    </>
  );
};

const HackCardImg = () => {
  return (
    <>
      <img src={Hack1} style={{ width: "120px" }} />
    </>
  );
};

export { Image1, Image2, Image3, HackCardImg, Image4 };
