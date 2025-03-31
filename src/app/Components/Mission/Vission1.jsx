import Image from "next/image";
import Link from "next/link";

/**
 * Vision1 Component - Displays the company's vision with images and descriptions.
 *
 * @param {string} visionImage1 - URL for the main vision image (570x320), displayed prominently.
 * @param {string} visionImage2 - URL for the secondary vision image 1 (270x250), displayed in the image grid.
 * @param {string} visionImage3 - URL for the secondary vision image 2 (270x250), displayed in the image grid.
 * @param {string} spanImage - URL for the small span icon image (18x16), displayed next to the span text.
 * @param {string} visionTitle - The main title of the vision section.
 * @param {string} visionDescription - A detailed description of the company's vision.
 * @param {string} icon1 - URL for the icon associated with the first solution (28x28).
 * @param {string} title1 - The title of the first solution.
 * @param {string} description1 - A description of the first solution, supports HTML.
 * @param {string} icon2 - URL for the icon associated with the second solution (28x28).
 * @param {string} title2 - The title of the second solution.
 * @param {string} description2 - A description of the second solution, supports HTML.
 * @param {string} quoteLink - URL for the "Get a Quote" button.
 * @param {string} spanText - Text displayed in the span above the vision title.
 * @param {boolean} contentLeft - If true, the image appears on the right and the content on the left.
 *
 * @returns {JSX.Element} - A React component displaying the company's vision.
 */
const Vision1 = ({
  visionImage1 = "/assets/img/about/visiton-img1.png",
  visionImage2 = "/assets/img/about/visiton-img2.png",
  visionImage3 = "/assets/img/about/visiton-img3.png",
  spanImage = "/assets/img/icons/span1.png",
  visionTitle = "Driving Innovation: Our Vision at TechXen",
  visionDescription = "At TechXen, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an increasingly digital world.",
  icon1 = "/assets/img/icons/about-solution-iocn1.png",
  title1 = "Network Infrastructure Solutions",
  description1 = "Build a reliable and secure network infrastructure that <br/> supports your business operations enables seamless",
  icon2 = "/assets/img/icons/about-solution-iocn2.png",
  title2 = "Managed It Services",
  description2 = "Focus on your core business activities while we take <br/> care of your IT needs with our managed IT services.",
  quoteLink = "/contact",
  spanText = "Our Vision",
  contentLeft = false,
}) => {
  return (
    <div
      className="solution about-solution sp"
      style={{ paddingBottom: "50px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {contentLeft ? (
            <>
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span">
                    <Image src={spanImage} alt="img" width={18} height={16} />
                    {spanText}
                  </span>
                  <h2>{visionTitle}</h2>
                  <div className="space16"></div>
                  <p>{visionDescription}</p>

                  <div className="item-box">
                    <div className="icon">
                      <div className="">
                        <Image src={icon1} alt="img" width={28} height={28} />
                      </div>
                    </div>
                    <div className="">
                      <h3>
                        <a href="#">{title1}</a>
                      </h3>
                      <div className="space10"></div>
                      <p dangerouslySetInnerHTML={{ __html: description1 }}></p>
                    </div>
                  </div>

                  <div className="item-box">
                    <div className="icon">
                      <div className="">
                        <Image src={icon2} alt="img" width={28} height={28} />
                      </div>
                    </div>
                    <div className="">
                      <h3>
                        <a href="#">{title2}</a>
                      </h3>
                      <div className="space10"></div>
                      <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
                    </div>
                  </div>

                  <div className="space30"></div>
                  <div className="">
                    <Link className="theme-btn1" href={quoteLink}>
                      Get A Quote{" "}
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="images">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="image"
                        style={{
                          border: "1px solid #D3D3D3",
                          borderTopLeftRadius: "0.5rem",
                          borderTopRightRadius: "0.5rem",
                        }}
                      >
                        <Image
                          src={visionImage1}
                          alt="img"
                          width={636}
                          height={357}
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="image">
                        <Image
                          style={{ border: "1px solid #d3d3d3" }}
                          src={visionImage2}
                          alt="img"
                          width={306}
                          height={283}
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="image">
                        <Image
                          style={{ border: "1px solid #d3d3d3" }}
                          src={visionImage3}
                          alt="img"
                          width={306}
                          height={283}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <div className="images">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="image"
                        style={{
                          border: "1px solid #D3D3D3",
                          borderTopLeftRadius: "0.5rem",
                          borderTopRightRadius: "0.5rem",
                        }}
                      >
                        <Image
                          src={visionImage1}
                          alt="img"
                          width={636}
                          height={357}
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="image">
                        <Image
                          style={{ border: "1px solid #d3d3d3" }}
                          src={visionImage2}
                          alt="img"
                          width={306}
                          height={283}
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="space30"></div>
                      <div className="image">
                        <Image
                          style={{ border: "1px solid #d3d3d3" }}
                          src={visionImage3}
                          alt="img"
                          width={306}
                          height={283}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span">
                    <Image src={spanImage} alt="img" width={18} height={16} />
                    {spanText}
                  </span>
                  <h2>{visionTitle}</h2>
                  <div className="space16"></div>
                  <p>{visionDescription}</p>

                  <div className="item-box">
                    <div className="icon">
                      <div className="">
                        <Image src={icon1} alt="img" width={28} height={28} />
                      </div>
                    </div>
                    <div className="">
                      <h3>
                        <a href="#">{title1}</a>
                      </h3>
                      <div className="space10"></div>
                      <p dangerouslySetInnerHTML={{ __html: description1 }}></p>
                    </div>
                  </div>

                  <div className="item-box">
                    <div className="icon">
                      <div className="">
                        <Image src={icon2} alt="img" width={28} height={28} />
                      </div>
                    </div>
                    <div className="">
                      <h3>
                        <a href="#">{title2}</a>
                      </h3>
                      <div className="space10"></div>
                      <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
                    </div>
                  </div>

                  <div className="space30"></div>
                  <div className="">
                    <Link className="theme-btn1" href={quoteLink}>
                      Get A Quote{" "}
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vision1;
