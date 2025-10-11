"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function LogoDisplay1({ title, branddata = [] }) {
    if (!branddata.length) return null;
    const half = Math.ceil(branddata.length / 2);
    const brands1 = branddata.slice(0, half);
    const brands2 = branddata.slice(half);
    const settings = {
        infinite: true,
        speed: 12000, // slower for smooth feel
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        swipeToSlide: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 1200, // intermediate
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    // settings for reverse (dir=rtl for opposite)
    const settings2 = { ...settings, rtl: true };

    return (
        <div className="logo-display-1">
            <div className="container">
                <div className="logo-display-title">
                    <p>{title}</p>

                    <div className="logo-marquee-wrapper">
                        <Slider {...settings} className="logo-marquee-1">
                            {brands1.map((item, i) => (
                                <div key={i} className="logo-display-item-1">
                                    <Image src={item.img} alt="img" width={140} height={50} />
                                </div>
                            ))}
                        </Slider>
                        <Slider {...settings2} className="logo-marquee-2">
                            {brands2.map((item, i) => (
                                <div key={i} className="logo-display-item-2">
                                    <Image src={item.img} alt="img" width={140} height={50} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
