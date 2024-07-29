import React from 'react';
import HomeTop from '../Components/Home/HomeTop';
import Categories from '../Components/Home/Categories ';
import NewArrival from '../Components/Home/NewArrival';
import CollectionProducts from '../Components/Home/CollectionProducts';
import FeaturedProducts from '../Components/Home/FeaturedProducts';


const HomePage = () => {
  return (
    <>
      <HomeTop />
      <Categories />
      <NewArrival />
      <CollectionProducts />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
