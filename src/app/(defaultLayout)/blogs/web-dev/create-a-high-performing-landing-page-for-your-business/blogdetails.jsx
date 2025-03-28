import Image from "next/image";
import Link from "next/link";

const BlogDetailsLeft1 = () => {
  return (
    <div className="service-details-area-all sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar-box-area mb-40">
              <h3>Search by Keyword</h3>
              <div className="search">
                <input type="text" placeholder="Type keyword here" />

                <div className="button">
                  <button>
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Our Services</h3>
              <ul className="features-list">
                <li>
                  <Link href="/service/service-details">
                    Software Development{" "}
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Consulting Service{" "}
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Cloud Solution{" "}
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Cyber Security{" "}
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Data Analytics{" "}
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/service/service-details">
                    Manage It Services{" "}
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Recent Blogs</h3>
              <div className="sidebar-blog-boxs">
                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/assets/img/blog/blog-details-sidebar1.png"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <Image
                        src="/assets/img/icons/date.png"
                        alt="img"
                        width={20}
                        height={20}
                      />
                      19/02/2024
                    </a>
                    <h5>
                      <Link href="/blog/blog-details">
                        We take a deep dive into the future of cloud computing{" "}
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/assets/img/blog/blog-details-sidebar2.png"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <Image
                        src="/assets/img/icons/date.png"
                        alt="img"
                        width={20}
                        height={20}
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <Link href="/blog/blog-details">
                        Our team of experts will provide in-depth analysis{" "}
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/assets/img/blog/blog-details-sidebar3.png"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <Image
                        src="/assets/img/icons/date.png"
                        alt="img"
                        width={20}
                        height={20}
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <Link href="/blog/blog-details">
                        Our case studies and success stories highlight
                        real-world{" "}
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/assets/img/blog/blog-details-sidebar3.png"
                        alt="img"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="heading">
                    <a href="#" className="date">
                      <Image
                        src="/assets/img/icons/date.png"
                        alt="img"
                        width={20}
                        height={20}
                      />{" "}
                      19/02/2024
                    </a>
                    <h5>
                      <Link href="/blog/blog-details">
                        One of the primary objectives of cybersecurity is to
                        protect{" "}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Tags</h3>
              <ul className="tags">
                <li>
                  <a href="#">Software Development</a>
                </li>
                <li>
                  <a href="#">Cloud </a>
                </li>
                <li>
                  <a href="#">It Solution</a>
                </li>
                <li>
                  <a href="#">Data Analytics Service</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Custom Development</a>
                </li>
                <li>
                  <a href="#">Cyber Security</a>
                </li>
                <li>
                  <a href="#">Consulting Service</a>
                </li>
              </ul>
            </div>

            <div className="sidebar-box-area sidebar-bg mb-40">
              <h3>Download Brochure</h3>
              <p>
                With a focus on excellence & commitment to exceeding
                expectations, our experienced team is here to empower Solution.
              </p>
              <div className="download-btns">
                <a className="daownload1" href="#">
                  PDF Download{" "}
                  <Image
                    src="/assets/img/icons/download-img.png"
                    alt="img"
                    width={19}
                    height={18}
                  />
                </a>
                <a className="daownload2" href="#">
                  DOC Download{" "}
                  <Image
                    src="/assets/img/icons/download-img.png"
                    alt="img"
                    width={19}
                    height={18}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 details-left-space">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  <div className="image">
                    <Image
                      src="/assets/img/others/project-details-img1.png"
                      alt="img"
                      width={838}
                      height={503}
                    />
                  </div>
                  <div className="social-users">
                    <ul>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon1.png"
                            alt="img"
                            width={16}
                            height={16}
                          />{" "}
                          John William
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon2.png"
                            alt="img"
                            width={16}
                            height={16}
                          />{" "}
                          Feb 25, 24
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon3.png"
                            alt="img"
                            width={16}
                            height={16}
                          />{" "}
                          Cyber Security
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon4.png"
                            alt="img"
                            width={20}
                            height={16}
                          />{" "}
                          03 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h2>
                      Create a High-Performing Landing Page for Your Business
                    </h2>
                    <div className="space16"></div>
                    <p>
                      In today’s digital age, having a powerful landing page is
                      essential for businesses aiming to generate leads, drive
                      sales, or promote special offers. A landing page is a
                      standalone web page created specifically for marketing
                      campaigns, designed to encourage visitors to take a single
                      action—whether it’s signing up for a newsletter,
                      purchasing a product, or requesting a service. Unlike a
                      homepage, which offers multiple navigation options, a
                      landing page focuses on one clear goal, making it a
                      critical tool for boosting conversions. However, to create
                      a landing page that truly performs, you need more than
                      just an attractive design—you need a strategic approach
                      that combines compelling content, visual appeal, and clear
                      calls to action.
                    </p>
                  </div>
                </div>
              </article>

              <div className="space50"></div>
              <article>
                <div className="details-post-area">
                  <div className="heading1">
                    <h5>
                      Why Landing Pages Outperform Homepages in Driving
                      Conversions?
                    </h5>
                    <div className="space16"></div>
                    <p>
                      Unlike a typical website homepage, which features a full
                      navigation bar with multiple links to different sections,
                      a well-crafted landing page is designed with laser focus
                      on a single goal. It contains one primary call-to-action
                      (CTA) or multiple links that all direct users to the same
                      destination. By removing unnecessary navigation and
                      minimizing outbound links, landing pages eliminate
                      distractions—making it easier for visitors to stay on the
                      page and take the desired action. This streamlined
                      approach significantly <b>boosts conversion rates</b> by
                      reducing competing choices.
                      <br />
                      <br />
                      In contrast, your website’s homepage serves a broader
                      purpose. It showcases your brand identity, highlights
                      various products or services, provides access to blogs,
                      support resources, and even job openings. While the
                      homepage offers a comprehensive view of your business, it
                      isn’t designed for direct conversion. Instead, it
                      encourages exploration, which may or may not lead to
                      immediate sales.
                      <br />
                      <br />
                      Landing pages, on the other hand, are
                      <b>campaign-specific.</b>
                      Since they are directly linked to ads or marketing
                      efforts, visitors arriving on a landing page are already
                      warm leads—they’ve shown interest by clicking on a
                      targeted ad or post from platforms like{" "}
                      <b>
                        {" "}
                        Google, Bing, YouTube, Facebook, Instagram, or LinkedIn.
                      </b>{" "}
                      As a result, landing pages capitalize on this pre-existing
                      interest by providing precisely tailored content and a
                      clear next step, making them far more effective at
                      <b> generating qualified leads</b> and driving
                      conversions.
                    </p>
                  </div>
                </div>
              </article>

              <div className="space30"></div>

              <article>
                <div className="details-post-area">
                  <div className="video-area-image">
                    <div className="image">
                      <Image
                        src="/assets/img/blog/blog-post-video-img.png"
                        alt="img"
                        width={838}
                        height={503}
                      />
                    </div>
                  </div>

                  <div className="space16"></div>
                  <div className="space30"></div>
                  <div className="heading1">
                    <h5>Crafting a User-Centric Landing Page</h5>
                    <div className="space20"></div>
                    <p>
                      An <b>effective landing page</b> is defined by its
                      clarity, focus, and ease of use, guiding visitors toward a
                      single, well-defined action. Unlike multi-purpose website
                      pages, a landing page eliminates unnecessary options and{" "}
                      <b>
                        keeps the user’s attention firmly on the primary
                        call-to-action (CTA).
                      </b>
                      <br />
                      <br />
                      From a content perspective, the copy should be concise and
                      purposeful, delivering a singular, compelling message. The
                      <b>
                        {" "}
                        headline must immediately communicate the desired action
                      </b>
                      you want visitors to take, while the supporting text
                      briefly outlines the benefits of performing this action.
                      This direct, benefit-driven approach ensures users
                      immediately understand why they should engage.
                      <br />
                      <br />
                      Visually, the landing page should adhere to a{" "}
                      <b> minimalist design philosophy</b>. This is not the
                      place to showcase excessive brand flair or introduce
                      complex visual elements. Avoid flashy animations or
                      intricate layouts that may distract users from the primary
                      objective. Instead, opt for clean, simple visuals that
                      enhance readability and maintain focus.
                      <br />
                      <br />
                      The <b>CTA itself— </b>typically presented as a button,
                      occasionally paired with an input field—should be highly
                      visible and action-oriented. To maximize click-through
                      rates, use contrasting colors that make the button stand
                      out against the background. The button text should be
                      explicit and unambiguous, clearly stating the action the
                      user is about to take (e.g., “Book a Demo” rather than
                      “Submit”).
                      <br />
                      <br />
                      By stripping away distractions and emphasizing clarity,
                      your landing page becomes a{" "}
                      <b>frictionless pathway to conversion</b>, driving
                      meaningful engagement and delivering higher ROI on your
                      campaigns.
                    </p>
                  </div>
                </div>
              </article>

              <div className="blog-details-border"></div>

              <div className="tags-links">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tags">
                      <ul>
                        <li className="text">Tags:</li>
                        <li className="tag-text">
                          <a href="#">Business </a>
                        </li>
                        <li className="tag-text">
                          <a href="#">Services </a>
                        </li>
                        <li className="tag-text">
                          <a href="#">IT Solution </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="social">
                      <ul>
                        <li className="text">Social:</li>
                        <li className="icon">
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </li>
                        <li className="icon">
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                        </li>
                        <li className="icon">
                          <a href="#">
                            <i className="bi bi-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-details-border"></div>

              {/* <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Blog Comments (2)</h5>

                                        <div className="comment-box">
                                            <div className="box-top-area">
                                                <div className="heading-area">
                                                    <div className="image">
                                                    <Image src="/assets/img/blog/comment-box-image1.png" alt="img" width={70} height={70}   />
                                                    </div>
                                                    <div className="heading">
                                                        <h5><a href="#">Mr. Ana Ritchie</a></h5>
                                                        <a href="#" className="date">8/1/2024</a>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#"><span><i className="bi bi-reply-fill"></i></span> Reply</a>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <p className="pera">The team at TechXen goes above and beyond to provide exceptional support and service. From the initial consultation to the final deployment, they were there every step of the way, ensuring a seamless integration of our new technology solution.</p>
                                        </div>

                                        <div className="comment-box comment-box2">
                                            <div className="box-top-area">
                                                <div className="heading-area">
                                                    <div className="image">
                                                    <Image src="/assets/img/blog/comment-box-image2.png" alt="img" width={70} height={70}   />
                                                    </div>
                                                    <div className="heading">
                                                        <h5><a href="#">Matthew Kuhnemann</a></h5>
                                                        <a href="#" className="date">8/1/2024</a>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#"><span><i className="bi bi-reply-fill"></i></span> Reply</a>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <p className="pera">We approached TechXen with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their teams creativity, technical prowess, and dedication to client satisfaction are truly commendable.</p>
                                        </div>

                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">Submit Now <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>

                                    </div>
                                </form>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLeft1;
