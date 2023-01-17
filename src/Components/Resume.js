import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.title}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Languages</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-c-plain colored technology"></i>
                <i className="devicon-cplusplus-plain colored technology"></i>
                <i className="devicon-csharp-plain colored technology"></i>
                <i className="devicon-objectivec-plain colored technology"></i>
                <i className="devicon-dotnetcore-plain technology"></i>
                <i className="devicon-java-plain-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>App Development</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-python-plain-wordmark colored technology"></i>
                <i className="devicon-pycharm-plain-wordmark colored technology"></i>
                <i className="devicon-flask-original-wordmark colored technology"></i>
                <i className="devicon-pandas-original-wordmark colored technology"></i>
                <i className="devicon-numpy-original-wordmark colored technology"></i>
                <i className="devicon-django-plain colored technology"></i>
                <i className="devicon-jupyter-plain colored technology"></i>
                <i className="devicon-docker-plain-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Web Development</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-javascript-plain colored technology"></i>
                <i className="devicon-typescript-plain colored technology"></i>
                <i className="devicon-react-original-wordmark colored technology"></i>
                <i className="devicon-angularjs-plain-wordmark colored technology"></i>
                <i className="devicon-d3js-plain colored technology"></i>
                {/* <i className="devicon-neo4j-plain-wordmark colored technology"></i> */}
                {/* <i className="devicon-nestjs-plain-wordmark colored technology"></i> */}
                {/* <i className="devicon-nextjs-original-wordmark colored technology"></i> */}
                <i className="devicon-nodejs-plain-wordmark colored technology"></i>
                {/* <i className="devicon-feathersjs-original colored technology"></i> */}
                <i className="devicon-jquery-plain-wordmark colored technology"></i>
                {/* <i className="devicon-vuejs-plain-wordmark colored technology"></i> */}
                <i className="devicon-css3-plain-wordmark colored technology"></i>
                <i className="devicon-html5-plain-wordmark colored technology"></i>
                <i className="devicon-materialui-plain colored technology"></i>
                <i className="devicon-sass-original colored technology"></i>
              </div>
            </section>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Cloud Services</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-amazonwebservices-plain-wordmark colored technology"></i>
                <i className="devicon-azure-plain-wordmark colored technology"></i>
                {/* <i className="devicon-digitalocean-plain-wordmark colored technology"></i> */}
                {/* <i className="devicon-googlecloud-plain-wordmark colored technology"></i> */}
                {/* <i className="devicon-kubernetes-plain colored technology"></i> */}
                <i className="devicon-heroku-original-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>


        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Database</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-mongodb-plain-wordmark colored technology"></i>
                <i className="devicon-oracle-original colored technology"></i>
                {/* <i className="devicon-sqlalchemy-plain-wordmark colored technology"></i> */}
                <i className="devicon-postgresql-plain-wordmark colored technology"></i>
                <i className="devicon-microsoftsqlserver-plain-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Physical Computing</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-embeddedc-plain-wordmark colored technology"></i>
                <i className="devicon-arduino-plain-wordmark colored technology"></i>
                <i className="devicon-raspberrypi-line-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Version Controllers</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-git-plain-wordmark colored technology"></i>
                <i className="devicon-github-original-wordmark colored technology"></i>
                <i className="devicon-gitlab-plain-wordmark colored technology"></i>
                {/* <i className="devicon-subversion-original colored technology"></i> */}
                <i className="devicon-tortoisegit-line colored technology"></i>
              </div>
            </section>
          </div>
        </div>

        <div className="row education">
          <div className="four columns header-col">
            <h1><span>Tools</span></h1>
          </div>

          <div className="eight columns main-col">
            <section id="four" className="skills">
              <div className="languages skills show-on-scroll">
                <i className="devicon-confluence-original-wordmark colored technology"></i>
                <i className="devicon-jira-plain-wordmark colored technology"></i>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
