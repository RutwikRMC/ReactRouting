import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "20px 0" }}>
      <div className="container text-center">
        <h1>Footer</h1>
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
