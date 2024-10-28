import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      alert("Thank you for contacting us!");
    };
  
    return (
      <div className="container my-5 contact-container">
        <h1 className="text-center mb-4 fade-in">Contact Us</h1>
        <p className="text-center lead mb-5 fade-in">We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
  
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="fade-in">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-input"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control form-input"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg submit-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
export default Contact;
