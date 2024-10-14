// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import CardModel3 from '../cardModel3/CardModel3';

function Carrocel({ }) {
    return (
        <Swiper
            // install Swiper modules
            modules={[ Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            // navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            
            

            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
           
        >
            
                <SwiperSlide >
                    <CardModel3 />
                </SwiperSlide>
               
                <SwiperSlide >
                    <CardModel3 />
                </SwiperSlide>
               
                <SwiperSlide >
                    <CardModel3 />
                </SwiperSlide>
               
            
        </Swiper>
    );
};

export default Carrocel
