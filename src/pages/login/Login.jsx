import { useRef, useState, useEffect } from "react";
import "./login.scss";
import config from "../../config.json";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/dashboard");
    }
  }, []);

  const [errMsg, setErrMsg] = useState();
  const [email, setUeremail] = useState("");
  const [password, setUerpassword] = useState("");
  const handleLogin = async () => {
    let result = await fetch(config.apibaseurl + "/api/user/weblogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result.status == "true") {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/order");
    } else {
      alert("Enter Correct values");
    }
  };

  return (
    <>
      <main class="main-content  mt-0">
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div class="card card-plain">
                  <div class="card-header pb-0 text-start text-center">
                    <img
                      src="../assets/img/jewelar.png"
                      class="navbar-brand-img h-500 mb-3"
                      alt="main_logo"
                      width="25%"
                    />
                    <br />
                    <span class="ms-1 font-weight-bold logintxtcl ">
                      M8 Jewel<span class="artextcol">AR</span>
                    </span>
                  </div>
                  <div class="card-body">
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                    <form role="form">
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control form-control-lg"
                          placeholder="Email"
                          aria-label="Email"
                          value={email}
                          onChange={(e) => {
                            setUeremail(e.target.value);
                          }}
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          placeholder="Password"
                          aria-label="Password"
                          value={password}
                          onChange={(e) => {
                            setUerpassword(e.target.value);
                          }}
                        />
                      </div>

                      <div class="text-center">
                        <button
                          type="button"
                          onClick={handleLogin}
                          class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    <p class="mb-4 text-sm mx-auto"></p>
                  </div>
                </div>
              </div>
              <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden loginbgscreen">
                  <span class="mask bg-primary opacity-6"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
