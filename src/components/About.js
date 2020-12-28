import profile from '../img/crown2.jpg'

function About() {
  return (
    <div className="Body">
      <div className="home-message">
        <div className="landing-message">
          <h3>Hi, I'm Emily.</h3>
          <img src={profile} alt="" />
          <p>I write about wellness, parenting, consciousness, and spirituality.</p>
          <p>With the world in its current state, I believe my written words are the way to help us all start to heal. I write on <a href="https://awakening-journey.medium.com/">Medium</a> and also created a personal blog about wellness and spirituality called <a href="https://www.shaktimindfulawakening.com">Shakti Mindful Awakening.</a></p>
        </div>
      </div>
    </div>

  );
}

export default About;
