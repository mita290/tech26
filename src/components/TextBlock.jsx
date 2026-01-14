import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function TextBlock() {
    const [activeEvent, setActiveEvent] = useState(null);

    const events = [
        {
            id: 1,
            title: "Paper Presentation",
            description:
                "Present your research ideas, innovative concepts, or technical solutions in front of an expert panel.",
            contact: "Kavi Priya - 7550204020",    
            formLink: "https://forms.gle/7TU9sSHcAzaQQ4MF6"
        },
        {
            id: 2,
            title: "Coding Contest",
            description:
                "Test your programming skills through challenging problem statements and real-world scenarios.",
            contact: "Harini - 7010636768", 
            formLink: "https://forms.gle/7TU9sSHcAzaQQ4MF6"
        },
        {
            id: 3,
            title: "Solve The Case",
            description:
                "Analyze real-world technical cases, debug issues, and propose effective solutions.",
            contact: "Mercy Catherine - 8870622023", 
            formLink: "https://forms.gle/7TU9sSHcAzaQQ4MF6"
        }
    ];
    const nonTechEvents = [
        {
            id: 101,
            title: "IPL Auction",
            description:
                "Experience the thrill of building your dream IPL team using strategy, budget management, and smart bidding.",
            contact: "Giridharan - 9841698553",
            formLink: "https://forms.gle/65iwtW3Me4wTfZ7M7"
        },
        {
            id: 102,
            title: "Eleven's Vision",
            description:
                "Test your creativity, perception, and observation skills through fun and challenging visual rounds.",
            contact: "Sathyapriya - 9840975961",
            formLink: "https://forms.gle/65iwtW3Me4wTfZ7M7"
        }
    ];

    return (
        <div id="textblock">
            <div class="bg bg-1">
                <div id="textblock-container">
                    <h1 id="textblock-title">About The Department</h1>
                    <p id="textblock-content">
                    The Department of Information Technology was established in 2001 with an initial intake of 60 students for its B.Tech program. <br />
                    It is equipped with state-of-the-art laboratories, a seminar hall, department library, and a Wi-Fi enabled campus to support e-learning. <br />
                    The B.Tech IT program is associated with Virtusa Software Services Pvt. Ltd. as a knowledge partner, with 40% of the curriculum designed by the industry, focusing on Full Stack Engineering and direct recruitment opportunities in the VII semester. <br />
                    The department also houses Centres of Excellence in collaboration with Cognizant and Virtusa. <br />With a highly qualified faculty—50% holding Ph.Ds and industry certifications—the department actively engages in research, publications, conferences, and workshops in emerging technologies, and was accredited by NBA from 2019–20 to 2022–23.<br />
                    </p>
                </div>
            </div>
            <div class="bg bg-2">
                <div id="textblock-container">
                    <h1 id="textblock-title">Our Student Organisers</h1>
                    <div class="carousel">
                        <div class="group">
                            <div class="card">A</div>
                            <div class="card">B</div>
                            <div class="card">C</div>
                        </div>

                        <div class="group" aria-hidden="true">
                            <div class="card">A</div>
                            <div class="card">B</div>
                            <div class="card">C</div>
                        </div>
                        </div>
                </div>
            </div>
            <div class="bg bg-3">
                <div id="textblock-container">
                    <h1 id="textblock-title">Events</h1>
                    <h3 id="textblock-subtitle"><b>Technical Events:</b> <i>Show off you technical skills!</i></h3>
                    <div className="events-container">
                        {events.map(event => {
                            const isActive = activeEvent?.id === event.id;

                            return (
                                <div
                                    key={event.id}
                                    className={`event-tile ${isActive ? "expanded" : ""}`}
                                    onClick={() =>
                                        setActiveEvent(isActive ? null : event)
                                    }
                                >
                                    <h2>{event.title}</h2>

                                    {isActive && (
                                        <div className="event-extra">
                                            <p>{event.description}</p>
                                            <p>{event.contact}</p>

                                            <a
                                                href={event.formLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="register-btn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Register Now
                                            </a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div class="bg bg-4">
                <div id="textblock-container">
                    <h3 id="textblock-subtitle"><b>Non-Technical Events:</b> <i>Put on your creative-thinking caps!</i></h3>
                    {/* **non-tech event tiles here** */}
                    <div className="events-container">
                        {nonTechEvents.map(event => {
                            const isActive = activeEvent?.id === event.id;

                            return (
                                <div
                                    key={event.id}
                                    className={`event-tile ${isActive ? "expanded" : ""}`}
                                    onClick={() =>
                                        setActiveEvent(isActive ? null : event)
                                    }
                                >
                                    <h2>{event.title}</h2>

                                    {isActive && (
                                        <div className="event-extra">
                                            <p>{event.description}</p>
                                            <p>{event.contact}</p>

                                            <a
                                                href={event.formLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="register-btn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Register Now
                                            </a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <br /><br />
                    <p id="textblock-subtitle">If you have any queries, reach out to us!<br /></p>
                    <div className="contact-icons">
                        {/* Email */}
                        <a href="mailto:itsympo26@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />: itsympo26@gmail.com</a><br />
                        {/* Instagram */}
                        <a href="https://instagram.com/techcrescenza_2026" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />: @techcrescenza_2026</a><br />
                        {/* Phone */}
                        <a href="tel:+919025082346">
                            <FontAwesomeIcon icon={faPhone} />: 9025082346</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextBlock;