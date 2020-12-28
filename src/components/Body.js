import React from 'react';

import saveme from '../img/saveme.jpg'
import scrooge from '../img/scrooge.jpg'
import enlightenment from '../img/enlightenment.jpg'
import beyonce from '../img/beyonce.jpg'
import gut from '../img/gut.jpg'
import foursteps from '../img/foursteps.jpg'
import feminine from '../img/feminine.jpg'
import tune from '../img/tune.jpg'
import abusive from '../img/abusive.jpg'

class Body extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    posts: [
      {
        "link": "https://medium.com/mystic-minds/get-excited-for-a-new-era-of-feminine-energy-1ff89aa93c70?sk=d8a94970f2e4ae6198e7d7c919f8ca31",
        "thumbnail": feminine,
        "title": "Get Excited for a New Era of Feminine Energy",
        "intro": "The balance of male and female is tipping and the matriarchy is coming.",
        "published": "Mystic Minds"
      },
      {
        "link": "https://medium.com/the-innovation/four-steps-to-begin-and-enjoy-your-meditation-practice-b30ca5e48c14?sk=9bd33b086315b045af7d1313c5719a4c",
        "thumbnail": foursteps,
        "title": "Four Steps to Begin and Enjoy Your Meditation Practice",
        "intro": "Just one take on how to reach bliss",
        "published": "The Innovation"
      },
      {
        "link": "https://medium.com/mystic-minds/scrooges-dark-night-of-the-soul-proves-that-narcissists-can-wake-up-3bbc39ac3829?sk=9a203342438825b1b689215591796288",
        "thumbnail": scrooge,
        "title": "Scrooge’s Dark Night of the Soul Proves that Narcissists Can Wake Up",
        "intro": "Just like Scrooge, narcissists need a traumatic event to awaken and raise their vibration",
        "published": "Mystic Minds"
      },
      {
        "link": "https://medium.com/illumination/why-your-enlightenment-matters-now-more-than-ever-542496a95a3e?sk=09a9714c647695315a19adb6981830f0",
        "thumbnail": enlightenment,
        "title": "Why Your Enlightenment Matters Now More Than Ever",
        "intro": "This lifetime is available for you to ascend, so why wouldn’t you?",
        "published": "ILLUMINATION"
      },
      {
        "link": "https://medium.com/mystic-minds/beyonc%C3%A9s-black-is-king-proves-she-is-awake-29a5b766c883?sk=b61c2d405ad189c62e24db4dbad1bfeb",
        "thumbnail": beyonce,
        "title": "Beyoncé’s Black is King Proves She is Awake",
        "intro": "The oneness of reality and the messages of the divine soul pervade this film",
        "published": "Mystic Minds"
      },
      {
        "link": "https://medium.com/the-innovation/mindfulness-drastically-improved-my-gut-health-ca2be4c080a5",
        "thumbnail": gut,
        "title": "Mindfulness Drastically Improved My Gut Health",
        "intro": "How I got rid of heartburn and began to clean myself with Ayurveda",
        "published": "The Innovation"
      },
      {
        "link": "https://medium.com/mindfully-speaking/how-to-mindfully-tune-yourself-to-the-frequency-of-the-woods-88ceff066964",
        "thumbnail": tune,
        "title": "How to Mindfully Tune Yourself to the Frequency of the Woods",
        "intro": "Listening to nature, talking to trees, and connecting with the Earth can enhance your mental health",
        "published": "Mindfully Speaking"
      },
      {
        "link": "https://medium.com/spiritual-secrets/why-its-hard-to-leave-our-abusive-partners-57bb7bceaf06",
        "thumbnail": abusive,
        "title": "Why It’s Hard to Leave Our Abusive Partners",
        "intro": "A transcendental look at the subtle nature of relationships",
        "published": "Spiritual Secrets"
      },
      {
        "link": "https://medium.com/live-your-life-on-purpose/save-me-from-drowning-single-motherhood-in-the-pandemic-fcb2b2114e?sk=01ed26cdf62f57a3942c6fdf5ce43fd6",
        "thumbnail": saveme,
        "title": "Save Me from Drowning: Single Motherhood in the Pandemic",
        "intro": "It’s absurd what society expects of moms.",
        "published": "Live Your Life on Purpose"
      },
    ]
  };
}

  componentDidMount() {
    let output = '';
    this.state.posts.forEach((item) => {
       output += `
       <div class="blog-card">
        <a href="${item.link}">
         <div class="blog__content">
            <img src="${item.thumbnail}" class="blog-img"></img>
            <h2 class="blog__title">${item.title}</h2>
            <p class="blog__intro">${item.intro}</p>
            <p class="publication">Published in ${item.published}</p>
          </div>
        </a>
      </div>`

    })
    document.querySelector('.blog-posts').innerHTML = output
  }


  render() {
    return <div className="Body">
        <div className="blog-posts">
        </div>
      </div>

  }
}

export default Body;
