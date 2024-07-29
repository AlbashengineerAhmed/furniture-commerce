import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./../Pages/HomePage";
import TopNavbar from "../Components/TopNavbar";
import AboutPage from "../Pages/AboutPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import SearchPage from "../Pages/SearchPage";
import Footer from "../Components/Footer";
import CartListPage from "./../Pages/CartListPage";
import FavoritePage from "./../Pages/FavoritePage";
import NotificationPage from "./../Pages/NotificationPage";
import LoginPage from "./../Pages/LoginPage";
import ForgetPasswordPage from "../Pages/ForgetPasswordPage";
import RegisterPage from "../Pages/RegisterPage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
import SubCategoryPage from "./../Pages/SubCategoryPage ";
import ProductCategoryPage from "../Pages/ProductCategoryPage";
import ContactPage from "../Pages/ContactPage";
import UserProfilePage from "../Pages/UserProfilePage";

const AppRouter = () => {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/company" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/subcategory" element={<SubCategoryPage />} />
        <Route path="/category" element={<ProductCategoryPage />} />
        <Route path="/cartlist" element={<CartListPage />} />
        <Route path="/favorate" element={<FavoritePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
