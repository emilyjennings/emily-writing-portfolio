import React from 'react';

import saveme from '../img/saveme.jpg'

class Body extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    posts: [
      {
        "link": "https://medium.com/live-your-life-on-purpose/save-me-from-drowning-single-motherhood-in-the-pandemic-fcb2b2114e?sk=01ed26cdf62f57a3942c6fdf5ce43fd6",
        "thumbnail": saveme,
        "title": "Save Me from Drowning: Single Motherhood in the Pandemic",
        "intro": "Six months ago, my husband left. Disappeared. Suddenly I found myself in a pandemic alone with our four-year-old daughter and a full-time job. It has been a challenge, to say the least. Sometimes I needed someone to save me from drowning in the expectations and obligations of life.",

      },
      {

      }
    ]
  };
}

  componentDidMount() {
    let output = '';
    this.state.posts.forEach((item) => {
       output += `
       <div class="blog-card">
         <div class="blog__content">
          <a href="${item.link}">
            <img src="${item.thumbnail}" class="blog__topImg"></img>
            <div class="blog__title">${item.title}</div>
            <p class="blog__intro">${item.intro}</p>
          </a>
        </div>
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
