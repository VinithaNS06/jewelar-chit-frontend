import { useRef, useState, useEffect } from "react";
import "./register.scss";
import config from "../../config.json";

import { useNavigate } from 'react-router-dom';

const Register =() => {
    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    
   
    const [errMsg, setErrMsg] = useState();
	const [event_id, setEventid] = useState("");
	const [name, setUsername] = useState("");
	const [phone_number, setPhonenumber] = useState("");
    const [email_address, setUseremail] = useState("");
	const [proof_type, setProoftype] = useState("");
	const [proof_no, setProofnumber] = useState("");
	const [location, setUserlocation] = useState("");
	
	const handleprooftype= async(event) =>{
        setProoftype(event.target.value);
    }
    
    const [password, setUerpassword] = useState("");
    const handleRegister= async() =>{
      
      let result = await fetch('http://139.59.22.213:4523/api/visitors',{
        method: 'post',
        body: JSON.stringify({event_id, name, phone_number, email_address, proof_type, proof_no, location}),
        headers:{
          'Content-Type': 'application/json' 
        }
      });

      result = await result.json();      
      if(result.status == 'true'){
		  
      } else {
          alert('Enter Correct values');
      }
    }    

    return(
        <>
        <main class="main-content  mt-0">
        <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div class="card card-plain">
                <div class="card-header pb-0 text-start text-center">
                  <span class="ms-1 font-weight-bold logintxtcl " >Jewellery Expo - 2023</span>
                </div>
                <div class="card-body">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <form role="form" >
					<div class="mb-3">
                      <input type="hidden" class="form-control form-control-lg" placeholder="eventid" aria-label="eventid" value={event_id}
                      onChange={(e) => { setEventid(e.target.value); }} />
                    </div>
					<div class="mb-3">
                      <input type="text" class="form-control form-control-lg" placeholder="Name" aria-label="Name" value={name}
                      onChange={(e) => { setUsername(e.target.value); }} required />
                    </div>
					<div class="mb-3">
                      <input type="tel" class="form-control form-control-lg" placeholder="Phone Number" aria-label="Phone Number" value={phone_number}
                      onChange={(e) => { setPhonenumber(e.target.value); }} required />
                    </div>
                    <div class="mb-3">
                      <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" value={email_address}
                      onChange={(e) => { setUseremail(e.target.value); }} required />
                    </div>					
					<div class="mb-3">
						<select class="form-control" value={proof_type} onChange={(event)=> handleprooftype(event)}>
							<option value="adhar">Adhar ID</option>   
							<option value="voterid">Voter ID</option>   
							<option value="driving">Driving</option>   
						</select>
                    </div>
                    <div class="mb-3">
                      <input type="tel" class="form-control form-control-lg" placeholder="Proof Number" aria-label="Proof Number" value={proof_no}
                      onChange={(e) => { setProofnumber(e.target.value); }} />
                    </div>
					<div class="mb-3">
                      <input type="text" class="form-control form-control-lg" placeholder="Location" aria-label="Location" value={location}
                      onChange={(e) => { setUserlocation(e.target.value); }} required />
                    </div>
                    
                    <div class="text-center">
                      <button type="button" onClick={handleRegister} class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-4 text-sm mx-auto">
                   
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
              <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden loginbgscreen" >
                <span class="mask bg-primary opacity-6"></span>
                
              </div>
            </div>
          </div>
          </div>
          </div>
        </main>
        </>
    )
}

export default Register;