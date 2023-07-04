import React from 'react';
import { Link } from "react-router-dom";
export default function contact() {

    const handlesubmission=(e)=>{

        if(e){
            let num = 1;
             e.preventDefault();

                let name = document.getElementsByClassName("input")[0];
                let email = document.getElementsByClassName("input")[1];
                let mobile= document.getElementsByClassName("input")[2];
                let address= document.getElementsByClassName("input")[3];
                let domain = document.getElementsByClassName("input")[4];
                let table = document.getElementById("table");
                let row = table.insertRow(num);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                  let cell6 = row.insertCell(5);
                cell1.innerHTML = num;
                cell2.innerHTML = name.value;
                cell3.innerHTML = email.value;
                cell4.innerHTML = mobile.value;
                cell5.innerHTML = address.value;
                cell6.innerHTML = domain.value;
                num = num + 1;

        }
        else{
            console.log("error");
        }

    }


  return (
    <div>

<h4 id="headingfive"></h4>
    <h1>YOUR CONTACT</h1>
    
    <div class="contact">
        <form onSubmit={handlesubmission} id="contactform">
            <h1>Enter Your Details</h1>
            <p class="lab">
               <label class="label">Name: </label>
               <input style={{marginLeft:'10px'}} class="input" type="text" name="name" required placeholder="Enter Your Name"/>  
            </p>
            <p class="lab">
                <label class="label">E-mail:</label>
                <input style={{marginLeft:'4px'}} class="input" type="email" name="name" required placeholder="E-mail"/>
            </p>
            <p class="lab">
                <label class="label">Mobile: </label>
                <input style={{marginLeft:'0px'}} class="input" type="number" name="name" required placeholder="Mobile Number"/>
            </p>
            <p class="lab">
                <label class="label">Address: </label>
                <input style={{marginLeft:'10px'}} class="input" type="text" name="address" required placeholder="Enter Your address"/>
            </p>
            <p class="lab">
                <label class="label" >Domain:</label>
                <select class="input" style={{marginLeft:'0px'}}>
                    <option value="domain">Select Domain</option>
                    <option value="App Development">App Development</option>
                    <option value="Web Develpoment">Web Develpoment</option>
                    <option value="Machine Learning">Machine Learning</option>
                </select>
            </p>
            <p class="lab">
                <label class="label">Password: </label>
                <input style={{marginLeft:'0px'}} class="input" type="text" name="name" required placeholder="Password"/>
            </p>
            <button type="submit" class="login">Login </button>

           
           
        </form>
    </div><br/>
    <div>
        <table id="table">
            <thead>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Domain</th>
            </tr></thead>
        </table>
    </div>


<Link to="/home">
<button style={{marginTop:'5%'}} className="button">Return</button>
        </Link>
      
    </div>
  )
}
