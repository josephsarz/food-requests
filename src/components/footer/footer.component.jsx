import React from "react";
import "../footer/footer.styles.css";

export const Footer = () => (
  <footer className="footer">
    <div className="profile-links">
      <div className="container">
        <h1 className="copyLink">© 2020 Copyright Android Team</h1>
      </div>

      <div className="container">
        <ul>
          <li>
            <a className href="http://github.com/josephsarz">
              Femicodes
            </a>
          </li>
          <li>
            <a href="http://github.com/mathemandy">Mathemandy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
