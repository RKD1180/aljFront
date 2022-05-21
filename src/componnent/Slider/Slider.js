import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import sl1 from "../../asset/image/sl1.jpg";
import sl2 from "../../asset/image/sl2.jpg";
import sl3 from "../../asset/image/sl3.jpg";
import sl4 from "../../asset/image/sl4.jpg";

const images = [{ url: sl1 }, { url: sl2 }, { url: sl3 }, { url: sl4 }];

const Slider = () => {
  return (
    <div style={{ marginTop: 20, marginBottom: 30 }}>
      <SimpleImageSlider
        width={"85%"}
        height={404}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
