import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Blog1 = () => {
  return (
    <div className="blog sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <SectionTitle
                SubTitle="Blog & Latest News"
                Title="Latest News & Blog"
              ></SectionTitle>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="blog-box"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <div className="image image-anime">
                <Image
                  src="/images/blogs/blog2-img8.png"
                  alt="img"
                  width={414}
                  height={252}
                />
              </div>
              <div className="heading">
                <div className="tags">
                  <a href="#">
                    <Image
                      src="/assets/img/icons/blog-icon1.png"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    Rahul B.
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/img/icons/blog-icon2.png"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    Feb 16, 25
                  </a>
                </div>
                <h4>
                  <Link href="/blog/blog-details">
                    Why Medusa is better than Sphopify and Woocommerce?
                  </Link>
                </h4>
                <Link href="/blog/blog-details" className="learn">
                  Learn More{" "}
                  <span>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="blog-box"
              data-aos="zoom-in-up"
              data-aos-duration="900"
            >
              <div className="image image-anime">
                <Image
                  src="/images/blogs/blog2-img5.png"
                  alt="img"
                  width={414}
                  height={252}
                />
              </div>
              <div className="heading">
                <div className="tags">
                  <a href="#">
                    <Image
                      src="/assets/img/icons/blog-icon1.png"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    Sabari H.
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/img/icons/blog-icon2.png"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    Feb 25, 25
                  </a>
                </div>
                <h4>
                  <Link href="/blog/blog-details">
                    Create a high performing Landing page for your Business{" "}
                  </Link>
                </h4>
                <Link href="/blog/blog-details" className="learn">
                  {" "}
                  Learn More{" "}
                  <span>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="blog-box"
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <div className="image image-anime">
                <Image
                  src="/images/blogs/blog2-img1.png"
                  alt="img"
                  width={414}
                  height={252}
                />
              </div>
              <div className="heading">
                <div className="tags">
                  <a href="#">
                    <Image
                      src="/assets/img/icons/blog-icon1.png"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    Rahul B.
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/img/icons/blog-icon2.png"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    Mar 14, 25
                  </a>
                </div>
                <h4>
                  <Link href="/blog/blog-details">
                    AI tools that you need to use in your Business
                  </Link>
                </h4>
                <Link href="/blog/blog-details" className="learn">
                  {" "}
                  Learn More{" "}
                  <span>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
