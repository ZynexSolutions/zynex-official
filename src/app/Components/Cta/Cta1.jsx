import Link from "next/link";
import React from "react";

/**
 * Cta1 Component.
 *
 * A call to action component with customizable content, links, and button labels.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.title="At TechXen IT Solutions, We are Committed To Businesses"] - The title of the CTA section.
 * @param {string} [props.description="Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel."] - The description text.
 * @param {string} [props.consultationLink="/service"] - The link for the consultation button.
 * @param {string} [props.solutionLink="/service"] - The link for the solution button.
 * @param {string} [props.consultationLabel="Request a Consultaion"] - The label for the consultation button.
 * @param {string} [props.solutionLabel="Explore Solution"] - The label for the solution button.
 * @returns {JSX.Element} The Cta1 component.
 */
const Cta1 = ({
  title = "Transform Your Business With Our Expertise",
  description = "Take the first step towards achieving your business goals by contacting us today. Schedule a consultation with one of our IT specialists to discuss your objectives and explore how our innovative solutions can propel.",
  consultationLink = "/service",
  solutionLink = "/service",
  consultationLabel = "Request a Consultaion",
  solutionLabel = "Explore Solution",
}) => {
  return (
    <div className="cta">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="heading1-w">
              <h2 className="title tg-element-title">{title}</h2>
              <div className="space16"></div>
              <p data-aos="fade-right" data-aos-duration="700">{description}</p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="buttons">
              <Link className="cta-btn1" href={consultationLink}>
                {consultationLabel}{" "}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </span>
              </Link>
              <Link className="cta-btn2" href={solutionLink}>
                {solutionLabel}{" "}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta1;