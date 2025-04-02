import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <Link href="/" className="footer-logo">
              James ThankGod
            </Link>
            <p className="copyright">
              &copy; <span id="current-year"></span> James ThankGod. All rights
              reserved.
            </p>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/OfficalJamesTee"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/james-thankgod-172bab144/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
