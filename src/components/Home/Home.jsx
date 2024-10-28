import React from "react";
import "animate.css";

function Home() {
    return (
      <div className="container my-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold animate__animated animate__fadeInLeft">Find Your Style</h1>
            <p className="lead mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
              Discover the latest trends in fashion and get your favorite items at amazing prices.
            </p>
            <a href="#shop-now" className="btn btn-primary btn-lg mt-3 gtBtn animate__animated animate__fadeInLeft animate__delay-2s">Shop Now</a>
          </div>
          <div className="col-md-6">
            <img
              src="https://t3.ftcdn.net/jpg/05/33/25/88/360_F_533258844_moMmY2FoP1O0PwkK0mSMQmz18v8HadFP.jpg"
              alt="Shopping"
              className="img-fluid rounded shadow-lg animate__animated animate__zoomIn"
            />
          </div>
        </div>
  
        {/* Featured Products Section */}
        <div id="shop-now" className="text-center mb-5">
          <h2 className="mb-4 animate__animated animate__fadeInUp">Featured Products</h2>
          <div className="row">
            {/* Product 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow d-flex flex-column animate__animated animate__fadeInUp animate__delay-1s">
                <img
                  src="https://static9.depositphotos.com/1594308/1158/i/450/depositphotos_11582705-stock-photo-brothers-with-bags.jpg"
                  className="card-img-top img-fixed-height"
                  alt="Stylish Jacket"
                />
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">Childrens Shopping</h5>
                  <p className="card-text">
                    Stay warm and stylish with this modern jacket. Available in multiple colors.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
              </div>
            </div>
  
            {/* Product 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow d-flex flex-column animate__animated animate__fadeInUp animate__delay-2s">
                <img
                  src="https://img.freepik.com/free-photo/portrait-man-going-out-shopping-various-consumer-goods_23-2151669788.jpg"
                  className="card-img-top img-fixed-height"
                  alt="Casual Sneakers"
                />
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">Mans Shopping</h5>
                  <p className="card-text">
                    Comfortable and stylish sneakers for everyday wear. Grab them now!
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
              </div>
            </div>
  
            {/* Product 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow d-flex flex-column animate__animated animate__fadeInUp animate__delay-3s">
                <img
                  src="https://img.freepik.com/free-photo/full-length-portrait-happy-satisfied-woman_171337-6974.jpg"
                  className="card-img-top img-fixed-height"
                  alt="Elegant Watch"
                />
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">Womens Shopping</h5>
                  <p className="card-text">
                    Elevate your style with this sleek and elegant wristwatch. Perfect for all occasions.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-outline-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Promotional Section */}
        <div className="text-center py-5 bg-light rounded shadow-lg animate__animated animate__zoomIn">
          <h2 className="mb-4">Exclusive Offers</h2>
          <p className="lead">
            Sign up for our newsletter and get 20% off your first order. Don’t miss out on our limited-time deals!
          </p>
          <a href="#" className="btn btn-danger btn-lg">Get Offer</a>
        </div>
      </div>
    );
  }
  
export default Home;
