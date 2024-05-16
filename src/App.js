import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import "../src/app.scss";
import Products from "./component/pages/porducts/Products";
import Footer from "./component/footer/Footer";
import UserWish from "./component/pages/userWish/UserWIsh";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/UserWish" element={<UserWish />} />
        </Routes>
        <div className="app-footer-section">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
