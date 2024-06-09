import React from "react";
import { Link } from "react-router-dom";
import "../CSS/About.css"

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-dev">About the Developer</h1>
      <ul className="developer-list">
        <li className="developer">
          <h2>Anita</h2>
          <a
            href="https://github.com/AnitaOwen"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1717880292/dkaquzxxmxtdcp8rxy4q.jpg"
              alt="Anita!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Anita Owen, a passionate full-stack developer, is
            also a devoted mom and longtime DJ who's always thrived in dynamic
            environments, blending creativity with technical skill. Her journey
            from the turntables to the terminal, fueled by a love for
            problem-solving and a dedication to continuous growth, helps her to
            navigate the world of software development."
          </p>
        </li>
        <li className="developer">
          <h2>Armando</h2>
          <a
            href="https://github.com/AnitaOwen"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1717880220/uqaensvdfy8lmvpmqb40.jpg"
              alt="Anita!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Armando, an innovative full-stack developer, hails from the vibrant city of Queens, NY. 
            With a knack for merging artistic vision with coding prowess, his journey from graphic 
            design to software engineering is driven by a passion for creativity and problem-solving.
             His commitment to learning and growth allows him to excel in the ever-evolving tech landscape."
          </p>
        </li>
        <li className="developer">
          <h2>Brenda</h2>
          <a
            href="https://github.com/BSoto85"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1712965350/n1nx7wrgie8sd7l41wwq.jpg"
              alt="Brenda!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Brenda Soto, a former veterinary technician, is now
            an aspiring full-stack web developer enrolled in Pursuit's
            mentorship program. She blends her rich background in
            problem-solving with a passion for learning web development,
            showcasing adaptability and eagerness for new challenges in tech."
          </p>
        </li>
      </ul>
      <Link to={"/"}>
        <button className="button-11">Back to Home</button>
      </Link>

    </div>
  );
};

export default About;
