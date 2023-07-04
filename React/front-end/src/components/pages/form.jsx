import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
export default function Form() {

    const handlesubmit=(e)=>{
        if(e){

      //const ele = document.getElementsByClassName("formone")[0];
        let num = 1;
        //if(ele){
        //ele.addEventListener("submit", () => {
            alert("Your credentials are submitted");
            e.preventDefault();

            let name= document.getElementsByClassName("input")[0];
            let rank = document.getElementsByClassName("input")[1];
            let email = document.getElementsByClassName("input")[2];
             let degree = document.getElementsByClassName("input")[5];
            let branch = document.getElementsByClassName("input")[6];
            let domain = document.getElementsByClassName("input")[7];
            let table=document.getElementById("table");
            let row = table.insertRow(num);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            cell1.innerHTML = num;
            cell2.innerHTML = name.value;
            cell3.innerHTML = rank.value;
            cell4.innerHTML = email.value;
            cell5.innerHTML = degree.value;
            cell6.innerHTML = branch.value;
            cell7.innerHTML = domain.value;
            num = num + 1;
            console.log("submit");

        }
    
    else{
        console.log("error");
    }}
  
  return (
    <div>

        <h4 id="headingfive"></h4>
    <h1>YOUR ADMISSION FORM</h1>

    <div className="contact">
        <form onSubmit={handlesubmit} className="formone">
            <h1>Enter Your Details</h1>
            <p className="lab">
                <label className="label">Name: </label>
                <input style={{marginLeft:'10px'}} className="input" type="text" name="name" required
                    placeholder="Enter Your Name" />
            </p>
            <p className="lab">
                <label className="label">Rank: </label>
                <input style={{marginLeft:'10px'}} className="input" type="number" name="name" required placeholder="Enter Your Rank"/>
            </p>
            <p className="lab">
                <label className="label">E-mail:</label>
                <input style={{marginLeft:'4px'}} className="input" type="email" name="name" required placeholder="E-mail"/>
            </p>
            <p className="lab">
                <label className="label">Age:</label>
                <input style={{marginLeft:'4px'}} className="input" type="number" name="name" required placeholder="Age"/>
            </p>
            <p className="lab">
                <label className="label">Mobile: </label>
                <input style={{marginLeft:'0px'}} className="input" type="text" name="name" required
                    placeholder="Mobile Number"/>
            </p>
             <p className="lab">
                <label className="label">Degree:</label>
                <select className="input"  style={{marginLeft:'0px'}}>
                    <option value="domain">Select Degree</option>
                    <option value="M.E">M.E</option>
                    <option value="B.E">B.E</option>
                </select>
            </p>
            <p className="lab">
                <label className="label">Branch:</label>
                <select className="input"  style={{marginLeft:'0px'}}>
                    <option value="domain">Select Branch</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Teachnology">Information Technology</option>
                    <option value="Electronics & Communication">Electronics & Communication</option>
                </select>
            </p>
            <p className="lab">
                <label className="label">Domain:</label>
                <select className="input"  style={{marginLeft:'0px'}}>
                    <option value="domain">Select Domain</option>
                    <option value="App  Development">App Development</option>
                    <option value="Web Development">Web Develpoment</option>
                    <option value="Machine Learning">Machine Learning</option>
                </select>
            </p>
           
            <button type="submit" className="login">Submit</button>
           </form>
    </div><br/>
    <div>
        <table id="table">
            <thead>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Rank</th>
                <th>E-mail</th>
                <th>Degree</th>
                <th>Branch</th>
                <th>Domain</th>

            </tr></thead>
        </table></div>


   <Link to="/home">
<button style={{marginTop:'5%'}} className="button">Return</button>
        </Link>
      
    </div>
  )
}
