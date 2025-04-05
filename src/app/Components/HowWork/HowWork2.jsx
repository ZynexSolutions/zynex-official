import Image from "next/image";
import Link from "next/link";

const HowWork2 = () => {
  return (
    <div className="work3 sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="heading3">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                How We Work
              </span>
              <h2 className="title tg-element-title">
                Leverage our full digital expertise
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-right" data-aos-duration="700">
                Whether you want to consult an idea, add missing capabilities,
                quickly expand your team, or hand over a project – we’ve got you
                covered.{" "}
              </p>
              <div className="space30"></div>
              <div className="" data-aos="fade-right" data-aos-duration="900">
                <Link className="theme-btn4 btn--ripple ripple" href="/contact">
                  Connect With Us <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="big-image image-anime">
              <Image
                src="/images/group.png"
                alt="img"
                width={856}
                height={333}
              />
            </div>
          </div>
        </div>

        <div className="space30"></div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="work3-box">
              <div className="heading3">
                <span className="stap">STEP 01</span>
                <h3>
                  <Link href="">Consultation and Assessment </Link>
                </h3>
                <p>
                  The journey begins with a comprehensive consultation where we
                  take the time.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="work3-box">
              <div className="heading3">
                <span className="stap">STEP 02</span>
                <h3>
                  <Link href="">Customised Solution Design </Link>
                </h3>
                <p>
                  Based on the insights gathered during the consultation phase,
                  we will work closely with you.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="work3-box">
              <div className="heading3">
                <span className="stap">STEP 03</span>
                <h3>
                  <Link href="">Development and Implementation </Link>
                </h3>
                <p>
                  Once the solution design is finalized and approved, our
                  experienced developers.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="work3-box">
              <div className="heading3">
                <span className="stap">STEP 04</span>
                <h3>
                  <Link href="">Deployment and Integration</Link>
                </h3>
                <p>
                  With testing complete and your solution fully optimized, we
                  will proceed with deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork2;
