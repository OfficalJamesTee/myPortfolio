// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="container">
//         <div className="hero-content">
//           <div className="hero-text">
//             <span className="badge">Software Developer</span>
//             <h1 className="hero-title">Hi, I'm James ThankGod</h1>
//             <p className="hero-subtitle">
//               I build exceptional and accessible digital experiences for the
//               web.
//             </p>
//             <div className="hero-buttons">
//               <a href="#contact" className="btn btn-primary">
//                 Get in touch
//               </a>
//               <a href="#projects" className="btn btn-outline">
//                 View my work
//               </a>
//             </div>
//             <div className="social-links">
//               <a
//                 href="https://github.com/OfficalJamesTee"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-link"
//               >
//                 <i className="fab fa-github"></i>
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-link"
//               >
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="social-link"
//               >
//                 <i className="fab fa-twitter"></i>
//               </a>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="image-glow"></div>
//             <Image
//               src="/img/profile-pic02.jpg"
//               alt="James-tee-pic"
//               className="profile-image"
//               width={400}
//               height={400}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">Software Developer</span>
            <h1 className="hero-title">Hi, I&apos;m James ThankGod</h1>
            <p className="hero-subtitle">
              I build exceptional and accessible digital experiences for the
              web.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View my work
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/OfficalJamesTee"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
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
          <div className="hero-image">
            <div className="image-glow"></div>
            <Image
              src="/img/profile-pic02.jpg"
              alt="James-tee-pic"
              className="profile-image"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

