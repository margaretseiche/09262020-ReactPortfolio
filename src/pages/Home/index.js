import React from "react";
import Container from "../../components/Container";
import "./style.css";

const style = {
  containerStyle: {
    marginTop: "5em"
  },
  spanStyle: {
    color: "#4537c2",
    fontSize: "20px"
  }
}

function Home() {
  return (
    <div>
      <Container style={style.containerStyle}>
        <main>
          <div className="container">
            <section id="intro">
              
              {/* <img id="bio-image" src=".../public/MargaretSeiche.JPG" alt="photo of Margaret Seiche"/> */}

              <img id="bio-image" src="/%PUBLIC_URL%/MargaretSeiche.JPG" alt="Margaret Seiche" />
            </section>

            <section id="main-bio">
              <h2 id="index-bio-intro">Hi, I'm Margaret,<br /> a Full-Stack Developer.</h2>
              <p>Are you re-envisioning event management<br /> to fit today's realities? <br /><span style={style.spanStyle}><b> I am.</b></span></p>
            </section>

          </div>
        </main>
      </Container>
    </div>
  );
}

export default Home;
