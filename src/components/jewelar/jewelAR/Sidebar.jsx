import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside
      class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
      id="sidenav-main"
    >
      {/* <div class="sidenav-header">
        <i
          class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>

        <Link class="navbar-brand m-0" to="/">
          <img
            src="../assets/img/jewelar.png"
            class="navbar-brand-img h-100"
            alt="main_logo"
          />{" "}
          &nbsp;&nbsp;&nbsp;
          <span class="ms-1 font-weight-bold">
            M8 Jewel <span class="artextcol">AR</span>
          </span>
        </Link>
      </div> */}
      <hr class="horizontal dark mt-0"></hr>
      <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link m-0 active" to="/jewelar">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="fa fa-tachometer text-warning text-sm opacity-10"></i>
              </div>
              <div>
                <span class="nav-link-text ms-1">JewelAR</span>
              </div>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link m-0" to="/jewelar">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-collection text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Jewel AR</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link m-0" to="/products">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="fa fa-product-hunt text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Product</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link m-0" to="/order">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-cart text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Orders</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link m-0" to="/customer">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-single-02 text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Customer</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link m-0" to="/store">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="fa fa-store-alt text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Store</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link m-0" to="/appointment">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="fa fa-clock-o text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Appointment</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link m-0" to="/staff">
              <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-single-02 text-warning text-sm opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Staff</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
