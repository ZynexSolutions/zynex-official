import Image from "next/image";
import Link from "next/link";

const Blog3 = () => {
  return (
    <div className="blog3 sp" style={{ paddingTop: "0px" }}>
      <div className="container">
        {/* <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading3">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700"> Our Blog & News</span>
                <h2 className="title tg-element-title">Unlocking The Power Of Technology: Insights From TechXen</h2>
              </div>
            </div>
          </div> */}

        {/* <div className="space30"></div> */}
        <div className="row">
          <div className="col-lg-6">
            <div
              className="blog3-box"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="image image-anime">
                <Image
                  src="/images/portfolio/mda.png"
                  alt="img"
                  width={588}
                  height={458}
                />
              </div>
              <div className="heading3">
                <div className="space16"></div>
                <div className="namba-tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + "Android & IOS Application"}
                  </a>
                </div>

                <div className="space16"></div>
                <h3>
                  <Link href="/blog/blog-details">
                    Crafted a Sophisticated E-Learning App for Madras Defence
                    Academy
                  </Link>
                </h3>
                <div className="space16"></div>
                <p>
                  Revolutionized online education with a custom e-learning app,
                  enhancing accessibility and engagement for defence aspirants.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="blog3-box"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="image image-anime">
                <Image
                  src="/images/portfolio/horo.png"
                  alt="img"
                  width={588}
                  height={458}
                />
              </div>
              <div className="heading3">
                <div className="space16"></div>
                <div className="namba-tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + "AI Chatbot"}
                  </a>
                </div>

                <div className="space16"></div>
                <h3>
                  <Link href="/blog/blog-details">
                    Developed a Intelligent Horoscope AI with custom LLM
                    Architecture
                  </Link>
                </h3>
                <div className="space16"></div>
                <p>
                  Developed a smart horoscope AI powered by a tailored LLM,
                  delivering personalized and accurate astrological insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div
              className="blog3-box"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="image image-anime">
                <Image
                  src="/images/portfolio/ebook.png"
                  alt="img"
                  width={588}
                  height={458}
                />
              </div>
              <div className="heading3">
                <div className="space16"></div>
                <div className="namba-tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + "Website & Sales Campaign"}
                  </a>
                </div>

                <div className="space16"></div>
                <h3>
                  <Link href="/blog/blog-details">
                    50% increase in eBook sales with targeted Sales Campaign
                    strategy
                  </Link>
                </h3>
                <div className="space16"></div>
                <p>
                  Built a custom eBook platform and launched a strategic ad
                  campaign, boosting sales and customer reach in just 4 weeks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="blog3-box"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="image image-anime">
                <Image
                  src="/images/portfolio/silvercastle.png"
                  alt="img"
                  width={588}
                  height={458}
                />
              </div>
              <div className="heading3">
                <div className="space16"></div>
                <div className="namba-tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + "Landing Page & Lead Campaign"}
                  </a>
                </div>

                <div className="space16"></div>
                <h3>
                  <Link href="/blog/blog-details">
                    Landing Page and Ad Campaign for Silver Castle Skyrocketed
                    they business.
                  </Link>
                </h3>
                <div className="space16"></div>
                <p>
                  Created a high-converting landing page and ad campaign,
                  boosting Silver Castle’s business growth significantly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div
              className="blog3-box"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="image image-anime">
                <Image
                  src="/images/portfolio/hogist2.png"
                  alt="img"
                  width={588}
                  height={458}
                />
              </div>
              <div className="heading3">
                <div className="space16"></div>
                <div className="namba-tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + "Business Automation with AI"}
                  </a>
                </div>

                <div className="space16"></div>
                <h3>
                  <Link href="/blog/blog-details">
                    Elevated Hogist Customer Service by the process through Gen
                    AI
                  </Link>
                </h3>
                <div className="space16"></div>
                <p>
                  Enhanced Hogist’s customer service by automating processes
                  with Gen AI, driving process efficiency and satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="blog3-box"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <div className="image image-anime">
                <Image
                  src="/images/portfolio/strategytrader.png"
                  alt="img"
                  width={588}
                  height={458}
                />
              </div>
              <div className="heading3">
                <div className="space16"></div>
                <div className="namba-tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + "Web & Mobile Application"}
                  </a>
                </div>

                <div className="space16"></div>
                <h3>
                  <Link href="/blog/blog-details">
                    Empowering Strategy Trader with a Personalized Course
                    Selling Platform
                  </Link>
                </h3>
                <div className="space16"></div>
                <p>
                  Built a personalized course-selling platform, empowering
                  Strategy Trader to expand their reach and revenue online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
