import { Link } from "react-router-dom";
import "../CSS/LandingPage.css";

const Home = () => {
  return (
    // <div>
      <div className="head">
        <div className="headerobjectswrapper">
          {/* <div className="weatherforcastbox">
            <span style={{ fontStyle: "italic" }}>
              Weather forecast for the next 24 hours: Plenty of Sunshine
            </span>
            <br />
            <span>Wind: 7km/h SSE; Ther: 71°F; Hum: 82%</span>
          </div>
          <header>Journey</header>
          <Link to="/index" className="button-30">
            Enter
          </Link>
        </div> */}
        <div className="subhead">
          New York, New York - Thursday August 30, 1978 - Seven Pages
        </div>
      </div>
      <div className="content">
        <div className="collumns">
          <div className="collumn">
            <div className="head">
              <span className="headline hl3">Infinite Possibilities</span>
              <p>
                <span className="headline hl4">
                Explore a vast expanse of news stories from parallel dimensions, where every search leads to a different reality.
                </span>
              </p>
            </div>
            <p>
            Uncover diverse perspectives on current events, historical milestones, and groundbreaking discoveries. With each search, a new story unfolds, offering unique insights and unexpected twists.
            </p>
          </div>
          <div className="collumn">
            <div className="head">
              <span className="headline hl5">Navigate through multitudes of articles</span>
              <p>
                <span className="headline hl6">
                Dive deep into the fabric of reality and witness the endless possibilities of news and information.
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
              Experience the thrill of discovery 
              </span>
              <p>
                <span className="headline hl2">
                From breaking news to timeless classics, every story is a portal to a different dimension.
                </span>
              </p>
            </div>
            <p>
            Embark on a journey through the multiverse of news and expand your understanding of the world. With the Multiverse News App, the only limit is your imagination."
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
          {/* <div className="collumn">
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
          </div> */}
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
                style={{ marginLeft: '-120px' }}
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
