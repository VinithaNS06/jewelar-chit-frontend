import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import PrivateComponent from "./components/PrivateComponents"
import JewelArDashBoard from './components/jewelar/jewelardashboard/JewelArDashBoard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Category from './components/jewelar/category/Category';
import AddCategory from './components/jewelar/category/addCategory';
import Products from './components/jewelar/products/Products';
import AddProducts from './components/jewelar/products/addProducts';
import Productedit from './components/jewelar/products/editProducts';
import Order from './components/jewelar/orders/Order';
import Appointment from './components/jewelar/appointment/Appointment';
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
            <Route path="jewelar" element={<JewelArDashBoard/>}/>
            <Route path="category" element={<Category />} />
            <Route path="category/add" element={<AddCategory />} />
            <Route path="products" element={<Products/>}/>
            <Route path="products/add" element={<AddProducts/>}/>
            <Route path="products/:id" element={<Productedit/>}/>
            <Route path="orders" element={<Order />} />
            <Route path="appointment" element={<Appointment/>}/>
             {/* <Route path="category/edit" element={<EditCategory />} /> */}
            {/*<Route path="customer" element={<Customer />} />
            <Route path="store" element={<Store />} />
            <Route path="appointment" element={<Appointment/>}/>
            <Route path="appointment/view/:viewid" element={<ViewAppointment/>}/>
            <Route path="staff" element={<Staff/>}/>
            <Route path="staff/add" element={<AddStaff/>}/>
            <Route path="staff/edit" element={<StaffEdit/>}/>
            <Route path="staff/edit/:editid" element={<StaffEdit/>}/>  */}
                </Route>             
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
