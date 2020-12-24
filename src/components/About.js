import profile from '../img/crown2.jpg'

function About() {
  return (
    <div className="Body">
      <div className="home-message">
        <div className="landing-message">
          <h3>Hi, I'm Emily.</h3>
          <img src={profile} alt="" />
          <p>I write about wellness, parenting, consciousness, and spirituality.</p>
          <p>More info coming soon.</p>
        </div>
      </div>
    </div>

  );
}

export default About;
