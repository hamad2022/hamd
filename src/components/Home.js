import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div style={{marginTop: "200px"}}>
       <h1 style={{color:"Blue"}}> Welcome To My MERN Stack Based Data Center!</h1>
       <h4 style={{marginTop:"30px", color:"gray"}}>This app is created for tracking users data. The app is made from following stacks:</h4>
       <div style={{marginTop:"30px", color:"gray"}}>
        <h6>Frontend: React + Bootstrap</h6>
        <h6>Backend: Node.js + Express.js + MongoDB</h6>
        <h6>APIs: REST APIs</h6>
       </div>
      </div>
    )
  }
}
export default Home; 