import Image from "next/image";
import Link from "next/link"; // Keep Link if you intend to use it elsewhere

const BlogDetailsLeft1 = () => {
  return (
    <div className="service-details-area-all sp">
      <div className="container">
        <div className="row">
          {/* Sidebar remains unchanged */}
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
              <h3>Recent Blogs</h3>
              <div className="sidebar-blog-boxs">
                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/images/blogs/blogsquare/blog3.png"
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
                      14/03/2025
                    </a>
                    <h5>
                      <Link href="/blog/ai-tools-that-you-need-to-use-in-your-business-today">
                        AI Tools that you need to use in your Business
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/images/blogs/blogsquare/blog2.png"
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
                      16/02/2025
                    </a>
                    <h5>
                      <Link href="/blog/why-medusa-ecommerce-is-better-than-shopify-and-woocomerce">
                        Why Medusa is better than Shopify?
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/images/blogs/blogsquare/blog4.png"
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
                      18/03/2025
                    </a>
                    <h5>
                      <Link href="/blog/how-to-drive-revenue-with-ux">
                        How to drive revenue with UX
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/images/blogs/blogsquare/blog5.png"
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
                      25/02/2025
                    </a>
                    <h5>
                      <Link href="/blog/create-a-high-performing-landing-page-for-your-business">
                        How to create high performing Landing Page
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="sidebar-blogs">
                  <div className="">
                    <div className="image">
                      <Image
                        src="/images/blogs/blogsquare/blog6.png"
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
                      23/03/2025
                    </a>
                    <h5>
                      <Link href="/blog/transform-your-business-with-gen-ai">
                        Transform your Business with Generative AI
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Blog Content Area - Updated */}
          <div className="col-lg-8 details-left-space">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  {/* Main Image */}
                  <div className="image">
                    <Image
                      // Use an image relevant to AI tools / Business productivity
                      src="/images/blogs/blog3.png" // Placeholder - Update this path
                      alt="Hand interacting with tablet showing AI business tool icons" // Descriptive alt text based on previous prompt
                      width={838}
                      height={503}
                      priority
                    />
                  </div>
                  {/* Meta Info - Update or remove as needed */}
                  <div className="social-users">
                    <ul>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon1.png"
                            alt="author icon"
                            width={16}
                            height={16}
                          />{" "}
                          Rahul B.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon2.png"
                            alt="date icon"
                            width={16}
                            height={16}
                          />{" "}
                          Mar 14, 25
                          {/* Update/Format as needed */}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            src="/assets/img/icons/user-icon3.png"
                            alt="category icon"
                            width={16}
                            height={16}
                          />{" "}
                          Generative AI
                        </a>
                      </li>
                      {/* Comment count can be dynamic or removed */}
                    </ul>
                  </div>
                  <div className="space30"></div>

                  {/* Blog Post Title */}
                  <div className="heading1">
                    <h2>
                      Supercharge Your Business: 10 AI Tools You Should
                      Implement Today
                    </h2>
                    <div className="space16"></div>
                    {/* Introduction */}
                    <p>
                      Artificial Intelligence is no longer a futuristic concept
                      – it's a practical reality transforming how businesses
                      operate. Integrating the right AI tools can unlock
                      significant efficiency gains, reduce costs, and improve
                      outcomes across various departments. If you're looking to
                      leverage AI without overwhelming complexity, here are 10
                      powerful and popular tools you should consider
                      incorporating into your business right now.
                    </p>
                  </div>
                </div>
              </article>

              <div className="space30"></div>

              {/* Main Content Sections - 10 Tools */}
              <article>
                <div className="details-post-area">
                  {/* Tool 1 */}
                  <div className="heading1">
                    <p>
                      <b>1. ChatGPT: Your Versatile AI Assistant</b>
                      <br />A powerful large language model that excels at
                      understanding and generating human-like text. It's
                      incredibly versatile for brainstorming ideas, drafting
                      emails, summarizing documents, answering questions,
                      generating basic code snippets, and much more.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Content ideation, first drafts,
                      quick Q&A, summarizing text.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 2 */}
                  <div className="heading1">
                    <p>
                      <b>2. Jasper AI: Marketing Content Powerhouse</b>
                      <br />
                      Specifically designed for marketing and sales content,
                      Jasper uses AI to help you create high-converting copy for
                      ads, emails, social media posts, blog articles, and
                      websites quickly, often leveraging numerous templates and
                      style options.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Ad copy, blog post
                      outlines/drafts, social media captions, product
                      descriptions.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 3 */}
                  <div className="heading1">
                    <p>
                      <b>3. Grammarly: Enhance Written Communication</b>
                      <br />
                      More than just a spell checker, Grammarly's AI analyzes
                      grammar, spelling, punctuation, style, and tone across
                      various platforms. It helps ensure all your business
                      communication is clear, concise, and professional.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Error checking, tone
                      adjustment, clarity improvements in emails, documents, and
                      messages.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 4 */}
                  <div className="heading1">
                    <p>
                      <b>4. Asana AI: Smarter Project Management</b>
                      <br />
                      Integrated within the popular project management tool,
                      Asana AI helps teams prioritize tasks, optimize workflows,
                      identify potential roadblocks, and automate status
                      updates, making project execution smoother and more
                      efficient.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Task prioritization, workflow
                      automation, project risk identification.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 5 */}
                  <div className="heading1">
                    <p>
                      <b>
                        {" "}
                        5. Tidio's Lyro: Intelligent Customer Support Chatbot
                      </b>
                      <br />
                      Lyro is an AI chatbot that learns directly from your FAQ
                      content to provide instant, accurate answers to customer
                      queries 24/7. It handles common questions, freeing up
                      human agents for more complex issues and improving
                      customer satisfaction.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> 24/7 customer support, instant
                      FAQ answers, reducing support agent workload.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 6 */}
                  <div className="heading1">
                    <p>
                      <b>
                        {" "}
                        6. HubSpot AI Tools: Integrated Marketing & Sales
                        Intelligence
                      </b>
                      <br />
                      Within the HubSpot platform, AI features help with tasks
                      like lead scoring, email personalization, content strategy
                      suggestions, and sales forecasting, enabling more targeted
                      and effective marketing and sales efforts.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Lead prioritization,
                      personalized email marketing, content optimization.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 7 */}
                  <div className="heading1">
                    <p>
                      <b>7. Zapier: Workflow Automation Connector</b>
                      <br />
                      Zapier allows you to connect thousands of different web
                      applications and automate repetitive tasks between them
                      without coding. Its AI features can help build more
                      sophisticated automated workflows, saving countless hours
                      of manual work.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Connecting disparate apps,
                      automating data entry, triggering actions based on events.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 8 */}
                  <div className="heading1">
                    <p>
                      <b>8. Fireflies.ai: Your AI Meeting Assistant</b>
                      <br />
                      Fireflies joins your online meetings (Zoom, Google Meet,
                      Teams etc.) to automatically record, transcribe, and
                      summarize conversations. It makes meetings searchable and
                      ensures key action items and decisions aren't missed.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Meeting transcription,
                      automated summaries, searchable meeting archives.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 9 */}
                  <div className="heading1">
                    <p>
                      <b>9. Microsoft Power BI: AI-Powered Data Insights</b>
                      <br />
                      Power BI integrates AI features that allow users to easily
                      visualize data, ask questions in natural language (Q&A),
                      and automatically detect patterns and insights within
                      datasets, empowering data-driven decision-making across
                      the business.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Data visualization, trend
                      analysis, natural language querying of data.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Tool 10 */}
                  <div className="heading1">
                    <p>
                      <b>10. Canva AI: Simplified Visual Content Creation</b>
                      <br />
                      Canva's user-friendly design platform now includes AI
                      features like "Magic Write" for text generation within
                      designs and "Magic Design" which suggests templates based
                      on your content, making graphic creation for social media,
                      presentations, and marketing even faster.
                    </p>
                    <p>
                      <strong>Key Uses:</strong> Quick graphic design, social
                      media visuals, presentation creation, template
                      suggestions.
                    </p>
                  </div>
                  <div className="space30"></div>

                  {/* Conclusion */}
                  <div className="heading1">
                    <h5>Conclusion: Start Integrating AI Today</h5>
                    <div className="space20"></div>
                    <p>
                      The AI tools landscape is vast, but starting with these 10
                      popular and effective applications can provide immediate
                      value to your business. Whether it's improving
                      communication, automating workflows, enhancing customer
                      service, or making data-driven decisions, AI offers
                      powerful capabilities. Explore which of these tools best
                      address your current challenges and begin integrating them
                      to boost productivity and drive growth.
                    </p>
                  </div>
                </div>
              </article>

              {/* Border, Tags, Social Links remain */}
              <div className="blog-details-border"></div>

              <div className="tags-links">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tags">
                      <ul>
                        <li className="text">Tags:</li>
                        {/* Update tags to be relevant */}
                        <li className="tag-text">
                          <a href="#">AI Tools</a>
                        </li>
                        <li className="tag-text">
                          <a href="#">Business AI</a>
                        </li>
                        <li className="tag-text">
                          <a href="#">Productivity</a>
                        </li>
                        <li className="tag-text">
                          <a href="#">Automation</a>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLeft1;
