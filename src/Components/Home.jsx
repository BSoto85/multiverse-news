import { Link } from "react-router-dom";
import "../CSS/LandingPage.css";

const Home = () => {
  return (
    <div>
      <div className="head">
        <div className="headerobjectswrapper">
          <div className="weatherforcastbox">
            <span style={{ fontStyle: "italic" }}>
              Weather forecast for the next 24 hours: Plenty of Sunshine
            </span>
            <br />
            <span>Wind: 7km/h SSE; Ther: 71°F; Hum: 82%</span>
          </div>
          <header>Journey</header>
          <Link to="/main" className="button-30">
            Enter
          </Link>
        </div>
        <div className="subhead">
          New York, New York - Thursday August 30, 1978 - Seven Pages
        </div>
      </div>
      <div className="content">
        <div className="collumns">
          <div className="collumn">
            <div className="head">
              <span className="headline hl3">Educational Trivia Game</span>
              <p>
                <span className="headline hl4">
                  Go back in time and test your knowledge
                </span>
              </p>
            </div>
            <p>
              Choose a category and answer random multiple-choice questions.
              Learn and explore trivia!
            </p>
          </div>
          <div className="collumn">
            <div className="head">
              <span className="headline hl5">NY Times History Museum</span>
              <p>
                <span className="headline hl6">
                  Explore the evolution of sections over time
                </span>
              </p>
            </div>
            <p>
              Dive into the archives and see how different sections of New York
              Times have evolved since 1852...
            </p>
            <figure className="figure">
              <iframe
                src="https://giphy.com/embed/iDZbLtnWixWZLlyctK"
                width="180"
                height="180"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="NY Times History Museum GIF"
              ></iframe>
              <figcaption className="figcaption">
                Explore historical front pages.
              </figcaption>
            </figure>
          </div>
          <div className="collumn">
            <div className="head">
              <span className="headline hl1">
                What Happened on My Birthday?
              </span>
              <p>
                <span className="headline hl2">
                  Discover historical events on your special day.
                </span>
              </p>
            </div>
            <p>
              Enter your birthday and filter articles to find out what
              significant events happened on that day in history.
            </p>
            <figure className="figure">
              <iframe
                src="https://giphy.com/embed/5b9iSaucUKpukkTQpG"
                width="181"
                height="180"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="NY Times History Museum GIF"
              ></iframe>
              <figcaption className="figcaption">
                Explore historical front pages.
              </figcaption>
            </figure>
            {/* <p>Leave that to me. Send a distress signal, and inform the Senate...</p> */}
          </div>
          <div className="collumn">
            <div className="head">
              <span className="headline hl3">Journey</span>
              <p>
                <span className="headline hl4">Discover, Learn and Engage</span>
              </p>
            </div>
            <p>
              Click the button on top to start your journey and explore all
              these exciting features!...
            </p>
          </div>
          <div className="collumn">
            <div className="head">
              <span className="headline hl1">It wasn't a dream</span>
              <p>
                <span className="headline hl4">Historical Video</span>
              </p>
            </div>
            <div className="collumn">
              <div className="head">
                <span className="headline hl5">
                  Every NYT Front Page Since 1852
                </span>
              </div>
              <iframe
                src="https://player.vimeo.com/video/204951759"
                width="300"
                height="260"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
                title="Embedded Vimeo Video"
              ></iframe>
            </div>
            <p>Hisorical events brought to life...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
