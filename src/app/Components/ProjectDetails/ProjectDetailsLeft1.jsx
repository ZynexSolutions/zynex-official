import Image from "next/image";
import Link from "next/link";

/**
 * @typedef {object} Tag
 * @property {string} text - The text of the tag.
 * @property {string} href - The link of the tag.
 */

/**
 * @typedef {object} ProjectDetailsBox
 * @property {string} title - The title of the box.
 * @property {string} description - The description of the box.
 * @property {string} href - The link of the box.
 */

/**
 * @typedef {object} ProjectDetailsProps
 * @property {Tag[]} [tags] - The tags to display.
 * @property {string} [mainImage] - The main image source.
 * @property {string} [mainHeading] - The main heading text.
 * @property {string} [mainDescription] - The main description text.
 * @property {string} [erpProcessHeading] - The heading for the ERP process section.
 * @property {string[]} [erpProcessList1] - The list of ERP processes for the first column.
 * @property {string[]} [erpProcessList2] - The list of ERP processes for the second column.
 * @property {string} [erpBenefitsHeading] - The heading for the ERP benefits section.
 * @property {ProjectDetailsBox[]} [erpBenefitsBoxes] - The boxes displaying ERP benefits.
 */

/**
 * ProjectDetailsLeft1 Component
 *
 * This component displays the left side of the project details page, including tags, a contact form,
 * a main image with heading and description, ERP implementation process, and ERP benefits.
 *
 * @param {ProjectDetailsProps} props - The props for the component.
 * @returns {JSX.Element}
 */
const ProjectDetailsLeft1 = ({
    tags = [
        { text: "Software Development", href: "#" },
        { text: "Cloud", href: "#" },
        { text: "It Solution", href: "#" },
        { text: "Data Analytics Service", href: "#" },
        { text: "Technology", href: "#" },
        { text: "Custom Development", href: "#" },
        { text: "Cyber Security", href: "#" },
        { text: "Consulting Service", href: "#" },
    ],
    mainImage = "/assets/img/others/project-details-img1.png",
    mainHeading = "Streamline Your Business Operations with (ERP) Systems",
    mainDescription = "Enterprise Resource Planning (ERP) systems are powerful tools designed to integrate and streamline various business processes, from finance and human resources to supply chain management and customer relationship management. At [Company Name], we specialize in ERP implementation, helping businesses of all sizes optimize their operations, improve efficiency, and drive growth.",
    erpProcessHeading = "Our (ERP) Implementation Process",
    erpProcessList1 = ["Needs Assessment", "Solution Design", "Data Migration"],
    erpProcessList2 = ["Change Management", "Testing & Quality", "Go Live & Support"],
    erpBenefitsHeading = "Benefits of (ERP) Implementation",
    erpBenefitsBoxes = [
        { title: "Improved Efficiency", description: "Streamline business processes and workflows, reducing manual effort and improving productivity.", href: "/project/project-details" },
        { title: "Improved Efficiency", description: "Streamline business processes and workflows, reducing manual effort and improving productivity.", href: "/project/project-details" },
        { title: "Improved Efficiency", description: "Streamline business processes and workflows, reducing manual effort and improving productivity.", href: "/project/project-details" },
        { title: "Improved Efficiency", description: "Streamline business processes and workflows, reducing manual effort and improving productivity.", href: "/project/project-details" },
    ],
}) => {
    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Tags</h3>
                            <ul className="tags">
                                {tags.map((tag, index) => (
                                    <li key={index}><a href={tag.href}>{tag.text}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-box-area sidebar-bg mb-40">
                            <h3>Get A Free Quote</h3>
                            <div className="contact-form">
                                <form action="#">

                                    <div className="single-input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>

                                    <div className="single-input">
                                        <input type="email" placeholder="Email Address" />
                                    </div>

                                    <div className="single-input">
                                        <input type="number" placeholder="Phone Number" />
                                    </div>

                                    <div className="single-input">
                                        <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                                    </div>

                                    <div className="button">
                                        <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <Image src={mainImage} alt="img" width={838} height={503} />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>{mainHeading}</h2>
                                        <div className="space16"></div>
                                        <p>{mainDescription}</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>{erpProcessHeading}</h5>
                                                <div className="space16"></div>
                                                <div className="boxs-area">
                                                    <ul>
                                                        {erpProcessList1.map((item, index) => (
                                                            <li key={index}><span className="check"><i className="bi bi-check-lg"></i></span> {item}</li>
                                                        ))}
                                                    </ul>
                                                    <ul>
                                                        {erpProcessList2.map((item, index) => (
                                                            <li key={index}><span className="check"><i className="bi bi-check-lg"></i></span> {item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>{erpBenefitsHeading}</h5>
                                                <div className="space16"></div>
                                                <div className="row">
                                                    {erpBenefitsBoxes.map((box, index) => (
                                                        <div className="col-lg-6 col-md-6" key={index}>
                                                            <div className="project-details-box heading1">
                                                                <h4><Link href={box.href}>{box.title}</Link></h4>
                                                                <div className="space16"></div>
                                                                <p>{box.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="space50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsLeft1;