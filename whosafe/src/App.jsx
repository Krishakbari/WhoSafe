import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import CustomizationDesign from './Pages/CustomizationDesign';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import Header from './Components/Header';
import Footer from './Components/Footer';
import SingleBlog from './Pages/SingleBlog';
import MyOrders from './Pages/MyOrder';
import AdminOrders from './Pages/AdminOrders';
import AdminRoute from './Components/AdminRoute';
import UpdateProfile from './Pages/UpdateProfile';
import ScrollToTop from './Components/ScrollaToTop';
import ForgotPassword from './Pages/ForgotPassword';
import VerifyOtp from './Pages/VarifyOtp';
import ResetPassword from './Pages/ResetPassword';
import { Toaster } from 'react-hot-toast';
import AdminCreateBlog from './Pages/AdminCreateBlog';
import AdminUpdateBlog from './Pages/AdminUpdateBlog';
import ReturnPolicy from './Pages/ReturnPolicy';
import Shipping from './Pages/Shipping';
import PrivacyPolicy from './Pages/Pricvacy_Policy';
import TermsAndConditions from './Pages/Terms_Conditions';
import CreateProduct from './Pages/AdminCreateProduct';
import UpdateProduct from './Pages/UpdateProduct';
import AnnouncementPage from './Components/AnnouncementPage';
import AdminUsers from './Pages/AdminUsers';
import MyProfile from './Pages/MyProfile';

// Layout wrapper to handle conditional header/footer
function Layout({ children }) {
  const location = useLocation();
  const hideLayoutRoutes = [
    '/login',
    '/signup',
    '/forgot-password',
    '/verify-otp',
    '/reset-password',
  ];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path='/collection' element={<Collection />} /> */}
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<Shipping />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/custom' element={<CustomizationDesign />} />
          <Route path='/single/:slug' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/admin/orders" element={<AdminRoute><AdminOrders /> </AdminRoute>} />
          <Route path="/admin/create-blog" element={<AdminRoute><AdminCreateBlog /></AdminRoute>} />
          <Route path="/admin/update-blog/:id" element={<AdminRoute><AdminUpdateBlog /></AdminRoute>} />
          <Route path="/admin/create-product" element={<AdminRoute><CreateProduct /></AdminRoute>} />
          <Route path="/admin/update-product/:slug" element={<AdminRoute><UpdateProduct /></AdminRoute>} />
          <Route path="/admin/announcement" element={<AdminRoute><AnnouncementPage /></AdminRoute>} />
          <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />


        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
