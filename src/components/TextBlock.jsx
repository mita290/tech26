import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

import students from '../images/student_images/final_web/finalpics';
import juniors from '../images/student_images/juniors_web/juniorpics';

function TextBlock() {
    const [activeEvent, setActiveEvent] = useState(null);

    const events = [
        {
            id: 1,
            title: "Upside Verse!",
            description: "Present innovative ideas, research, and future-ready solutions on a competitive technical stage! \n(1-3 members)",
            contact: "Contact Details: \nKavipriya - 75502 04020, \nKarthiga - 89398 73130",    
            formLink: "https://forms.gle/NBRau3dUKeA3UHtP9"
        },
        {
            id: 2,
            title: "Glitch Hunt!",
            description: "Spot the bugs, fix the code, and prove your logic under pressure! \n(1-3 members)",
            contact: "Contact Details: \nHarini - 70106 36768, \nKeerthana - 93611 26966", 
            formLink: "https://forms.gle/5GWjeRKSJ7SkS94AA"
        },
        {
            id: 3,
            title: "Solve The Case!",
            description:
                "Crack crosswords, logic puzzles, and technical riddles to unlock victory! \n(2-3 members)",
            contact: "Contact Details: \nMercy Catherine - 88706 22023, \nRamanan - 72002 34219", 
            formLink: "https://forms.gle/kYRXHHYY1CPh75eT9"
        },
        {
            id: 4,
            title: "Brainiac - Technical Quiz",
            description: "Test your technical knowledge and speed across multiple thrilling quiz rounds. \n(2 members)",
            contact: "Contact Details: \nGiri Dharan - 98416 98553, \nDev Dharshni - 90802 12170", 
            formLink: "https://forms.gle/FDZar7pyajdKf7Sq7"
        },
        {
            id: 5,
            title: "Minute To Win!",
            description: "Think fast, communicate smart, and win by making your team guess—blindfolded and timed! \n(2 members)",
            contact: "Contact Details: \nBhavadharani - 84286 84969, \nHarithra - 94877 79038", 
            formLink: "https://forms.gle/A3xLaiGvBwFYtL3w7"
        }
    ];
    

    return (
        <div id="textblock">
            <div class="bg bg-1">
                <div id="textblock-container" style={{overflowY: "scroll"}}>
                    <h1 id="textblock-title">Techcrescenza 2K26</h1>
                    <p id="textblock-content">
                        📌 <b>Department of Information Technology</b><br />
                        🎓 <b>R.M.D Engineering College</b><br />
                        🗓️ <b>Date: February 9th, 2026</b><br /><br />

                        Get ready to ignite your curiosity, challenge your intellect, and celebrate innovation at <b>Techcrescenza 2K26</b>, the flagship technical symposium hosted by the <b>Department of Information Technology, R.M.D Engineering College</b>.<br />
                        This one-day extravaganza is designed to bring together bright minds, tech enthusiasts, and creative thinkers under one roof for a power-packed experience of learning, competition, and fun.<br />
                        Whether you are passionate about coding, problem-solving, research, or pure creativity, Techcrescenza 2K26 has something exciting waiting for you.<br /><br />

                        <b>Upside Verse: Paper Presentation 💬</b><br />
                        Step into the spotlight and let your ideas speak loud and clear at <b>Upside Verse</b>, our paper presentation event.<br />
                        This is your platform to showcase innovative thoughts, cutting-edge research, and futuristic solutions in the field of technology.<br />
                        Present your ideas before a panel of experts, engage in thought-provoking discussions, and sharpen your communication and presentation skills.<br />
                        If you believe your ideas can make an impact, this is where they belong.<br /><br />

                        <b>Glitch Hunt: Debugging Challenge 👩‍💻</b><br />
                        Think fast, code smart, and hunt down errors at <b>Glitch Hunt</b>, an intense debugging event that tests your logical thinking and coding expertise.<br />
                        Participants will be challenged to identify and fix bugs within limited time, pushing their problem-solving skills to the limit.<br />
                        Accuracy, speed, and clarity of thought are key here.<br />
                        If debugging excites you more than writing fresh code, this event is your battlefield.<br /><br />

                        <b>Solve The Case: Technical Puzzles 🧩</b><br />
                        Put your brain to work in <b>Solve The Case</b>, a thrilling puzzle-solving event filled with crosswords, logical challenges, and technical riddles.<br />
                        Each round will test your analytical ability, reasoning skills, and attention to detail.<br />
                        The more puzzles you crack, the closer you get to victory.<br />
                        This event is perfect for those who love decoding patterns and solving problems step by step.<br /><br />

                        <b>Brainiac: Technical Quiz 🧠</b><br />
                        Gear up for a battle of knowledge at <b>Brainiac</b>, a multi-round technical quiz designed to challenge your understanding of technology, logic, and core IT concepts.<br />
                        With increasing difficulty at every stage, this event rewards not just what you know, but how quickly and confidently you can apply it.<br />
                        If you enjoy quizzes that keep your adrenaline pumping, Brainiac is not to be missed.<br /><br />

                        <b>Minute To Win: Non-Technical Event ⌚</b><br />
                        Add a twist of fun and creativity with <b>Minute To Win</b>, a fast-paced non-technical event that promises laughter and excitement.<br />
                        Participants will showcase their creativity and communication skills by making their teammates guess as many words as possible while blindfolded—all within a single minute.<br />
                        Simple, energetic, and highly entertaining, this event is the perfect break from intense technical challenges.<br /><br />

                        <b>Techcrescenza 2K26</b> is more than just a symposium—it is an experience where knowledge meets excitement, ideas meet action, and talent meets opportunity.<br />
                        Join us on <b>February 9th, 2026</b>, and be part of a celebration that pushes boundaries and sparks innovation.
                    </p>
                </div>
            </div>
            <div class="bg bg-2">
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
            <div class="bg bg-3">
                <div id="textblock-container" style={{overflowY: "scroll"}}>
                    <h1 id="textblock-title">Events</h1>
                    <h3 id="textblock-subtitle"><b>Technical Events:</b> <i>Show off your technical skills!</i></h3>
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
                                            <p style={{ whiteSpace: "pre-line"}}>{event.description}</p>
                                            <p style={{ whiteSpace: "pre-line"}}>{event.contact}</p>

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
                    <h1 id="textblock-title">Our Student Organisers</h1>
                    <h2>IV Years:</h2>
                    <div class="carousel">
                        <div className="group">
                            <div className="card">
                                <img src={students.bhava} alt="Bhavadharani" />
                                <span className="caption">Bhavadharani</span>
                            </div>
                            <div className="card">
                                <img src={students.bhuvan} alt="Bhuvan Kalyan" />
                                <span className="caption">Bhuvan Kalyan</span>
                            </div>
                            <div className="card">
                                <img src={students.dev} alt="Dev Dharshni" />
                                <span className="caption">Dev Dharshni</span>
                            </div>
                            <div className="card">
                                <img src={students.giri} alt="Giridharan" />
                                <span className="caption">Giridharan</span>
                            </div>
                            <div className="card">
                                <img src={students.harini} alt="Harini" />
                                <span className="caption">Harini</span>
                            </div>
                             <div className="card">
                                <img src={students.harithra} alt="Harithra" />
                                <span className="caption">Harithra</span>
                            </div>
                            <div className="card">
                                <img src={students.hema} alt="Hemadarshni" />
                                <span className="caption">Hemadarshni</span>
                            </div>
                            <div className="card">
                                <img src={students.karthi} alt="Karthiga" />
                                <span className="caption">Karthiga</span>
                            </div>
                            <div className="card">
                                <img src={students.kavi} alt="Kavipriya" />
                                <span className="caption">Kavipriya</span>
                            </div>    
                            <div className="card">
                                <img src={students.keerth} alt="Keerthana" />
                                <span className="caption">Keerthana</span>
                            </div>
                            <div className="card">
                                <img src={students.manju3} alt="Manjushree" />
                                <span className="caption">Manjushree</span>
                            </div>
                            <div className="card">
                                <img src={students.mercy} alt="Mercy Catherine" />
                                <span className="caption">Mercy Catherine</span>
                            </div>
                            <div className="card">
                                <img src={students.rama} alt="Ramanan" />
                                <span className="caption">Ramanan</span>
                            </div>                        
                        </div>

                        <div className="group" aria-hidden="true">
                            <div className="card">
                                <img src={students.bhava} alt="Bhavadharani" />
                                <span className="caption">Bhavadharani</span>
                            </div>
                            <div className="card">
                                <img src={students.bhuvan} alt="Bhuvan Kalyan" />
                                <span className="caption">Bhuvan Kalyan</span>
                            </div>
                            <div className="card">
                                <img src={students.dev} alt="Dev Dharshni" />
                                <span className="caption">Dev Dharshni</span>
                            </div>
                            <div className="card">
                                <img src={students.giri} alt="Giridharan" />
                                <span className="caption">Giridharan</span>
                            </div>
                            <div className="card">
                                <img src={students.harini} alt="Harini" />
                                <span className="caption">Harini</span>
                            </div>
                             <div className="card">
                                <img src={students.harithra} alt="Harithra" />
                                <span className="caption">Harithra</span>
                            </div>
                            <div className="card">
                                <img src={students.hema} alt="Hemadarshni" />
                                <span className="caption">Hemadarshni</span>
                            </div>
                            <div className="card">
                                <img src={students.karthi} alt="Karthiga" />
                                <span className="caption">Karthiga</span>
                            </div>
                            <div className="card">
                                <img src={students.kavi} alt="Kavipriya" />
                                <span className="caption">Kavipriya</span>
                            </div> 
                            <div className="card">
                                <img src={students.keerth} alt="Keerthana" />
                                <span className="caption">Keerthana</span>
                            </div>
                            <div className="card">
                                <img src={students.manju3} alt="Manjushree" />
                                <span className="caption">Manjushree</span>
                            </div>
                            <div className="card">
                                <img src={students.mercy} alt="Mercy Catherine" />
                                <span className="caption">Mercy Catherine</span>
                            </div>
                            <div className="card">
                                <img src={students.rama} alt="Ramanan" />
                                <span className="caption">Ramanan</span>
                            </div>                           
                        </div>
                    </div>
                    <h2>III Years:</h2>
                    <div class="carousel">
                        <div className="group" style={{animationDirection:"reverse"}}>
                            <div className="card">
                                <img src={juniors.aadhi} alt="Aadhithya C" />
                                <span className="caption">Aadhithya C</span>
                            </div>
                            <div className="card">
                                <img src={juniors.akshaya} alt="Akshaya" />
                                <span className="caption">Akshaya</span>
                            </div>
                            <div className="card">
                                <img src={juniors.ameena} alt="Ameena Jabeen" />
                                <span className="caption">Ameena Jabeen</span>
                            </div>
                            <div className="card">
                                <img src={juniors.din} alt="Dinesh Bala" />
                                <span className="caption">Dinesh Bala</span>
                            </div>
                            <div className="card">
                                <img src={juniors.jaya} alt="Jayasree" />
                                <span className="caption">Jayasree</span>
                            </div>
                             <div className="card">
                                <img src={juniors.keerthi} alt="Keerthi" />
                                <span className="caption">Keerthi</span>
                            </div>
                            <div className="card">
                                <img src={juniors.manasa} alt="Lakshmi Manasa" />
                                <span className="caption">Lakshmi Manasa</span>
                            </div>
                            <div className="card">
                                <img src={juniors.moni} alt="Monish Kumaar" />
                                <span className="caption">Monish Kumaar</span>
                            </div>
                            <div className="card">
                                <img src={juniors.nand} alt="Nandhini" />
                                <span className="caption">Nandhini</span>
                            </div>    
                            <div className="card">
                                <img src={juniors.nithish} alt="Nithish Kumar" />
                                <span className="caption">Nithish Kumar</span>
                            </div>
                            <div className="card">
                                <img src={juniors.subha} alt="Subhalakshmi" />
                                <span className="caption">Subhalakshmi</span>
                            </div>
                            <div className="card">
                                <img src={juniors.thrisha} alt="Thrisha" />
                                <span className="caption">Thrisha</span>
                            </div>
                            <div className="card">
                                <img src={juniors.vishwa} alt="Vishva Raju" />
                                <span className="caption">Vishva Raju</span>
                            </div>                        
                        </div>

                        <div className="group" aria-hidden="true" style={{animationDirection:"reverse"}}>
                            <div className="card">
                                <img src={juniors.aadhi} alt="Aadhithya C" />
                                <span className="caption">Aadhithya C</span>
                            </div>
                            <div className="card">
                                <img src={juniors.akshaya} alt="Akshaya" />
                                <span className="caption">Akshaya</span>
                            </div>
                            <div className="card">
                                <img src={juniors.ameena} alt="Ameena Jabeen" />
                                <span className="caption">Ameena Jabeen</span>
                            </div>
                            <div className="card">
                                <img src={juniors.din} alt="Dinesh Bala" />
                                <span className="caption">Dinesh Bala</span>
                            </div>
                            <div className="card">
                                <img src={juniors.jaya} alt="Jayasree" />
                                <span className="caption">Jayasree</span>
                            </div>
                             <div className="card">
                                <img src={juniors.keerthi} alt="Keerthi" />
                                <span className="caption">Keerthi</span>
                            </div>
                            <div className="card">
                                <img src={juniors.manasa} alt="Lakshmi Manasa" />
                                <span className="caption">Lakshmi Manasa</span>
                            </div>
                            <div className="card">
                                <img src={juniors.moni} alt="Monish Kumaar" />
                                <span className="caption">Monish Kumaar</span>
                            </div>
                            <div className="card">
                                <img src={juniors.nand} alt="Nandhini" />
                                <span className="caption">Nandhini</span>
                            </div>    
                            <div className="card">
                                <img src={juniors.nithish} alt="Nithish Kumar" />
                                <span className="caption">Nithish Kumar</span>
                            </div>
                            <div className="card">
                                <img src={juniors.subha} alt="Subhalakshmi" />
                                <span className="caption">Subhalakshmi</span>
                            </div>
                            <div className="card">
                                <img src={juniors.thrisha} alt="Thrisha" />
                                <span className="caption">Thrisha</span>
                            </div>
                            <div className="card">
                                <img src={juniors.vishwa} alt="Vishva Raju" />
                                <span className="caption">Vishva Raju</span>
                            </div>                             
                        </div>
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
                        <a href="tel:+919025082346" style={{ whiteSpace: "pre-line"}}>
                            <FontAwesomeIcon icon={faPhone} />: <b>Bhuvan</b> - 79047 09750, <b>Manju</b> - 90250 82346</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextBlock;