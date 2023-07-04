import React,{useEffect} from 'react';
import comp from "../images/comp.jpg";
import elect from "../images/elect.jpg";
import infot from "../images/infot.png";
import $ from 'jquery';
import { Link } from "react-router-dom";
export default function Academic() {

    useEffect(()=>{
      $("h3").addClass("headingthree");
    $("h4").addClass("headingfour");

        $(".headingthree").on('mouseover',(function(event){
            $(this).fadeOut("slow");
             $(this).fadeIn("normal") ;
        }));

        $(".headingfour").on('mouseover',(function(){
            $("h4").css('color','purple');
            $("h4").css('position','relative');
            $("h4").animate({
                  fontSize:'1.8rem',
                  opacity:'0.8',
                  left:'38%'
                },"slow")}));
            });
            
  return (
    <div>

 <h1 style={{textAlign:'center', marginTop:'2rem'}}>DEPARTMENTS</h1>
<div style={{marginTop:'4rem'}}>
    <div className="libr" style={{width:'100%', position:'absolute' ,zIndex:'1'}}>
        <img src={comp} style={{opacity:'0.7'}} width="100%" height="150px" alt="library"></img>
    </div>
    <div style={{marginLeft:'40%',position:'absolute', zIndex:'2'}}>
        <h3 style={{color:'black',marginTop:'30px', fontSize:'40px'}}>Computer Science</h3>
    </div>
</div>
<div className="comp" >
    <p style={{fontSize:'25px', textAlign:'center', fontWeight:'bold'}}>ABOUT THE DEPARTMENT</p>
     <h4  style={{color:'red',paddingLeft:'1.5rem'}}>MESSAGE FROM HOD</h4>
     <p style={{paddingRight:'0.5rem',fontSize:'19px'}}>The Computer Science and Engineering Department was started in 2010 . Initially,
    only Bachelor of Technology Programme was offered with the intake 30 which presently has been increased to 60. Now,
    apart from B. Tech., the department also offers Master of Technology and Ph.D. programmes which cover a number of
    important areas of Computer Science and Engineering, e.g., Algorithms, Computer Networks, Data Warehousing and Data
    Mining, Software Engineering, Machine Learning, Image Processing, Web Technologies, Data Analytics, Complex Networks,
    Wireless Sensor Networks etc. We provide our students with a broad undergraduate and graduate curriculum based on the
    application and theoretical foundations of computer science. Our faculty and students participate in interdisciplinary
    research. The combination of these elements makes the department an especially exciting environment in which to study
    and work; an environment that serves us well in our goal of providing excellence in education, research, and discovery.
    The department envisions producing quality graduates, capable of leading the world in technical realm. The department is
    equipped with latest configuration and high computing system with hi-speed Internet facility, both wired as well as
    wi-fi. The Computer Science programs at this institute are dedicated to educate students and to advance research in
    computer and information technology. The department has all the facilities to carry out the related teaching and
    research work.</p>
    <h4 style={{color:'red',paddingLeft:'1.5rem'}}>FACULTY MEMBERS</h4>
    <table>
        <tr>
            <th>Name</th>
            <th>Phone</th>
        </tr>
        <tr>
            <td>
             <p className="rete"><strong>Name:Prof(Dr.)Ajay K Sharma</strong></p>
            <p className="table"> <strong>Designation:</strong>Professor</p>
            <p className="table"><strong>Area of Interest:</strong>
                Optical Communication Systems: Performance Analysis and Dispersion Compensation for Broadband Optical Systems and
                Networks (Linear and Non-linear), Radio-over-Fiber, Soliton Transmission links.</p>
            
            </td>
            <td>
               <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}} > +91 7865432345</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Prof(Dr.)Geeta Sikka</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor & head</p>
                <p className="table"><strong>Area of Interest:</strong>
                Data Mining, Data Warehousing, Databases, Data Science, Data Analytics, Big Data, Software Engineering, Security,Cloud
                Computing
                </p>
        
            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 7234567890</p>
            </td>
        
        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Prof(Dr.)Anurag Singh</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                Complex Networks, Growing Networks, Dynamics of information in complex networks, Graph Spectra, Attacks on Complex
                Networks, Community structurein Social Networking, Link Analysis, Recommender Systems.
                </p>   
        
            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 9876543456</p>
            </td>
        
        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Prof(Dr.)Chandra Prakash</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                Machine Learning, Motion Analysis, Reinforcement Learning, Deep Learning , Healthcare , Pattern Recognition
                </p>
        
            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 8765434534</p>
            </td>
        
        </tr>

    </table>
