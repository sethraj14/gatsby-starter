import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Autoplay,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { EffectFade } from "swiper"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles

import { Container, NavLink, Section, Text } from "../ui"
import { colors } from "../../colors.css"

const Gallery = props => {
  const renderImage = (id, image) => {
    return (
      <NavLink to={"/gallery"}>
        <div key={`image-${id}`} style={classes.imageWrap}>
          <img alt={"Alt"} src={image} style={classes.image} />
        </div>
      </NavLink>
    )
  }

  const galleryArr = [91, 84, 87, 105, 5, 59, 60,8, 15, 92,43, 58,20];

  return (
    <Section>
      <Container>
        <Text
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
          as="h2"
          variant="heading"
          style={{ color: colors.background }}
        >
          {"Gallery"}
        </Text>
        <Swiper
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            // when window width is >= 320px
            320: {
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 20,
              pagination: false,
            },
            // when window width is >= 480px
            480: {
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 30,
              pagination: false,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
              pagination: false,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 40,
              pagination: false,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {galleryArr.map((key, index) => {
            return <SwiperSlide>
              {renderImage(key, `/images/gallery/gallery_${key}.jpg`)}
            </SwiperSlide>;
          })}
        </Swiper>
      </Container>
    </Section>
  )
}

export default Gallery

const classes = {
  imageWrap: {
    borderRadius: 12,
    width: 400,
    height: 360,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    borderRadius: 12,
  },
}
