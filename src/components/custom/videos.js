import ReactPlayer from "react-player"
import * as React from "react"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles
import {Container, NavLink, Section, Text} from "../ui"
import { colors } from "../../colors.css"

const Videos = props => {
  const renderVideo = (id, video) => {
    return (
      <NavLink to={"/video-gallery"}>
        <div key={`image-${id}`} style={classes.imageWrap}>
          <ReactPlayer
            style={classes.player}
            url={video}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </NavLink>
    )
  }

  const videoArr = props.videoArr || [73, 74, 77, 72, 79]

  return (
    <Section>
      <Container>
        <Text
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease"
          as="h2"
          variant="heading"
          style={{ color: colors.background }}
        >
          {"Videos"}
        </Text>
        <Swiper
          // data-sal="fade"
          // data-sal-delay="300"
          // data-sal-duration="1000"
          // data-sal-easing="ease"
          modules={[Navigation, Pagination]}
          // autoplay={{
          //     delay: 3000,
          //     pauseOnMouseEnter: true,
          //     waitForTransition: true,
          //     disableOnInteraction: false,
          // }}
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
          {videoArr.map((key, index) => {
            return (
              <SwiperSlide>
                {renderVideo(key, `/videos/anuragi_videos_${key}.mp4`)}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </Section>
  )
}

export default Videos

const classes = {
  imageWrap: {
    position: "relative",
    paddingTop: "56.25%",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
      borderRadius: 12,
      overflow: 'hidden'
  },
}
