import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import monitor from "../../Assets/Projects/O2.png"
import data from "../../Assets/Projects/Data.png"
function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/mehta-karannn/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant Disease Detection"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'Tensorflow' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of potato plants. I was able to achieve an accuracy of 97.2% ."
              ghLink="https://github.com/mehta-karannn/Plant-Disease-Detection"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Netflix"
              description="Used AngularJS to develop this project.Also , used Themoviedb api to integrate into this project . This project shows the trailer of trending and upcoming movies and also the one's which are blockbuster."
              ghLink="https://github.com/mehta-karannn/Netflix-Clone"
              demoLink="https://netflix-tawny-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Data Extraction and analysis"
              description="This project  ainms to extract data and analysis it using various python libaries . It extract data from the url and give the outout as the word cound and other such 9 variables."
              ghLink="https://github.com/mehta-karannn/Data-Extraction-and-Analysing"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monitor}
              isBlog={false}
              title="Monitoring System for Heart Rate and Oxygen"
              description="This system helps one carry their personalized Oxymeter with them . Using this they can detect there actual body temperature as well as Hear Rate . It is done through the Heat Map of the person's face and accordingly it detects the person's Heart Rate and Oxygen."
              ghLink="https://github.com/mehta-karannn/Monitoring-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