</div>
<div style={{marginTop:'4rem'}}>
    <div className="libr" style={{ width:'100%', position:'absolute', zIndex:'1'}}>
        <img src={elect} style={{opacity:'0.5'}} width="100%" height="120px" alt="library"></img>
    </div>
    <div style={{marginLeft:'30%',position:'absolute', zIndex:'2'}}>
        <h3 style={{color:'black',marginTop:'30px', fontSize:'40px'}}>Electronics & Communication</h3>
    </div>
</div>
<div className="comp">
    <p style={{fontSize:'25px', textAlign:'center', fontWeight:'bold'}}>ABOUT THE DEPARTMENT</p>
    <h4 style={{color:'red',paddingLeft:'1.5rem'}}>MESSAGE FROM HOD</h4>
    <p style={{paddingRight:'0.5rem',fontSize:'19px'}}>
    Welcome to the Department of Electronic and Communication Engineering (ECE).Department of ECE was established in 2010, immediately with the beginning of the Institute under the aegis of the
    Ministry of Education (MoE), Govt. of India. Currently, Department is offering one undergraduate program as B. Tech
    (ECE) and two postgraduate programs as M. Tech. ECE and M. Tech. ECE (VLSI). The department also offers Ph. D. and
    Post-Doctoral Fellowship (PDF) Programme in relevant areas of electronics and communication engineering. Department has
    good infrastructure including laboratories and research facilities in electronic devices and circuits, electronic
    measurement and instrumentation, microprocessor and microcontroller, microwave and antenna design, optical fiber
    communication and optical devices, multimedia, advanced communication and VLSI design. Faculty members of ECE department
    have received projects, grants, and fellowships from the Ministry of Electronics and Information Technology (MeitY), the
    Department of Science and Technology (DST)-SERB, and other funding agencies. The Department has active collaborations
    with academic & research institutes.
    
    
    The Department of ECE has a blend of young as well as experienced dynamic faculty members and is committed to providing
    quality education and research in the field. Faculty members of the department have excellent academic & research
    credentials and published many peer-reviewed journal articles/papers, Books, Book Chapters, etc. in the diversified
    field and have adequate experience in teaching and research. The department of ECE provides a creative learning
    environment to the students for excellence in technical education. Here the students learn to face the challenges
    related to emerging technologies in electronics and communication engineering. The department regularly conducts
    seminars, workshops, and FDP to keep pace with the new evolution and advanced technologies. The department of ECE
    promotes a self-learning attitude, entrepreneurial skills, and professional ethics. The department hopes to achieve the
    national goals and objectives of industrialization and self-reliance. As a result, it hopes to produce graduates with
    strong academic and practical backgrounds so that they can fit into the academia, research and industry.</p>
    <h4 style={{color:'red',paddingLeft:'1.5rem'}}>FACULTY MEMBERS</h4>
    <table>
        <tr>
            <th>Name</th>
            <th>Phone</th>
        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr. Rikmantra Basu</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                Semiconductor Devices; Electronic Circuits & Devices; Optoelectronics & Optical Communication, Nano photonics etc.
                </p>
            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 7865432345</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr.Manisha Bharti</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                Optical Communication Networks & Opto-electronics, Digital & Broadband Wireless Communication, RoF & FSO Communication,
                Electronic & Photonic Device
                </p>

            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 6789045566</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr. D.Vaithiyanathan</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                    Computer Architecture, VLSI Design and Embedded Systems.
                </p>    

            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 4567890987</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr.Sandeep Kumar</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                Digital Signal Processing, Bio-medical Signal Processing, Real-time Signal Processing.
                </p>

            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 9087651234</p>
            </td>

        </tr>

    </table>
