import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Headerbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    if (auth == null) {
      navigate("/");
    }
  }, []);
  return (
    <nav
      class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
      id="navbarBlur"
      data-scroll="false"
    >
      <div class="container-fluid py-1 px-3">
        <div
          class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          <div class="ms-md-auto pe-md-3 d-flex align-items-center"></div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a
                href="javascript:void(0);"
                onClick={logout}
                class="nav-link text-white font-weight-bold px-0"
              >
                <i class="fa fa-sign-out me-sm-1"></i>
                <span class="d-sm-inline d-none">Logout</span>
              </a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a
                href="javascript:void(0);"
                class="nav-link text-white font-weight-bold px-0"
              >
                <i class="fa fa-bell me-sm-1"></i>

                <span class="d-sm-inline d-none">Notification</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headerbar;
