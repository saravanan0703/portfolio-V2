import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">SARAVANAN NAGARAJAN</span> from{" "}
            <span className="purple">Chennai, Tamil Nadu, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Senior Software Engineer</span> at{" "}
            <span className="purple">TekSystems</span>, contributing to internal products
            for <span className="purple">Applied Materials</span>.
            <br />
            I hold a <span className="purple">Bachelor of Technology in Information Technology</span>{" "}
            from <span className="purple">SSN College of Engineering</span>.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me curious, creative, and
            continuously learning:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies & building side projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing clean and user-friendly interfaces 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and improving system design skills 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build software that is reliable, scalable, and meaningful."
          </p>

          <footer className="blockquote-footer">Saravanan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
