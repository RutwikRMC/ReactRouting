import React from "react";

function About() {
  return (
    <div className="container my-5">
      <h1 className="display-4 fw-bold text-center mb-4">About Us</h1>
      
      {/* Introduction Section */}
      <section className="mb-5">
        <p className="lead text-center">
          Welcome to our store! We are passionate about delivering the best fashion to you.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="row mb-5">
        <div className="col-md-6">
          <h2 className="h3">Our Story</h2>
          <p>
            Founded in 2020, our brand is committed to bringing the latest trends in fashion to 
            your doorstep. We started as a small boutique and have grown into an online store 
            catering to fashion lovers worldwide.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhY3Rpb258ZW58MHx8fHwxNjcxMzg0Mjg3&ixlib=rb-4.0.3&q=80&w=600" 
            alt="Our Story"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="row mb-5">
        <div className="col-md-6">
          <img 
            src="https://www.shutterstock.com/shutterstock/photos/2276750979/display_1500/stock-photo-mission-team-building-or-hands-of-business-people-with-goals-support-or-motivation-for-success-or-2276750979.jpg"
            alt="Our Mission"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h2 className="h3">Our Mission</h2>
          <p>
            Our mission is simple: to provide high-quality, stylish clothing that doesn't break 
            the bank. We believe fashion should be accessible to everyone, and we strive to 
            deliver the best value to our customers through quality products and exceptional service.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-center bg-light py-5 rounded shadow-lg">
        <h2 className="h3 mb-4">Our Vision</h2>
        <p className="lead">
          We aim to be a global leader in the fashion industry, setting trends and inspiring 
          confidence in our customers through innovation and creativity.
        </p>
      </section>
    </div>
  );
}

export default About;
