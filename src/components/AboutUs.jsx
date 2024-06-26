import React from 'react';
import './aboutus.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us-section">
                <h2>About Us</h2>
                <div className="blog-name">
                    <h1>Welcome to Cool Blog</h1>
                </div>
                <p>
                    Your go-to destination for exploring sustainable travel adventures with tech-savvy tips and financial insights.
                </p>
                <p>
                    Our team is comprised of passionate individuals who share a common interest in Exploring Sustainable Travel Adventures with Tech-Savvy Tips and Financial Insights. We are dedicated to providing high-quality content that informs, inspires, and entertains our readers.
                </p>
                <h3>Meet Our Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <img src="src/assets/Bf.jpeg" alt="Jesse Langat" />
                        <div className="team-member-info">
                            <p><strong>Jesse Langat</strong></p>
                            <p>Square Leader</p>
                            <p>He is the fierce leader who started this whole project and has been able to take this blog to far places.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="src/assets/Shoot.jpeg" alt="Dennis Muthuri" />
                        <div className="team-member-info">
                            <p><strong>Dennis Muthuri</strong></p>
                            <p>Advisor and Photographer</p>
                            <p>He is chilled, likes to help out, can give advice, and is handy.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="src/assets/Person Says He Can Find Anyone’s Anime Lookalike, Delivers (32 Pics).jpeg" alt="Liz Wachira" />
                        <div className="team-member-info">
                            <p><strong>Liz Wachira</strong></p>
                            <p>Frontend Developer</p>
                            <p>She is the kind that will raise an issue and act like our problem solver and is quick at her work.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="src/assets/●GOJO SATORU.jpeg" alt="It's Dices" />
                        <div className="team-member-info">
                            <p><strong>Ken Kipkoech</strong></p>
                            <p>Designer</p>
                            <p>He is the kind of person that knows how to mind his business and helps out whenever he can, but his works are great.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="src/assets/Make Your Day.jpeg" alt="Ronny" />
                        <div className="team-member-info">
                            <p><strong>Ronny Njoroge</strong></p>
                            <p>Backend Developer</p>
                            <p>He is the member who does not talk much but knows how to do his job well.</p>
                        </div>
                    </div>
                </div>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Expertise: Our team consists of industry experts who are passionate about cybersecurity, photography, frontend, and backend development.</li>
                    <li>Quality Content: We leverage our expertise in cybersecurity to ensure the safety and privacy of our readers, while our photography skills capture the essence of each travel adventure in stunning visuals.</li>
                    <li>Community: Join our community of like-minded individuals who share your passion for exploring the world while staying informed about cybersecurity measures and enjoying visually appealing content.</li>
                    <li>Continuous Improvement: We continuously enhance our frontend and backend development skills to deliver a seamless and interactive user experience, making it easier for our readers to navigate and engage with our content.</li>
                    <li>Client-Centric Approach: Our goal is to help our clients receive the best services and information tailored to their needs, ensuring a personalized and satisfying experience.</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;
