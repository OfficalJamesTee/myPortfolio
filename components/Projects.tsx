import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <span className="badge">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <Image
                src="/img/projects-worked-on/omnifood-clone.png"
                alt="resturant-website"
                width={500}
                height={300}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Resturant Landing Page</h3>
              <p className="project-description">
                A responsive landing page of a resturant that i cloned using
                HTML, CSS and JavaScript, with a smooth animation display
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/OfficalJamesTee/Omnifood-clone.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://jamestee-omnifood-clone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                >
                  <i className="fas fa-external-link-alt"></i> view
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <Image
                src="/img/projects-worked-on/TeeAutos.png"
                alt="resturant-website"
                width={500}
                height={300}
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">Car Rental website</h3>
              <p className="project-description">
                A responsive landing page of a website where cars can be rented,
                it a simple site that was built using html, css and javascript,
                it has smooth animation
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/OfficalJamesTee/Car-Rental.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                <a
                  href="https://teeautos.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                >
                  <i className="fas fa-external-link-alt"></i> view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
