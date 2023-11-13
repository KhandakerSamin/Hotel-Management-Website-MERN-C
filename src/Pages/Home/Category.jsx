import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <section className='max-w-screen-xl mx-auto mb-24'>
            <SectionTitle 
            heading={'order online'}
            subHeading={'Form 11.00an to 10.00pm'}></SectionTitle>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-4xl uppercase text-center -mt-20 text-white'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt='' />
                    <h1 className='text-4xl uppercase text-center -mt-20 text-white'>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt='' />
                    <h1 className='text-4xl uppercase text-center -mt-20 text-white'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt='' />
                    <h1 className='text-4xl uppercase text-center -mt-20 text-white'>desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt='' />
                    <h1 className='text-4xl uppercase text-center -mt-20 mb-24 text-white'>Salad</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;