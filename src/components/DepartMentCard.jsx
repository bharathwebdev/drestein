import React from 'react'
import '../components/DepartmentCard.css'
function DepartMentCard() {
  return (
    <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src="laptop.png"/>
      </div>
      <div class="contentBx">
        <h2>Information <br/>Technology</h2>
        <div class="lorem">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h3>
        </div>
        <a href="#">Events</a>
      </div>
    </div>
  </div>
  )
}

export default DepartMentCard