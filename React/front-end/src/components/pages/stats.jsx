import React,{useEffect} from 'react';
import delhi from "../images/delhi.jpeg";
import $ from 'jquery';
import { Link } from "react-router-dom";
export default function Stats() {

    useEffect(()=>{
  $("#image").on('click',(function (event) {
                $(this).animate({
                    left:"23%",
                    height:"400px",
                    width:"40%"
                },"slow","linear",function(){
                    $(this).css('border','6px solid green')
                })}));

    });
  return (
    <div>

<h4 id="headingfive"></h4>
    <h1>College Statistics </h1>
    <div className="image">
    
        <img style={{position:'relative'}} id="image" src={delhi} alt="school"></img>
    </div>
    <h3 style={{color:'red',textAlign:'center',fontSize:'30px',marginTop:'4rem'}}>STATS TABLE</h3>
    
    <table>
        <tr>
        <th>Year</th>
        <th>
        <p style={{margin:'4px',fontSize:'1.2rem'}}>CS Department</p>
        <p style={{margin:'4px',fontSize:'1.2rem'}}>Admissions</p>
        </th>
        <th>
            <p style={{margin:'4px',fontSize:'1.2rem'}}>IT Department</p>
            <p style={{margin:'4px',fontSize:'1.2rem'}}>Admissions</p>
        </th>
        <th>
            <p style={{margin:'4px',fontSize:'1.2rem'}}>ECE Department</p>
            <p style={{margin:'4px',fontSize:'1.2rem'}}>Admissions</p>
        </th>
        <th>Graduates in  2year</th>
        <th>Research Papers</th>
        </tr>
        <tr>
        <th>2010-12</th>
        <th>200</th>
        <th>190</th>
        <th>180</th>
        <th>400</th>
        <th>40</th>
        </tr>
        <tr>
            <th>2012-14</th>
            <th>300</th>
            <th>220</th>
            <th>200</th>
            <th>500</th>
            <th>35</th>
        </tr>
        <tr>
            <th>2014-16</th>
            <th>250</th>
            <th>240</th>
            <th>160</th>
            <th>450</th>
            <th>45</th>
        </tr>
        <tr>
            <th>2016-18</th>
            <th>220</th>
            <th>260</th>
            <th>150</th>
            <th>470</th>
            <th>30</th>
        </tr>
        <tr>
            <th>2018-20</th>
            <th>230</th>
            <th>210</th>
            <th>120</th>
            <th>400</th>
            <th>34</th>
        </tr>
        <tr>
            <th>2020-22</th>
            <th>240</th>
            <th>200</th>
            <th>140</th>
            <th>420</th>
            <th>36</th>
        </tr>
        <tr>
            <th>2022-23</th>
            <th>120</th>
            <th>100</th>
            <th>80</th>
            <th>250</th>
            <th>50</th>
        </tr>
    </table>
    <h3 style={{color:'red',textAlign:'center',fontSize:'30px',marginTop:'4rem'}}>PLACEMEN STATS</h3>
    <table>
        <tr>
            <th>YEAR</th>
            <th>
                <p style={{margin:'4px',fontSize:'1.2rem'}}>NUMBER OF STUDENTS</p>
                <p style={{margin:'4px',fontSize:'1.2rem'}}>PLACED</p>

            </th>
            <th>
                <p style={{margin:'4px',fontSize:'1.2rem'}}>NUMBER OF COMPANIES</p>
                
            </th>
            <th>COMPANIES</th>
        </tr>
        <tr>
            <td>2018-19</td>
            <td>300</td>
            <td>100</td>
            <td>
                <p style={{fontSize:'1.1rem'}}>Google, Microsoft, Infosys, TCS etc.</p>
            </td>
        </tr>
        <tr>
            <td>2019-20</td>
            <td>280</td>
            <td>150</td>
            <td>
                <p  style={{fontSize:'1.1rem'}}>Google, Mahindra, Infosys, TCS, Reliance etc.</p>
            </td>
        </tr>
        <tr>
            <td>2020-21</td>
            <td>290</td>
            <td>90</td>
            <td>
                <p  style={{fontSize:'1.1rem'}}> Facebook, Microsoft, Infosys, Netflix etc.</p>
            </td>
        </tr>
        <tr>
            <td>2021-22</td>
            <td>320</td>
            <td>120</td>
            <td>
                <p  style={{fontSize:'1.1rem'}}>Google, Microsoft, Infosys, Amazon etc.</p>
            </td>
        </tr>
        <tr>
            <td>2022-23</td>
            <td>350</td>
            <td>130</td>
            <td>
                <p  style={{fontSize:'1.1rem'}}>Google, Microsoft, Infosys, TCS, Amazon, Deolite etc.</p>
            </td>
        </tr>

    </table>
   <Link to="/home">
<button style={{marginTop:'5%'}} className="button">Return</button>
        </Link>


      
    </div>
  )
}
