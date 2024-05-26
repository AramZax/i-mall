import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import "../src/app.scss";
import Products from "./component/pages/porducts/Products";
import Footer from "./component/footer/Footer";
import UserWish from "./component/pages/userWish/UserWIsh";
import Orders from "./component/pages/orders/Orders";
import Profile from "./component/pages/profile/Profile";
import Settings from "./component/pages/settings/Settings";
import Rgister from "./component/pages/register/Register";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/UserWish" element={<UserWish />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/register" element={<Rgister />} />
        </Routes>
        <div className="app-footer-section">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
