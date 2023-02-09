import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import PrivateComponent from "./components/PrivateComponents"
// import JewelArDashBoard from './components/jewelar/jewelardashboard/JewelArDashBoard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Category from './components/jewelar/category/Category';
import AddCategory from './components/jewelar/category/addCategory';
import Products from './components/jewelar/products/Products';
import AddProducts from './components/jewelar/products/addProducts';
import Productedit from './components/jewelar/products/editProducts';
import Order from './components/jewelar/orders/Order';
import Appointment from './components/jewelar/appointment/Appointment';
import Scheme from './components/goldchit/scheme/Scheme';
import SchemeAdd from './components/goldchit/scheme/addScheme';
import SchemeEdit from './components/goldchit/scheme/editScheme';
import UserScheme from './components/goldchit/userScheme/UserScheme';
import UserSchemeAdd from './components/goldchit/userScheme/adduserScheme';
import Rate from './components/goldchit/rate/Rate';
import RateAdd from './components/goldchit/rate/addrate';
import RateEdit from './components/goldchit/rate/editrate';
import Staff from './components/goldchit/staff/Staff';
import AddStaff from './components/goldchit/staff/addstaff';
import StaffEdit from './components/goldchit/staff/editstaff';
import ViewAppointment from './components/jewelar/appointment/View';
import Customer from './components/jewelar/customer/Customer';
import Store from './components/jewelar/store/Store';
import AddCustomer from './components/jewelar/customer/addCustomer';
import CustomerEdit from './components/jewelar/customer/editCustomer';
import ViewCustomer from './components/jewelar/customer/viewCustomer';
import AddOrder from './components/jewelar/orders/addOrder';
import OrderEdit from './components/jewelar/orders/editOrder';
import ViewOrder from './components/jewelar/orders/viewOrder';
import UserSchemeEdit from './components/goldchit/userScheme/editUserScheme';
import ViewScheme from './components/goldchit/scheme/viewScheme';
import AddAppointment from './components/jewelar/appointment/addAppointment';
import ViewUserScheme from './components/goldchit/userScheme/viewUserScheme';
import PayUserScheme from './components/goldchit/userScheme/payUserScheme';
// import Sidebar from './components/jewelar/jewelAR/Sidebar';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          	  <Route path="register" element={<Register />} />
          <Route index element={<Login />} />          
          <Route element={<PrivateComponent />}  > 
          {/* <Route path="jewelar" element={<Sidebar/>} />           */}
            <Route path="dashboard" element={<Home />} />
            <Route path="/" element={<Home/>}/>
            {/* <Route path="jewelar" element={<JewelArDashBoard/>}/> */}
            <Route path="category" element={<Category />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="products" element={<Products/>}/>
            <Route path="products/add" element={<AddProducts/>}/>
            <Route path="products/:id" element={<Productedit/>}/>
            <Route path="orders" element={<Order />} />
            <Route path="orders/add" element={<AddOrder/>}/>
            <Route path="orders/edit" element={<OrderEdit/>}/>
            <Route path="orders/edit/:editid" element={<OrderEdit/>}/>
            <Route path="orders/view/:viewid" element={<ViewOrder/>}/>
            <Route path="appointment" element={<Appointment/>}/>
            <Route path="appointment/add"element={<AddAppointment/>}/>
            <Route path="scheme" element={<Scheme/>}/>
            <Route path="scheme/add" element={<SchemeAdd/>}/>
            <Route path="scheme/edit" element={<SchemeEdit/>}/>
            <Route path="scheme/edit/:id" element={<SchemeEdit/>}/>
            <Route path="scheme/view/:viewid" element={<ViewScheme/>}/>
            <Route path="userscheme" element={<UserScheme/>}/>
            {/* <Route path="userscheme/add" element={<UserSchemeAdd/>}/> */}
            <Route path="userscheme/edit" element={<UserSchemeEdit/>}/>
            <Route path="userscheme/edit/:id" element={<UserSchemeEdit/>}/>
            <Route path="userscheme/view/:viewid" element={<ViewUserScheme/>}/>
            <Route path="userscheme/pay/:id" element={<PayUserScheme/>}/>
            <Route path="rate" element={<Rate/>}/>
            <Route path="rate/add" element={<RateAdd/>}/>
            <Route path="rate/edit" element={<RateEdit/>}/>
            <Route path="rate/edit/:id" element={<RateEdit/>}/>
            <Route path="staff" element={<Staff/>}/>
            <Route path="staff/add" element={<AddStaff/>}/>
            <Route path="staff/edit" element={<StaffEdit/>}/>
            <Route path="staff/edit/:id" element={<StaffEdit/>}/> 
            <Route path="appointment" element={<Appointment/>}/>
            <Route path="appointment/view/:viewid" element={<ViewAppointment/>}/>
            <Route path="customer" element={<Customer />} />
            <Route path="customer/add" element={<AddCustomer/>}/>
            <Route path="customer/edit" element={<CustomerEdit/>}/>
            <Route path="customer/edit/:editid" element={<CustomerEdit/>}/>
            <Route path="customer/view/:viewid" element={<ViewCustomer/>}/>
             <Route path="store" element={<Store />} />
             
                </Route>             
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
