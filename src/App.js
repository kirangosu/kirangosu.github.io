import React, { Component } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    const load = document.getElementById('siteLoading');

    const data = {
      "main": {
        "name":"Kiran Gosu",
        "occupation":"Full Stack Developer",
        "description":"a Dad, a Husband, a STEM Ambassador and a Full Stack Developer",
        "image":"kirangosu.jpg",
        "contactmessage":"I love staying in touch with people hands on. If you are one and if you'd like to have a chat, reach me out",
        "email": "kirankumar.gosu@gmail.com",
        "address":{
          "city":"London",
          "state":"England"
        },
        "website": "https://kirankumargosu.github.io/",
        "social":[
          {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/kirankumargosu/",
            "className":"fa fa-linkedin"
          },
          {
            "name":"github",
            "url":"https://github.com/kirankumargosu",
            "className":"fa fa-github"
          },
          {
            "name":"email",
            "url":"mailto:kirankumar.gosu@gmail.com?subject=Hi%20there",
            "className":"fa fa-envelope"
          }
        ]
      }
    }
    
    this.setState({resumeData: data})
    setTimeout(() => {load.outerHTML=''}, 1250)
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        {/* <Resume data={this.state.resumeData.resume} /> */}
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
