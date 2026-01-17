import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
           <p className="home-about-body">
              I’m a <b className="purple">Full Stack Software Engineer</b> who enjoys
              transforming complex ideas into reliable, scalable web applications. Over the
              years, I’ve worked on building production-ready systems with a strong focus on
              performance, usability, and maintainability.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js, Node.js, Laravel PHP, and MySQL{" "}
                </b>
              </i>
              and I enjoy working across both frontend and backend stacks to deliver
              complete, end-to-end solutions.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  scalable web applications, data-driven dashboards,{" "}
                </b>
              </i>
              and building intuitive user experiences backed by robust server-side
              architectures.
              <br />
              <br />
              Whenever possible, I love building products using
              <b className="purple"> React.js </b> with modern frameworks like{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>{" "}
              and integrating them with efficient backend services.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
