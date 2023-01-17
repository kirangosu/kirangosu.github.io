import React, { Component } from 'react';
import resume from '../assets/resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Alex Bangau Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
               I am a dad to an 9 yo, a husband to a beautiful lady. I am also a STEM ambassador.
               <br/><br/>
               I am an active volunteer for the Coder Dojo in my local community in Essex. I also take part in the technical meetups in Essex.
               <br /><br />
               I am passionate about physical computing, conceptualizing and building real time applications during my free time.
               <br /><br />
               I also play cricket for Great Baddow Cricket Club.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     {/* <span>{name}</span><br />
                     <span>{street}<br />
                        {city} {state}, {zip}
                     </span><br />
                     <span>{phone}</span><br /> */}
                     <span><a href={`mailto:${email}?subject=Hi%20there`}>{email}</a></span>
                  </p>
               </div>
               {/* <div className="columns download">
                  <p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
