import Link from "next/link";

import Image from "next/image";

export const blogData = [
  {
    imgSrc: "/images/portfolio/horo.png",
    tag: "AI Chatbot",
    date: "May,27,2024",
    title: "Developed a Intelligent Horoscope AI with Agentic AI",
    content:
      "We've create a high convertion landing page for Silver Castle Manpower, which helped them get more leads and increase their sales by...",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/images/portfolio/mda.png",
    tag: "Android & IOS Application",
    date: "May,27,2024",
    title: "Crafted a Sophisticated E-Learning App for Madras Defence Academy",
    content:
      "We've developed an e-learning app for Madras Defence Academy, which helped them educate students, build a community and increase...",
    link: "/blog/blog-details",
  },

  {
    imgSrc: "/images/portfolio/strategytrader.png",
    tag: "Landing Page",
    date: "May,27,2024",
    title:
      "Empowering Strategy Trader with a Personalized Course Selling Platform",
    content:
      "Whether you are seeking expert advice on cybersecurity, cloud computing, data analytics,",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/images/portfolio/silvercastle.png",
    tag: "Website & Marketing",
    date: "May,27,2024",
    title:
      "A Lead Generation Campaign for Silver Castle Manpower with high ROAS",
    content:
      "We've helped Silver Castle Manpower generate leads with high Retun on Ad Spend. we were able to get 300 leads in just 2 weeks...",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/images/portfolio/ebook.png",
    tag: "Website & Marketing",
    date: "May,27,2024",
    title:
      "Empowering Strategy Trader with a Personalized Course Selling Platform",
    content:
      "Whether you are seeking expert advice on cybersecurity, cloud computing, data analytics,",
    link: "/blog/blog-details",
  },
  {
    imgSrc: "/images/portfolio/hogist.png",
    tag: "Business Automation using AI",
    date: "May,27,2024",
    title: "Elevated Hogist Customer Service with a Cutting-Edge AI Chatbot",
    content:
      "We've delivered a state of the art AI chatbot which allows hogist to handle multiple customers and collect meaninful insights to ...",
    link: "/blog/blog-details",
  },
];

const BlogCustom = () => {
  return (
    <div className="blog7 sp" style={{ paddingTop: "0px" }}>
      <div className="container">
        {/* First Row of Blogs */}
        <div className="row">
          {blogData.slice(0, 3).map((blog, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration={700 + index * 200}
              key={`first-${index}`}
            >
              <div className="blog-box">
                <div className="image image-anime">
                  <Image src={blog.imgSrc} alt="img" width={416} height={304} />
                </div>
                <div className="tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + blog.tag}
                  </a>
                  {/* <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/date6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    {blog.date}
                  </a> */}
                </div>
                <div className="heading7">
                  <h4>
                    <Link href={blog.link}>{blog.title}</Link>
                  </h4>
                  <p>{blog.content}</p>
                  {/* <Link href={blog.link} className="learn">
                    Learn More{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Blogs with inline style for margin-top */}
        <div className="row" style={{ marginTop: "20px" }}>
          {blogData.slice(3).map((blog, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration={700 + index * 200}
              key={`second-${index}`}
            >
              <div className="blog-box">
                <div className="image image-anime">
                  <Image src={blog.imgSrc} alt="img" width={416} height={304} />
                </div>
                <div className="tags-area">
                  <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/tag6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    {" " + blog.tag}
                  </a>
                  {/* <a href="#" className="tag">
                    <Image
                      src="/assets/img/icons/date6.svg"
                      alt="img"
                      width={16}
                      height={16}
                    />{" "}
                    {blog.date}
                  </a> */}
                </div>
                <div className="heading7">
                  <h4>
                    <Link href={blog.link}>{blog.title}</Link>
                  </h4>
                  <p>{blog.content}</p>
                  {/* <Link href={blog.link} className="learn">
                    Learn More{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCustom;