</div>
<div style={{marginTop:'4rem'}}>
    <div className="libr" style={{width:'100%', position:'absolute', zIndex:'1'}}>
        <img src={infot} style={{opacity:'0.5'}} width="100%" height="120px" alt="library"></img>
    </div>
    <div style={{marginLeft:'35%',position:'absolute', zIndex:'2'}}>
        <h3 style={{color:'black',marginTop:'30px', fontSize:'40px'}}>Information Technology</h3>
    </div>
</div>
<div className="comp">
    <p style={{fontSize:'25px', textAlign:'center', fontWeight:'bold'}}>ABOUT THE DEPARTMENT</p>
    <h4 style={{color:'red',paddingLeft:'1.5rem'}}>MESSAGE FROM HOD</h4>
    <p style={{paddingRight:'0.5rem',fontSize:'19px'}}>
        Welcome to the Department of Electronic and Communication Engineering (ECE).Department of ECE was established in
        2010, immediately with the beginning of the Institute under the aegis of the
        Ministry of Education (MoE), Govt. of India. Currently, Department is offering one undergraduate program as B.
        Tech
        (ECE) and two postgraduate programs as M. Tech. ECE and M. Tech. ECE (VLSI). The department also offers Ph. D.
        and
        Post-Doctoral Fellowship (PDF) Programme in relevant areas of electronics and communication engineering.
        Department has
        good infrastructure including laboratories and research facilities in electronic devices and circuits,
        electronic
        measurement and instrumentation, microprocessor and microcontroller, microwave and antenna design, optical fiber
        communication and optical devices, multimedia, advanced communication and VLSI design. Faculty members of ECE
        department
        have received projects, grants, and fellowships from the Ministry of Electronics and Information Technology
        (MeitY), the
        Department of Science and Technology (DST)-SERB, and other funding agencies. The Department has active
        collaborations
        with academic & research institutes.


        The Department of ECE has a blend of young as well as experienced dynamic faculty members and is committed to
        providing
        quality education and research in the field. Faculty members of the department have excellent academic &
        research
        credentials and published many peer-reviewed journal articles/papers, Books, Book Chapters, etc. in the
        diversified
        field and have adequate experience in teaching and research. The department of ECE provides a creative learning
        environment to the students for excellence in technical education. Here the students learn to face the
        challenges
        related to emerging technologies in electronics and communication engineering. The department regularly conducts
        seminars, workshops, and FDP to keep pace with the new evolution and advanced technologies. The department of
        ECE
        promotes a self-learning attitude, entrepreneurial skills, and professional ethics. The department hopes to
        achieve the
        national goals and objectives of industrialization and self-reliance. As a result, it hopes to produce graduates
        with
        strong academic and practical backgrounds so that they can fit into the academia, research and industry.</p>
    <h4 style={{color:'red',paddingLeft:'1.5rem'}}>FACULTY MEMBERS</h4>
    <table>
        <tr>
            <th>Name</th>
            <th>Phone</th>
        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr. Rikmantra Basu</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                    Semiconductor Devices; Electronic Circuits & Devices; Optoelectronics & Optical Communication, Nano
                    photonics etc.
                </p>
            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 5678903423</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr.Manisha Bharti</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                    Optical Communication Networks & Opto-electronics, Digital & Broadband Wireless Communication, RoF &
                    FSO Communication,
                    Electronic & Photonic Device
                </p>

            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 9087231456</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr. D.Vaithiyanathan</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                    Computer Architecture, VLSI Design and Embedded Systems.
                </p>

            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 9812345678</p>
            </td>

        </tr>
        <tr>
            <td>
                <p className="rete"><strong>Name:Dr.Sandeep Kumar</strong></p>
                <p className="table"> <strong>Designation:</strong>Professor</p>
                <p className="table"><strong>Area of Interest:</strong>
                    Digital Signal Processing, Bio-medical Signal Processing, Real-time Signal Processing.
                </p>

            </td>
            <td>
                <p style={{margin:'0px', textAlign:'center',fontSize:'0.7rem'}}> +91 7654321234</p>
            </td>

        </tr>

    </table>
</div>
<Link to="/home">
<button style={{marginTop:'5%'}} className="button">Return</button>
        </Link>
      
    </div>
  )
}
