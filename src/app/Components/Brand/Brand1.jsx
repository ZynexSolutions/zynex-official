"use client"
import Slider from "react-slick";
import data from '../../Data/home5/brand.json';
import Image from "next/image";

const Brand1 = ({ title, branddata, direction = "left" }) => {

  title = title || "Trusted by leading organizations and institutions";
  branddata = branddata || data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="brands6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brands-area-all">
              <p>{title}</p>
              <div className="brands6-slider owl-carousel">
                <Slider {...settings} rtl={direction === "right"}>
                  {branddata.map((item, i) => (
                    <div key={i} className="single-slider brand-image-area">
                      <Image src={item.img} alt="img" width={150} height={50} className="brand-image" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;