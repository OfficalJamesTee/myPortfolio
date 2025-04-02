export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <span className="badge">About Me</span>
        <h2 className="section-title">My Background</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer with a focus on creating
              intuitive and performant web applications. With several years of
              experience in the industry, I've worked on a variety of projects
              ranging from small business websites to complex enterprise
              applications.
            </p>
            <p>
              My journey in tech began when I was in college, where I discovered
              my love for problem-solving and creating digital solutions. Since
              then, I've been constantly learning and improving my skills to
              stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and community events.
            </p>
          </div>
          <div className="about-details">
            <div className="education">
              <h3 className="details-title">Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>BSc in Computer Science & Informatics</h4>
                  <h5>Federal University Otuoke, 2019-2023</h5>
                  <p>
                    My B.Sc. in Computer Science and Informatics provided me
                    with a comprehensive understanding of computer science
                    principles and practical experience in developing innovative
                    solutions to real-world problems. Graduating with
                    Second-class honors (upper division), I honed my skills in
                    programming and web development laying a strong foundation
                    for my career in tech.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>National EXamination Council, NECO</h4>
                  <h5>
                    Community Secondary School Okutukutu, Yenagoa, Bayelsa State
                  </h5>
                  <p>
                    My secondary school education laid a strong foundation in
                    critical thinking and problem-solving skills, which have
                    been essential in my pursuit of a career in computer
                    science.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience">
              <h3 className="details-title">Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Federal University Otuoke ICT Center</h4>
                  <h5>Federal University Otuoke, Bayelsa State</h5>
                  <p>
                    As part of my journey toward attaining a BSc degree, I
                    actively engaged in the Student Industrial Work Experience
                    Scheme (SIWES) within the ICT department of Federal
                    University Otuoke. During this valuable experience, I
                    immersed myself in a rich learning environment where I
                    acquired a diverse set of skills. My focus encompassed:{" "}
                    <br />- Web Development Expertise: I cultivated proficiency
                    in web development, harnessing the power of Nodejs, HTML,
                    CSS, and JavaScript to craft dynamic and interactive web
                    solutions. This endeavor not only fulfills an academic
                    requirement but also signifies my commitment to continuous
                    learning and the acquisition of practical skills that will
                    serve as a solid foundation for my future endeavors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
