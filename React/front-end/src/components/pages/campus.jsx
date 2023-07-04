import React from 'react';
import lib from "../images/lib.jpg";
import libr from "../images/LIBRARY.jpg";
import sport from "../images/sports.jpg";
import spor from "../images/spor.jpg";
import cant1 from "../images/cant1.jpeg";
import cant2 from "../images/cant2.jpg";
import cant3 from "../images/cant3.jpg";
import { Link } from "react-router-dom";

export default function campus(props) {

     const buttonclick=()=>{

    if(document.getElementsByClassName("paragraph")[0].style.display!="none")
    {
        console.log('button'); 
        document.getElementsByClassName("paragraph")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("paragraph")[0].style.display ="block";
    }}
     const buttonclich=()=>{

            if (document.getElementsByClassName("paragraph")[1].style.display != "none") {
                console.log('button');
                document.getElementsByClassName("paragraph")[1].style.display = "none";
            }
            else {
                document.getElementsByClassName("paragraph")[1].style.display = "block";
            }
    }
let el=document.getElementsByClassName("button")[0];
let el1=document.getElementsByClassName("button")[1];
let el2= document.getElementsByClassName("paragraph")[0];
let el3= document.getElementsByClassName("paragraph")[1];
if(el)
{
    el.style = "margin-left:42%;margin-top:4%;margin-bottom:3%";
}
else{
    console.log("error");
}
if(el1)
{
    el1.style = "margin-left:42%;margin-top:4%;margin-bottom:3%";
}
else{
    console.log("error");
}
if(el2)
{    el2.style="margin-bottom:7%";

}
else{
    console.log("error");
}
if(el3)
{    el3.style = "margin-bottom:7%";

}
else{
    console.log("error");
}
    


  return (
    <div>
          <h4 id="headingfive"></h4>
    <div id="campus">
        <h1>Campus</h1>
        <p className="para">The college has a beautifully landscaped and fully residential campus, sprawling 145 acres of land.
            A wide range of facilities
            including faculty & staff residences, hostels, cooperative mess, sports complex, banks, post office, shopping
            complex is
            available.
    
            A prominent feature of campus is the vast expanse of flora & fauna that envelopes its entirety. The lush green
            campus welcomes a diverse community of students, faculty, staff & visitors in its midst.</p>
        <div className="lib">
            <div className="libr" style={{width:'100%', position:'absolute', zIndex:'1'}} >
                <img src={lib} width="100%" height="160px" alt="library"></img>
            </div>
            <div style={{marginLeft:'40%',position:'absolute', zIndex:'2'}}>
                <h3 style={{color:'white' , fontSize:'40px',marginTop:'40px' }}>Central Library</h3>
            </div>
        </div>
    </div>
    <div className="librar">
        <p style={{fontSize:'25px', textAlign:'center' , fontWeight:'bold' }}>About Library</p>
        <div className="camp">
        <img src={libr} className="libj" height="300px" alt="library"></img>
        <button className="button" style={{marginLeft:'43%'}} onClick={buttonclick}>SHOW/HIDE</button>
        </div>
        <div className="paragraph">
        <p  style={{fontSize:'17px'}}>                      
            The Central Library acts as the primary information resource centre and the repository of various printed as
            well as
            electronic resources that supports teaching, research and all the academic activities of the Institute. The
            library was
            established in the year 2012 (June 2012) in Dwarka to facilitate the access to information resources to faculty
            and
            students of the Institute. All the faculty members, students and staff of the
            Institute are entitled to access all the library facilities and services.The Central Library have a rich
            collection of
            Books in the area of Science & Technology including Computer Science, Electrical & Electronics Engineering,
            Mechanical
            Engineering, Mathematics, Physics, Chemistry, Economics, and Management etc. Also, apart from this, the Library
            has
            reference collection including dictionaries, handbooks, and research related books. The Library also holds a
            good
            collection for general reading purpose including books on sports & yoga, novels, fictions, books for competitive
            exams
            like GATE/IES, magazines on general awareness, current affairs, and specialized subject magazines like Auto Car,
            Digit,
            and Electronics for you etc. The Central Library follows Open Access System along with Self Check-in/Check-out
            facility. The separate sections are arranged for the books under Text Books, Book Bank and Reference category
            for easy
            access to the users.</p>
        <p style={{fontSize:'17px'}}>
            The Central Library have a rich collection of books on science & technology including Computer Science,
            Electrical &
            Electronics Engineering, Mechanical Engineering, Mathematics, Physics, Chemistry, Economics, and Management etc.
            Also,
            apart from this, the Library has reference collection including dictionaries, handbooks, and research related
            books. The
            Library also holds a good collection for general reading purpose including books on sports & yoga, novels,
            fictions,
            books for competitive exams like GATE/IES, magazines on general awareness, current affairs, and specialised
            subject
            magazines like AutoCar, Digit, and Electronics for you etc.
        </p>
    </div>
    
    </div>
    <div className="sport">
        <div className="libr" style={{width:'96%', position:'absolute', zIndex:'1'}}>
            <img src={sport} width="100%" height="160px" alt="library"></img>
            
        </div>
        <div style={{marginLeft:'40%', position:'absolute',  zIndex:'2'}}>
            <h3 style={{color:'white' , fontSize:'40px',marginTop:'40px'}}>Sports Section</h3>
        </div>
    </div>
    <div className="sports" style={{marginLeft:'1rem'}}>
        <p style={{fontSize:'25px',  textAlign:'center',  fontWeight:'bold'}}>About Sports Section</p>
        <div className="camp">
        <img src={spor} className="libj" height="300px" alt="library"></img>
        <button className="button" style={{marginLeft:'43%'}} onClick={buttonclich}>SHOW/HIDE</button>
        </div>
        <div className="paragraph">
        <p style={{fontSize:'17px'}}>
            Games and sports are an integral part in the life of a student. A student should study hard to be successful in
            competitive examinations. But, he should also play games and sports to enjoy the health and vigor of life. A
            healthy
            nation is always a wealthy nation. Therefore, it is necessary to put emphasis on sports. One can think of a
            healthy mind
            only in a healthy body. Both physical and mental well-being are the prerequisites of great achievements in life.
            Studies
            have shown that exercise increases blood flow to the brain and helps the body build more connections between
            nerves,
            leading to increased concentration, enhanced memory, stimulated creativity, and better-developed problem solving
            skills.
            In short, playing sports helps your brain grow and makes it work better.
        </p>
        <p style={{fontSize:'17px', textAlign:'center', fontWeight:'bold'}}>How sports help us ?</p>
        <p style={{fontSize:'17px'}}>
            Playing sports helps you stay in shape, teaches you how to organize your time, boosts friendships, and builds
            relationships with your peers and adults. Through athletics, you gain skills that can best be acquired on a
            court,
            track, or fieldWhat are the benefits of sport? Physical exercise is good for mind, body and spirit. Furthermore,
            team
            sports are good for learning accountability, dedication, and leadership, among many other traits. Putting it all
            together by playing a sport is a winning combination.What are the health benefits of playing sports? Some of the
            health
            benefits of playing sports include the efficient functioning of the heart, controlled diabetes, lower
            cholesterol
            levels, improved blood circulation, lowerhypertension, and lower stress levels. It helps in weight management,
            the
            toning of muscles and the strengthening of bones.What is the importance of recreational activity?
    
            Recreation is an important process that helps refresh and reinvigorate both the body and mind. Recreational
            activities
            can range from physical actions such as team sports to playing in the park or taking a hike in nature. They can
            also
            refer to exercise such as visiting the gym or running on a trail.How exercise can improve your mood?
        </p>
    </div>
    </div>
    <div className="medic" style={{height:'40rem'}}>
        <p style={{fontSize:'25px', textAlign:'center', fontWeight:'bold'}}>Medical Facility</p>
        <p style={{fontSize:'15px', textAlign:'center', fontWeight:'bold', marginTop:'30px'}}>LIST OF HOSPITALS ENPANELLED </p>
        
            <ul >
                <li>Artemis Hospital</li>
                <li>Dr. Lal Path Labs</li>
                <li>Fortis Hopital</li>
                <li>Must & More Healthcare Pvt. Ltd. Rohini</li>
                <li>Shri Aggarsain Hospital Rohini</li>
                <li>Venkateshwar Hopital, Dwarka</li>
            </ul>
            <p style={{fontSize:'18px'}}>Physicians with visiting days:</p>
            <ol>
                <li>Dr.Snehil Rai(Monday and Friday) Time: 3:00pm to 5:00pm</li>
                <li>Dr.Snehil Rai(Tuesday and Thursday) Time: 3:00pm to 5:00pm</li>
            </ol>
    </div>
    <div className="mesh">
        <p style={{fontSize:'25px', textAlign:'center', fontWeight:'bold'}}>Mesh & Canteen</p>
        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'4rem',marginBottom:'0px'}}>OUR MESH/CANTEEN IS EQUIPPED WITH FOLLOWING FACILITIES.</p>
        <ul>
            <li>Latest Kitchen Appliances in Canteen and</li>
            <li>Facility of Water Coolers with RO</li>
            <li>Curtain provision and stainless steel furniture including insect killer
</li>
        </ul>
        <div className="cant">
            <img src={cant1} alt="cant1" ></img>
            <img src={cant2} alt="cant1"></img>
            <img src={cant3} alt="cant1"></img>
        </div>

    </div>
    
<Link to="/home">
<button style={{marginTop:'5%'}} className="button">Return</button>
        </Link>
      
    </div>
  )
}
