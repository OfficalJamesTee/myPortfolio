// "use client";

// import type React from "react";

// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [formStatus, setFormStatus] = useState({
//     message: "",
//     type: "",
//     visible: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setFormStatus({
//           message: "Message sent successfully!",
//           type: "success",
//           visible: true,
//         });
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         setFormStatus({
//           message: data.message || "Something went wrong. Please try again.",
//           type: "error",
//           visible: true,
//         });
//       }
//     } catch (error) {
//       setFormStatus({
//         message: "An error occurred. Please try again later.",
//         type: "error",
//         visible: true,
//       });
//     }

//     // Hide the message after 5 seconds
//     setTimeout(() => {
//       setFormStatus((prev) => ({
//         ...prev,
//         visible: false,
//       }));
//     }, 5000);
//   };

//   return (
//     <section id="contact" className="contact section">
//       <div className="container">
//         <span className="badge">Contact</span>
//         <h2 className="section-title">Get In Touch</h2>
//         <div className="contact-content">
//           <div className="contact-info">
//             <p>
//               I'm always open to discussing new projects, creative ideas or
//               opportunities to be part of your vision. Feel free to reach out to
//               me using the contact form or through my social media profiles.
//             </p>
//             <div className="contact-details">
//               <div className="contact-item">
//                 <i className="fas fa-envelope"></i>
//                 <span>
//                   <a>
//                     jamesthankgod2025@gmail.com
//                   </a>
//                 </span>
//               </div>
//               <div className="contact-item">
//                 <i className="fab fa-linkedin"></i>
//                 <span>linkedin.com/in/JamesThankGod</span>
//               </div>
//               <div className="contact-item">
//                 <i className="fab fa-twitter"></i>
//                 <span>@james_tee</span>
//               </div>
//             </div>
//           </div>
//           <div className="contact-form-container">
//             <form
//               id="contact-form"
//               className="contact-form"
//               onSubmit={handleSubmit}
//             >
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Your name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Your email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Your message"
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary btn-full">
//                 Send Message
//               </button>
//               {formStatus.visible && (
//                 <div className={`form-success-message ${formStatus.type}`}>
//                   {formStatus.message}
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import type React from "react";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          message: "Message sent successfully!",
          type: "success",
          visible: true,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          message: data.message || "Something went wrong. Please try again.",
          type: "error",
          visible: true,
        });
      }
    } catch {
      // Removed the unused variable completely
      setFormStatus({
        message: "An error occurred. Please try again later.",
        type: "error",
        visible: true,
      });
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      setFormStatus((prev) => ({
        ...prev,
        visible: false,
      }));
    }, 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <span className="badge">Contact</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision. Feel free to reach out to
              me using the contact form or through my social media profiles.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="1c767d71796f68747d72777b73782e2c2e295c7b717d7570327f7371"
                  >
                    [email&#160;protected]
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>linkedin.com/in/JamesThankGod</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-twitter"></i>
                <span>@james_tee</span>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
              {formStatus.visible && (
                <div className={`form-success-message ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


