import { useState, useEffect, useRef } from "react";
import { FaRegImage } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import "./App.css"; import { FaReact } from "react-icons/fa";
import VirielleLogo from "./assets/virielle.png";

import { FiExternalLink, FiPaperclip } from "react-icons/fi";
import profile from './assets/resume2x2.jpg';
import profileDark from './assets/dark.jpg';
import { CiLocationOn } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { PiFlask } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaMobileAlt, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";
import ha from "./assets/gallery/ha.jpg";
import ha1 from "./assets/gallery/ha1.JPG";
import ha2 from "./assets/gallery/ha2.jpg";
import ha3 from "./assets/gallery/be.jpg";
import ha4 from "./assets/gallery/ha4.jpg";
import ha7 from "./assets/gallery/1.jpg";
import ha5 from "./assets/gallery/ha5.jpg";
import ha6 from "./assets/gallery/ako.jpg";
import { FaLaptopCode } from "react-icons/fa";
import cert1 from "./assets/certiport.png";
import resumePDF from "./assets/resume.pdf";
import { PiHandWaving } from "react-icons/pi";
import ChatbotPortfolio from "./ChatbotPortfolio";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const galleryRef = useRef(null);
    const [paused, setPaused] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [resumeOpen, setResumeOpen] = useState(false);
    const [currentText, setCurrentText] = useState("Web Developer");
    const jobTitles = [
        "Web Developer",
        "Software Developer",
        "Mobile Developer",

    ];

    // Function to handle the typewriting loop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => {
                const currentIndex = jobTitles.indexOf(prev);
                const nextIndex = (currentIndex + 1) % jobTitles.length;
                return jobTitles[nextIndex];
            });
        }, 2000); // Switch every 4 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const openModal = (img) => {
        setSelectedCert(img);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCert(null);
    };


    useEffect(() => {
        const slider = galleryRef.current;
        if (!slider) return;

        let scrollAmount = 0;

        const autoScroll = () => {
            if (!paused) {
                slider.scrollLeft += 1;
                scrollAmount += 1;

                if (scrollAmount >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        };

        autoScroll();
    }, [paused]);

    return (
        <div className={darkMode ? "container dark-mode" : "container"}>
            <header className="profile-header">
                <button
                    className="theme-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <div className={`toggle-circle ${darkMode ? "active" : ""}`}>
                        {darkMode ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
                    </div>
                </button>


                <img
                    src={darkMode ? profileDark : profile}
                    alt="Profile"
                    className="profile-photo"
                />
                <div className="profile-details">
                    <div className="name-badge">
                        <h1>Klent Russell Aguilar</h1>
                        <MdVerified className="verified-badge" />

                    </div>
                    <p className="location">
                        <CiLocationOn className="location-icon" />
                        Central Luzon, Philippines
                    </p>


                    <div className="job-title">BSIT Student / Aspiring Web & Front-End Developer</div>
                    <div className="job-titles">

                        <span className="label">Other portfolio</span>
                        <FiPaperclip className="clip-icon" />
                        <a
                            href="https://klent-portfolio.web.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-link"
                        >
                            klent-portfolio.web.app

                        </a>
                    </div>

                    <div className="action-buttons">
                        <div className="action-buttons">


                            <a
                                className="btn btn-black"
                                href={resumePDF}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HiOutlineDocumentText className="btn-icon" />
                                View Resume
                            </a>


                        </div>


                        <a className="btn btn-white" href="mailto:klentrussell@gmail.com">
                            <HiOutlineMail className="btn-icon" />
                            Send Email
                        </a>


                    </div>
                </div>

            </header>



            {/* MAIN CONTENT */}
            <div className="main-grid">
                {/* LEFT COLUMN */}
                <div className="left-column">
                    {/* ABOUT */}
                    <section className="card">
                        <h2 className="section-title">
                            <IoBriefcaseOutline className="section-icon" />
                            About
                        </h2>

                        <p className="text-content">
                            I am a fourth-year Bachelor of Science in Information Technology student at La Consolacion University Philippines with hands-on experience in web development, UI/UX design, full-stack web systems, and manual software testing. I focus on building practical, user-centered websites and web applications that are functional, reliable, and easy to use.
                        </p>

                        <p className="text-content">
                            I have developed capstone projects, personal websites, web applications, and internal web systems, where I worked on frontend and backend development, database integration, and interface design. I have a strong interest in web design and consistently apply UI/UX principles to improve layout structure, navigation flow, usability, and overall user experience.
                        </p>

                        <p className="text-content">
                            I completed my Internship / On-the-Job Training at Bulacan Court Employees Multipurpose Cooperative in Malolos City, Bulacan. During my internship, I provided technical support, assisted with system-related concerns, and designed a database for RTC file case records. I also performed manual functional and usability testing on web systems and web applications, including capstone and internship projects, to identify issues and ensure accuracy, stability, and reliability.
                        </p>

                        <p className="text-content">
                            I am organized, detail-oriented, and comfortable working across both development and testing tasks. I value clean code, clear design, and well-structured systems, and I continuously improve my skills by applying what I learn to real projects. I am motivated to contribute to teams that prioritize quality, usability, and well-built web solutions.
                        </p>


                    </section>

                    {/* TECH STACK */}
                    <section className="card">
                        <div className="section-header">
                            <h2 className="section-title">
                                <PiFlask className="section-icon" />
                                Tech Stack
                            </h2>


                        </div>
                        <div className="tech-category">
                            <h3 className="category-title">Frontend Development</h3>
                            <div className="tag-group">
                                <span className="tag">HTML5</span>
                                <span className="tag">CSS3</span>
                                <span className="tag">JavaScript (ES6+)</span>
                                <span className="tag">Responsive Web Design</span>
                                <span className="tag">Component-Based UI</span>
                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Frameworks & Libraries</h3>
                            <div className="tag-group">
                                <span className="tag">React.js (Vite)</span>

                                <span className="tag">GSAP</span>
                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Backend & Database</h3>
                            <div className="tag-group">
                                <span className="tag">Node.js</span>
                                <span className="tag">MySQL</span>
                                <span className="tag">Firebase Authentication</span>
                                <span className="tag">Firestore</span>
                                <span className="tag">CRUD Operations</span>


                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Tools & Workflow</h3>
                            <div className="tag-group">
                                <span className="tag">Git & GitHub</span>
                                <span className="tag">Visual Studio Code</span>
                                <span className="tag">Figma</span>
                                <span className="tag">Firebase Tools</span>
                                <span className="tag">Chrome DevTools</span>
                            </div>
                        </div>

                        <div className="tech-category">
                            <h3 className="category-title">Testing & QA</h3>
                            <div className="tag-group">
                                <span className="tag">Manual Software Testing</span>
                                <span className="tag">Functional Testing</span>
                                <span className="tag">Usability Testing</span>
                                <span className="tag">Bug Reporting</span>

                            </div>
                        </div>



                    </section>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column">
                    {/* EXPERIENCE */}
                    <section className="card">
                        <h2 className="section-title section-animate">
                            <IoBriefcaseOutline className="section-icon" />
                            Experience
                        </h2>

                        <div className="experience-list">

                            {/* EDUCATION */}
                            <div className="exp-item" >
                                <div className="exp-dot active-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">BS Information Technology - 4th Year</h3>
                                    <p className="exp-company">La Consolacion University Philippines</p>
                                </div>
                                <span className="exp-year">2026</span>
                            </div>
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Web Design Projects & Collaborations</h3>

                                    <p className="exp-company">
                                        Started a personal web design brand creating landing pages and websites to build experience, trust, and professional growth.
                                    </p>

                                </div>
                                <span className="exp-year">2026</span>
                            </div>
                            {/* WEB DESIGN & UI/UX */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Web Design & UI/UX Practice</h3>
                                    <p className="exp-company">
                                        Practicing UI/UX principles, responsive design, and interactive animations with GSAP, Figma, and Framer.
                                    </p>

                                </div>
                                <span className="exp-year">2026</span>
                            </div>

                            {/* INTERNSHIP – REPLACED */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">IT Intern</h3>
                                    <p className="exp-company">
                                        Bulacan Court Employees Multipurpose Cooperative
                                    </p>
                                </div>
                                <span className="exp-year">2026</span>
                            </div>
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Manual Software Testing Experience</h3>
                                    <p className="exp-company">
                                        Functional & usability testing for web systems and applications
                                    </p>
                                </div>
                                <span className="exp-year">2026</span>
                            </div>
                            {/* CAPSTONE – UPDATED */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Full-Stack Web Developer (Project)</h3>
                                    <p className="exp-company">
                                        ClockedIN — OJT & Internship Tracking System
                                    </p>
                                </div>
                                <span className="exp-year">2026</span>
                            </div>
                            {/* MANUAL TESTING EXPERIENCE */}

                            {/* BRANDING & COLLABORATION */}


                            {/* CLOCKEDIN – ADDED */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Capstone Project Developer</h3>
                                    <p className="exp-company">
                                        Full-Stack — Barangay Queue & Appointment Management System
                                    </p>
                                </div>
                                <span className="exp-year">2025</span>
                            </div>
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">IT Specialist Certification</h3>
                                    <p className="exp-company">
                                        Certiport — Device Configuration & Management
                                    </p>
                                </div>
                                <span className="exp-year">2025</span>
                            </div>
                            {/* TECH STACK */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Tech Stack & Programming Experience</h3>
                                    <p className="exp-company">
                                        HTML5, CSS3, JavaScript (ES6+), React.js, Firebase, Node.js, MySQL
                                    </p>
                                </div>
                                <span className="exp-year">2025</span>
                            </div>

                            {/* CERTIFICATION */}


                            {/* FOUNDATIONS */}
                            <div className="exp-item">
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">Programming Foundations</h3>
                                    <p className="exp-company">
                                        Self-learning, online courses, mini-projects
                                    </p>
                                </div>
                                <span className="exp-year">2024</span>
                            </div>

                            {/* START */}
                            <div className="exp-item" >
                                <div className="exp-dot"></div>
                                <div className="exp-content">
                                    <h3 className="exp-title">
                                        Hello World! <PiHandWaving className="wave-icon" />
                                    </h3>
                                    <p className="exp-company">Started learning programming</p>
                                </div>
                                <span className="exp-year">2022</span>
                            </div>

                        </div>
                    </section>
                </div></div>

            {/* NEW HORIZONTAL SECTION */}
            <div className="projects-cert-grid">

                {/* Recent Projects */}
                <section className="card">
                    <div className="section-header">
                        <h2 className="section-title"><MdOutlineDashboard className="section-icon" /> Recent Projects</h2>

                    </div>

                    <div className="project-list">

                        <div className="project-item">
                            <a
                                href="https://www.bangkalqrush.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">Q-RUSH</h3>
                                <p className="project-desc">Barangay Queuing & Appointment System</p>
                                <span className="project-tag">bangkalqrush.com</span>
                            </a>
                        </div>


                        <div className="project-item">
                            <a
                                href="https://klent-portfolio.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">Portfolio Website</h3>
                                <p className="project-desc">My Portfolio Website v2</p>
                                <span className="project-tag">klent-portfolio.web.app</span>
                            </a>
                        </div>

                        <div className="project-item">
                            <a
                                href="https://clockedin-tracker.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">ClockedIN</h3>
                                <p className="project-desc">
                                    Web-based OJT attendance and internship tracking system.
                                </p>
                                <span className="project-tag">clockedin-tracker.web.app</span>

                            </a>
                        </div>
                        <div className="project-item">
                            <a
                                href="https://armadaph-79584.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <h3 className="project-title">Armada PH</h3>
                                <p className="project-desc">Showcasing a local dance group's performances and classes.</p>
                                <span className="project-tag">armadaph-79584.web.app</span>
                            </a>

                        </div>


                    </div>


                </section>


                {/* Recent Certifications */}
                <section className="card">
                    <div className="section-header">
                        <h2 className="section-title"><MdOutlineVerified className="section-icon" /> Recent Certifications</h2>

                    </div>

                    <div className="cert-list">

                        <div className="cert-item" onClick={() => openModal(cert1)}>
                            <h3 className="cert-title">IT Specialist - Device Configuration and Management</h3>
                            <p className="cert-org">Certiport - A Pearson VUE Business</p>
                        </div>

                        <div className="cert-item">
                            <a
                                href="https://freecodecamp.org/certification/klntaglr/front-end-development-libraries"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <h3 className="cert-title">Front End Development Libraries V8</h3>
                                <p className="cert-org">freeCodeCamp</p>
                            </a>
                        </div>

                        <div className="cert-item">
                            <a
                                href="https://freecodecamp.org/certification/klntaglr/responsive-web-design"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <h3 className="cert-title">Legacy Responsive Web Design V8</h3>
                                <p className="cert-org">freeCodeCamp</p>
                            </a>
                        </div>

                        <div className="cert-item">
                            <a
                                href="https://www.freecodecamp.org/certification/klntaglr/javascript-v9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <h3 className="cert-title">JavaScript</h3>
                                <p className="cert-org">freeCodeCamp</p>
                            </a>
                        </div>


                    </div>
                </section>





            </div>
            <div className="connect-wrapper">
                <section className="card connect-container">
                    <div className="connect-grid">


                        <div className="connect-group">
                            <h3 className="connect-title"><MdOutlineTrackChanges className="icon" /> Goals</h3>

                            <a className="connect-item" href="#" target="_blank">
                                Develop my skills in web development and UI/UX by building user-centered and well-structured web systems.
                            </a>

                            <a className="connect-item" href="#" target="_blank">
                                Gain hands-on experience in development and manual testing while contributing to reliable, real-world web projects.
                            </a>


                        </div>

                        {/* Social Links */}
                        <div className="connect-group">
                            <h3 className="connect-title">
                                <GoPaperclip className="icon" /> Social Links
                            </h3>

                            <a className="connect-item" href="https://www.linkedin.com/in/klent-russell-aguilar-b6929739b/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="connect-icon" /> LinkedIn
                            </a>

                            <a className="connect-item" href="https://github.com/klntaglr" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="connect-icon" /> GitHub
                            </a>

                            <a className="connect-item" href="https://www.instagram.com/klntaglr/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="connect-icon" /> Instagram
                            </a>
                            <a className="connect-item" href="https://www.instagram.com/klntaglr/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={VirielleLogo}
                                    alt="Virielle Studio"
                                    className="connect-icons"
                                />
                                Virielle Studio
                            </a>
                        </div>


                        {/* Speaking */}

                        <div className="connect-group contact-box">

                            {/* Title */}
                            <h3 className="connect-title">
                                <AiOutlineMessage className="icon" /> Contact
                            </h3>

                            {/* Card Body */}
                            <div className="contact-card">
                                <p className="connect-desc">
                                  Open to collaborations on web design and development projects.

                                </p>

                                <a className="connect-action">
                                    Get in touch →
                                </a>
                            </div>

                        </div>

                        {/* Contact */}
                        <div className="contact-layout">


                            <div className="contact-links">

                                <a className="contact-item" href="mailto:klentaguilar@gmail.com">
                                    <HiOutlineMail className="contact-icon" />
                                    <div className="contact-info">
                                        <span className="contact-title">Email</span>
                                        <span className="contact-sub">klentaguilar@gmail.com</span>
                                    </div>
                                    <span className="contact-arrow">›</span>
                                </a>

                                <a className="contact-item">
                                    <MdPhoneInTalk className="contact-icon" />
                                    <div className="contact-info">
                                        <span className="contact-title">Let’s Talk</span>
                                        <span className="contact-sub">967-217-9685</span>
                                    </div>
                                    <span className="contact-arrow">›</span>
                                </a>

                                <a className="contact-item" href="https://www.messenger.com/e2ee/t/8124705447641716">
                                    <FaFacebookMessenger className="contact-icon" />
                                    <div className="contact-info">
                                        <span className="contact-title">Messenger</span>
                                        <span className="contact-sub">Chat with me</span>
                                    </div>

                                    <span className="contact-arrow">›</span>
                                </a>

                            </div>

                        </div>



                    </div>
                </section>

            </div>

            <section className="card connect-container gallery-section">
                <h2 className="section-title"><FaRegImage className="icon" />Gallery</h2>

                <div className="gallery-scroll" ref={galleryRef}>
                    {[ha, ha1, ha7, ha2, ha3, ha4, ha5, ha6, ha, ha1, ha7, ha2, ha3, ha4, ha5, ha6,].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className="gallery-img"
                            alt="Gallery Image"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        />
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-line"></div>

                <p className="footer-text">
                    © {new Date().getFullYear()} Klent Russell Aguilar — All rights reserved.
                </p>
            </footer>
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedCert} alt="Certificate" className="modal-img" />
                    </div>
                </div>
            )}
            <ChatbotPortfolio />

        </div>
    );
}