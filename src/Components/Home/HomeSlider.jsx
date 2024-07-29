import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../../assets/images/s1.jpg'
import s2 from '../../assets/images/s2.jpg'
import s3 from '../../assets/images/s3.jpg'
import s4 from '../../assets/images/s4.jpg'
import s5 from '../../assets/images/s5.jpg'
import s6 from '../../assets/images/s6.jpg'

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
        <img className="slider_image"  src={s1} alt='sofa'/>
        </div>
        <div>
        <img className="slider_image"  src={s2} alt='sofa'/>
        </div>
        <div>
        <img className="slider_image"  src={s3} alt='sofa'/>
        </div>
        <div>
        <img className="slider_image"  src={s4} alt='sofa'/>
        </div>
        <div>
        <img className="slider_image"  src={s5} alt='sofa'/>
        </div>
        <div>
        <img className="slider_image"  src={s6} alt='sofa'/>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
