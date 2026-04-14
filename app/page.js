export default function Home() {

    const projects = [
        {
            id: "PRJ-01",
            title: "Benevents",
            desc: "Scalable college event management platform with QR-based check-ins, Razorpay payment integration, REST APIs, and PostgreSQL. Supports 1000+ users.",
            tech: ["React", "Node.js", "PostgreSQL", "Razorpay"],
            link: "https://benevents.vercel.app/",
            image: "p1.jpg"

        },
        {
            id: "PRJ-02",
            title: "Traffic Sign Detection",
            desc: "AI-based traffic sign classification system using OpenCV and TensorFlow with high accuracy.",
            tech: ["Python", "TensorFlow", "OpenCV"],
            link: "https://github.com/kb7781/traffic-sign",
            image: "p2.png"


        },
        {
            id: "PRJ-03",
            title: "Road Accident Analysis",
            desc: "Analyzed 10,000+ accident records to identify high-risk zones and key safety factors.",
            tech: ["Python", "Pandas", "EDA"],
            link: "https://github.com/kb7781/road-accident-analysis-",
            image: "p3.png"
        },
        {
            id: "PRJ-04",
            title: "Amazon Clone",
            desc: "Frontend clone of Amazon with responsive UI and product browsing features.",
            tech: ["JavaScript", "HTML", "CSS"],
            link: "https://amazonbykunal.vercel.app/",
            image: "p4.png"

        },
        {
            id: "PRJ-05",
            title: "Room Booking System",
            desc: "TypeScript-based system for managing room bookings with scheduling and availability tracking.",
            tech: ["TypeScript", "Node.js"],
            link: "https://github.com/kb7781/room-booking",
            image: "p5.png"
        }
    ];

    return (
        <main>
            {/* ═══ Custom Crystal Cursor ═══ */}
            <div className="cursor-diamond" id="cursorDiamond"></div>
            <div className="cursor-glow" id="cursorGlow"></div>

            {/* ═══ Scroll Progress ═══ */}
            <div className="scroll-progress" id="scrollProgress"></div>

            {/* ═══ Navigation ═══ */}
            <nav className="navbar" id="navbar">
                <a href="#hero" className="nav-brand" aria-label="Home">KB</a>
                <div className="nav-links" id="navLinks">
                    <a href="#hero" className="nav-link active" data-section="hero">
                        <span className="nav-num">01</span><span className="nav-txt">Origin</span>
                    </a>
                    <a href="#about" className="nav-link" data-section="about">
                        <span className="nav-num">02</span><span className="nav-txt">Identity</span>
                    </a>
                    <a href="#projects" className="nav-link" data-section="projects">
                        <span className="nav-num">03</span><span className="nav-txt">Archives</span>
                    </a>
                    <a href="#skills" className="nav-link" data-section="skills">
                        <span className="nav-num">04</span><span className="nav-txt">Systems</span>
                    </a>
                    <a href="#contact" className="nav-link" data-section="contact">
                        <span className="nav-num">05</span><span className="nav-txt">Uplink</span>
                    </a>
                </div>
                <button className="nav-burger" id="navBurger" aria-label="Toggle navigation menu">
                    <span></span><span></span><span></span>
                </button>
            </nav>

            {/* ═══ Smooth-Scroll Wrapper ═══ */}
            <div id="smoothWrapper">
                <div id="smoothContent">

                    {/* ████████ HERO ████████ */}
                    <section id="hero" className="section hero-section">
                        <canvas id="heroCanvas"></canvas>
                        <div className="hero-fade"></div>
                        <div className="hero-body" data-parallax="0.08">
                            <div className="hero-name" id="heroName">
                                <div className="name-line">
                                    <span className="slab">K</span>
                                    <span className="slab">U</span>
                                    <span className="slab">N</span>
                                    <span className="slab">A</span>
                                    <span className="slab">L</span>
                                </div>
                                <div className="name-line">
                                    <span className="slab">B</span>
                                    <span className="slab">O</span>
                                    <span className="slab">T</span>
                                    <span className="slab">H</span>
                                    <span className="slab">R</span>
                                    <span className="slab">A</span>
                                </div>
                            </div>
                            <p className="hero-tag">Data Science & AI · Full Stack Developer</p>
                            <button className="cta-obsidian" id="ctaBtn">
                                <span className="cta-label">Explore My Work</span>
                                <span className="cta-glow"></span>
                            </button>
                        </div>
                        <div className="scroll-indicator">
                            <div className="scroll-bar"></div>
                            <span>SCROLL</span>
                        </div>
                    </section>

                    {/* ████████ ABOUT ████████ */}
                    <section id="about" className="section">
                        <div className="noise-layer"></div>
                        <div className="section-head">
                            <span className="sec-num">02</span>
                            <h2 className="sec-title">IDENTITY<span className="sec-accent">.MATRIX</span></h2>
                        </div>
                        <div className="about-wrap">
                            <div className="about-card-col">
                                <div className="portrait-card" id="portraitCard">
                                    <div className="portrait-face">
                                        <img src="profile.jpg" alt="Kunal Bothra" className="portrait-img" loading="lazy" />
                                        <div className="portrait-sheen"></div>
                                    </div>
                                    <div className="portrait-info">
                                        <strong>KUNAL BOTHRA</strong>
                                        <span>FULL STACK / DATA SCIENCE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about-text-col">
                                <div className="bio" id="bioText">
                                    <p className="bio-p" data-delay="0">I am a B.Tech Computer Science student specializing in
                                        <strong className="hl-v"> Data Science & Artificial Intelligence</strong>, with hands-on experience in
                                        <strong className="hl-t"> machine learning, data analysis, and full-stack development</strong>.</p>
                                    <p className="bio-p" data-delay="300">I have co-developed scalable systems like <strong className="hl-t">Benevents</strong> — a college event management platform with QR-based check-ins, secure payments, and REST APIs supporting 1000+ users.</p>
                                    <p className="bio-p" data-delay="600">Through virtual experiences with <strong className="hl-r">AWS, Tata Group, and JPMorgan Chase</strong>, I have worked on cloud architecture, data analytics, and backend systems.</p>
                                    <p className="bio-p" data-delay="900">Currently serving as <strong className="hl-v">Treasurer of NSS (National Service Scheme)</strong> , I contribute to social impact initiatives including community outreach, event organization, and resource management for student-led welfare programs.</p>
                                    <p className="bio-p" data-delay="1400">Previously, I served as<strong className="hl-r"> Deputy Minister of Operations in SCSET</strong>, where I lead technical initiatives and build impactful real-world solutions.</p>
                                </div>
                                <div className="stats-row">
                                    <div className="stat-block">
                                        <span className="stat-val">02+</span>
                                        <span className="stat-lbl">YRS EXP</span>
                                    </div>
                                    <div className="stat-block">
                                        <span className="stat-val">10+</span>
                                        <span className="stat-lbl">PROJECTS</span>
                                    </div>
                                    <div className="stat-block">
                                        <span className="stat-val">∞</span>
                                        <span className="stat-lbl">CURIOSITY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ████████ PROJECTS ████████ */}
                    <section id="projects" className="section">
                        <div className="section-head">
                            <span className="sec-num">03</span>
                            <h2 className="sec-title">PROJECT<span className="sec-accent">.ARCHIVES</span></h2>
                        </div>
                        <div className="proj-grid" id="projGrid">

                            {projects.map((proj, i) => (
                                <div className="proj-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={proj.id}>
                                    <div className="proj-card-inner">
                                        <div className="proj-front">
                                            <span className="proj-id">{proj.id}</span>
                                            <div className="proj-header">
                                                <div className="proj-header-bg">
                                                    {proj.image && <img src={proj.image} alt={proj.title} className="proj-header-img" loading="lazy" />}
                                                    <span className="proj-header-icon">{proj.icon}</span>
                                                </div>
                                            </div>
                                            <div className="proj-body">
                                                <h3 className="proj-title">{proj.title}</h3>
                                                <p className="proj-desc">{proj.desc}</p>
                                                <div className="proj-tags">
                                                    {proj.tech.map((t, idx) => (
                                                        <span className="proj-tag" key={idx}>{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="proj-back">
                                            <h3 className="proj-back-title">{proj.title}</h3>
                                            <p className="proj-back-desc">{proj.desc}</p>
                                            <div className="proj-links">
                                                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> VIEW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>

                    {/* ████████ SKILLS ████████ */}
                    <section id="skills" className="section">
                        <div className="section-head">
                            <span className="sec-num">04</span>
                            <h2 className="sec-title">SYSTEM<span className="sec-accent">.MODULES</span></h2>
                        </div>
                        <div className="skills-arena" id="skillsArena">
                            <canvas id="skillsCanvas"></canvas>
                            <div className="skill-labels" id="skillLabels"></div>
                            <div className="skill-popup hidden" id="skillPopup">
                                <button className="sp-close" id="spClose" aria-label="Close">&times;</button>
                                <h3 id="spName"></h3>
                                <div className="sp-bar"><div className="sp-fill" id="spFill"></div></div>
                                <span className="sp-pct" id="spPct"></span>
                                <p id="spDesc"></p>
                            </div>
                            <p className="skills-hint">Click an orb to explore</p>
                        </div>
                    </section>

                    {/* ████████ CONTACT ████████ */}
                    <section id="contact" className="section">
                        <div className="section-head">
                            <span className="sec-num">05</span>
                            <h2 className="sec-title">SECURE<span className="sec-accent">.UPLINK</span></h2>
                        </div>
                        <div className="contact-wrap">
                            <div className="contact-info">
                                <div className="ci">
                                    <span className="ci-lbl">EMAIL</span>
                                    <a href="mailto:kunalbothra.work@gmail.com">kunalbothra.work@gmail.com</a>
                                </div>
                                <div className="ci">
                                    <span className="ci-lbl">GITHUB</span>
                                    <a href="https://github.com/kb7781" target="_blank" rel="noopener noreferrer">github.com/kb7781</a>
                                </div>
                                <div className="ci">
                                    <span className="ci-lbl">LINKEDIN</span>
                                    <a href="https://www.linkedin.com/in/kunal-bothra/" target="_blank" rel="noopener noreferrer">kunal-bothra</a>
                                </div>
                                <div className="ci">
                                    <span className="ci-lbl">INSTAGRAM</span>
                                    <a href="https://instagram.com/kb_7781" target="_blank" rel="noopener noreferrer">@kb_7781</a>
                                </div>
                                <div className="ci">
                                    <span className="ci-lbl">LOCATION</span>
                                    <span>India</span>
                                </div>
                            </div>
                            <form className="concrete-form" id="contactForm">
                                <div className="chisel-field">
                                    <label htmlFor="cName">IDENTIFIER</label>
                                    <input id="cName" name="name" type="text" required placeholder="Your name" autoComplete="name" />
                                </div>
                                <div className="chisel-field">
                                    <label htmlFor="cEmail">RETURN ADDR</label>
                                    <input id="cEmail" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
                                </div>
                                <div className="chisel-field">
                                    <label htmlFor="cMsg">PAYLOAD</label>
                                    <textarea id="cMsg" name="message" rows="5" required placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="transmit-btn" id="transmitBtn">
                                    <span className="tb-text">TRANSMIT</span>
                                    <span className="tb-success">PACKET DELIVERED ✓</span>
                                </button>
                                <canvas id="burstCanvas"></canvas>
                            </form>
                        </div>
                    </section>

                    {/* ████████ FOOTER ████████ */}
                    <footer className="site-footer">
                        <span className="footer-name">KUNAL BOTHRA &copy; 2026</span>
                        <div className="footer-links">
                            <a href="https://github.com/kb7781" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/kunal-bothra/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://instagram.com/kb_7781" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="mailto:kunalbothra.work@gmail.com">Email</a>
                        </div>
                    </footer>

                </div>{/* /smoothContent */}
            </div>{/* /smoothWrapper */}
        </main>
    );
}