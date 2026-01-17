import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

/* Optional placeholder image */
import projectImg from "../../Assets/Projects/codeEditor.png";

function Projects() {
  const projects = [
    {
      title: "OpenAI Headline Generator",
      description:
        "Generate catchy titles for web pages and blogs using OpenAI APIs. A simple and fast content generation tool.",
      demoLink: "https://create-headlines.vercel.app/",
      ghLink: "",
    },
    {
      title: "Form Builder",
      description:
        "Drag-and-drop form builder with customizable labels and inputs. Built with TypeScript for type safety.",
      demoLink: "https://typescript-form-builder.vercel.app/",
      ghLink: "",
    },
    {
      title: "Coming Soon Page",
      description:
        "Customizable coming soon landing page with countdown timer and responsive design.",
      demoLink: "https://coming-soon-rosy-alpha.vercel.app/",
      ghLink: "",
    },
    {
      title: "CRM Application",
      description:
        "CRM application with complete CRUD functionality and API integration for managing business data.",
      demoLink: "#",
      ghLink: "",
    },
    {
      title: "Second Brain AI Chat Bot",
      description:
        "AI-powered chatbot that allows users to upload custom documents and query them using Mistral AI.",
      demoLink: "https://sara-secondbrain.vercel.app/",
      ghLink: "",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={projectImg}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
