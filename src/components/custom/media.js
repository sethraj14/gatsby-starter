import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles
import { Container, NavLink, Section, Text } from "../ui"
import { Autoplay, Navigation, Pagination } from "swiper"
import { colors } from "../../colors.css"

const Media = props => {
  const renderImage = (id, image) => {
    return (
      <NavLink to={"/media"}>
        <div key={`image-${id}`} style={classes.imageWrap}>
          <img alt={"Alt"} src={image} style={classes.image} />
        </div>
      </NavLink>
    )
  }
  const galleryArr = new Array(122).fill("image")

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
          {"Media Coverage"}
        </Text>
        <Swiper
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          spaceBetween={60}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
            // when window width is >= 480px
            480: {
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 30,
              pagination: false,
            },
            // when window width is >= 640px
            640: {
              centeredSlides: true,
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
        >
          {galleryArr.map((key, index) => {
            return [46, 49, 61, 71, 27, 33, 37, 40, 54].includes(index) ? (
              <SwiperSlide>
                {renderImage(index, `/images/media/media_${index}.jpg`)}
              </SwiperSlide>
            ) : null
          })}
        </Swiper>
      </Container>
    </Section>
  )
}

export default Media

const classes = {
  imageWrap: {
    borderRadius: 12,
    width: 360,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    borderRadius: 12,
  },
}
