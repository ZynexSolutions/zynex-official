import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
  return (
    <div className="footer1 _relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <a href="">
                  <Image
                    src="/images/logo.png"
                    alt="img"
                    width={159}
                    height={46}
                  />
                </a>
              </div>
              <div className="space20"></div>
              <div className="heading1">
                <p>
                  At Zynex Solutions, we are dedicated to delivering innovative{" "}
                  <b>Software Solutions</b> tailored to meet the unique needs of
                  your businesses.{" "}
                </p>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>

              <ul className="menu-list">
                <li>
                  <Link href="">Web Development Services</Link>
                </li>
                <li>
                  <Link href="">Ecommerce Solutions</Link>
                </li>
                <li>
                  <Link href="">Mobile App Development</Link>
                </li>
                <li>
                  <Link href="">LLM & Gen AI Services</Link>
                </li>
                <li>
                  <Link href="">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Useful Links</h3>

              <ul className="menu-list">
                <li>
                  <Link href="/about">About Us </Link>
                </li>
                <li>
                  <Link href="/service">Our Services</Link>
                </li>
                <li>
                  <Link href="/blog">Insights</Link>
                </li>
                <li>
                  <Link href="/portfolio">Project</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              {/* <div className="contact-box">
                                        <div className="icon">
                                             <Image src="/assets/img/icons/footer1-icon1.png" alt="img" width={24} height={24} />
                                        </div>
                                        <div className="pera">
                                             <a href="tel:0500222333">0500 222 333</a>
                                        </div>
                                   </div> */}

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon2.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="tel:0356588547">03 5658 8547</a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon3.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="mailto:enquire@zynexsolutions.com">
                    business@zynexsolutions.com
                  </a>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image
                    src="/assets/img/icons/footer1-icon4.png"
                    alt="img"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="pera">
                  <a href="mailto:admin@techxen.org">www.zynexsolutions.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space40"></div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>Copyright @2025 ZynexSolutions.All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
