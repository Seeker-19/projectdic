import React ,{useEffect} from 'react';
import School from '../images/schoolimg.png';
import insta from '../images/insta.jpeg';
import face from '../images/face.png';
import twitt from '../images/twittter.png';
import { Link } from "react-router-dom";
import $ from 'jquery';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Home(props) {

     const location=useLocation()

   useEffect(()=>{
$(".imagecollege").on('click',function () {
            var a = $(".imagecollege");
            a.animate({ height: '66%', opacity: '0.4' }, "slow");
            a.animate({ width: '70%', opacity: '0.8' }, "slow");
            a.animate({ height: '52%', opacity: '0.4' }, "slow");
            a.animate({ width: '58%', opacity: '0.8' }, "slow");
            a.animate({ left:'10%', opacity: '0.8' }, "slow");
        });

      
        
        $(".contacct").on('click',(function(){
            $(".contacct").css('background-color','aqua');
        }));
        $(".iconimage").on('mouseover',(function(){
            $(".iconimage").css('width','45%');
            $(".iconimage").css('height', '45%');
             $(".iconimage").css('margin-left', '25%');
        }));

      },[]);
      

  
 return (
    <div>

        

     
         
<div className="image">

    <img style={{position:'relative'}} className="imagecollege" src={School}  alt="school" ></img>
    <br/>
    <br/>
</div>

<div id="about">
    <h1 className="about">About</h1>
    
    <p className="para">The School of Excellence in Engineering, Delhi is a premier public technical university located in Delhi,
    India. It has been declared as an Institute of National Importance by an act of Parliament of India.
It is an Autonomous Institution under Govt. of NCT of Delhi and affiliated to University of Delhi. It  is a seat of higher technical education in India. It was established in the year 1983 as Delhi
Institute of Technology with the objective of meeting the growing demands of manpower in the emerging fields of
engineering and technology with a close social and industrial interface. Over a period of time, the institute has carved
a niche for itself, both nationally and internationally, for excellence in technical education and research.

The institute has grown leaps and bounds since its inception, both in size and in the scope of its activities. The
overall academic environment in the institution is highly conducive for achieving excellence in education and research.
It has been consistently ranked as one of the top engineering colleges in India and has featured prominently in various
national level surveys conducted by reputed professional and trade magazines.
    </p>

</div>
<br/>
<br/><br/><br/><br/>
<div className="last">
    <div >
      <h1 className="anime" style={{fontSize:'60px',textAlign:'left',color:'red', marginLeft:'2rem',
      marginTop:'6rem'}}>B.E. Admissions</h1>
      <Link to="/form">
      <button  className="login" >Register Now</button>
      </Link>
    </div>
    <div className="lastdiv">
    <h1 className="anime" style={{fontSize:'60px', textAlign:'left', color:'red', marginLeft:'4rem',
          marginTop:'6rem'}}>M.E. Admissions</h1>
          <Link to="/form">
       <button  className="login">Register Now</button>
           </Link>
    </div>
  </div>     

  <div className="contacct"  style={{backgroundColor:'aquamarine', marginTop:'10%'}}>
<h1 style={{color:'black'}}>Contact US</h1>
<div  style={{marginTop:'2rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{width:'100px',height:'100px',marginRight:'10%'}}>
      <img className="iconimage" style={{height:'60%', width:'80%'}} src={face} alt="facebook"></img>
      <h3 style={{marginTop:'10%', marginLeft:'15%'}}>
        <a href="https://www.facebook.com/uietpuofficial/">Facebook</a></h3>
    </div>
    <div style={{width:'100px', height:'100px', marginRight:'10%'}}>
        <img className="iconimage" style={{height:'60%' , width:'55%'}} src={insta} alt="facebook"></img>
        <h3 style={{marginTop:'10%', marginLeft:'1%'}}>
            <a href="https://www.instagram.com/uietpu/?hl=en">Instagram</a></h3>

    </div>
    <div style={{width:'100px', height:'100px'}}>
        <img className="iconimage" style={{height:'65%', width:'65%'}}  src={twitt} alt="facebook"></img>
        <h3 style={{marginTop:'10%' ,marginLeft:'15%'}}>
            <a href="https://twitter.com/uietchd?lang=en">Twitter</a></h3>

    </div>

</div>
<h1 style={{marginTop:'2.5rem', color:'black'}}>Thankyou for visiting !!!</h1>
</div>

      
    </div>

    
  )
};
