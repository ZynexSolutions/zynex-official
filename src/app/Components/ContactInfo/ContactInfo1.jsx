"use client";

import Image from "next/image";
import { useState } from "react";

const ContactInfo1 = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <div className="space100"></div>
            <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-boxs">
                                <div className="heading1">
                                    <h2>Contact Information</h2>
                                    <div className="space16"></div>
                                    <p>We Have grown up with the internet revolution, and we <br /> know how to deliver on its</p>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <Image src="/assets/img/icons/contact-page-icon1.png" alt="img" width={40} height={38} />
                                    </div>
                                    <div className="heading">
                                        <h5>Contact Us</h5>
                                        <a href="tel:(124)555-6565" className="text">(124) 555-6565</a>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <Image src="/assets/img/icons/contact-page-icon2.png" alt="img" width={34} height={32} />
                                    </div>
                                    <div className="heading">
                                        <h5>Send Us a Mail</h5>
                                        <a href="mailto:admin@techxen.org" className="text">admin@techxen.org</a>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <Image src="/assets/img/icons/contact-page-icon3.png" alt="img" width={32} height={32} />
                                    </div>
                                    <div className="heading">
                                        <h5>Office Location</h5>
                                        <a href="tel:(124)555-6565" className="text">73 Bridge St Brooklyn Arakansas <br /> 85032 United States, NY 10018</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-details">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea name="message" cols="30" rows="5" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="theme-btn1" type="submit">Submit <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space100"></div>
            <div className="contact-map-page">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default ContactInfo1;