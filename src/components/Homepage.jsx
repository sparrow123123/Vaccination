import React from 'react'
import '.././App.css'
import Education from './Education'
import project from './project'
import Project from './project'
import Achivement from './Achivement'



function Homepage() {
  return (
  <div>
      <div className='slide1'>
        <nav>
            <div id='navlogo'>
                <h1>DHANUSH</h1> 
                <br />
                
               <img src="icons8-git-32.png" alt="" />
               <img src="icons8-linkedin-30.png" alt="" />
               <img src="icons8-instagram-30.png" alt="" />

            
            </div>
            <div id='navmenu'>
                <ul><button><h3>Profile</h3></button></ul>
                <ul><button><h3>Skills</h3></button></ul>
                <ul><button><h3>Project</h3></button></ul>
                <ul><button><h3>Education</h3></button></ul>
                <ul><button><h3>Contact</h3></button></ul>
                <ul> <button style={{width:"140px"}}><h3><a href="Portfolio\Dhanush-A-FlowCV-Resume-20240819.pdf" download="Dhanush-A-FlowCV-Resume-20240819.pdf">CV-Download</a></h3></button></ul>
            </div>
        </nav>
        <div className='slide1-content'>
            <div className="slide1left">
                <h1>Hello There,Welcome to my homepage</h1>
                <h2><p>I am Dhanush,An aspiring fullstack developer and Application developer.I excel at designing websites and Application and I am proficient in various programming languages and framework</p></h2>
               
              

            </div>
            <div className="slide1right">

               
                    {/* <img id='photo' src="WhatsApp_Image_2024-07-23_at_08.27.08_49d0d33c-removebg-preview.png" alt="kjk" /> */}

               
            </div>


        </div>
        <div className='progress'>
            <button>LeetCode</button>
            <button>SkillRack</button>
            <button>Project</button>
           

        </div>







      </div>
    <div className='slide2'>
    <Education></Education>
        {/* <div className="Project">
            <h1>PROJECT</h1>
            <div className="Projects">
                <div className="proj"></div>
                <div className="proj"></div>
                <div className="proj"></div>
                
                
            </div>
            


        </div> */}


    </div>
    <div className='slide3'>
        <Project></Project>
       
       

    </div>
    <div className='slide4'>
        
        
    <Achivement></Achivement>

   </div>

   
  </div>
  )
}

export default Homepage