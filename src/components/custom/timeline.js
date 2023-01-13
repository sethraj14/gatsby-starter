import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles
import { Container, Flex, Section, Text } from "../ui"
import { Autoplay, Navigation, Pagination } from "swiper"
import { colors } from "../../colors.css"

const Timeline = props => {
  const renderImage = (id, text, year) => {
    return (
      <Flex style={classes.wrapper}>
        <Flex key={`image-${id}`} style={classes.imageWrap}>
          <Text as="h4" variant="kicker" style={classes.image}>
            {text}
          </Text>
        </Flex>
        <Text as={"h3"} variant={"subhead"} style={classes.year}>
          {year}
        </Text>
      </Flex>
    )
  }

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
          {"Timeline"}
        </Text>
        <Swiper
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            // when window width is >= 320px
            320: {
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            980: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            {renderImage(
              1,
              "Elected gram pradhan(kheda shilajit ,thana -jariya, jila hamirpur)",
              1995
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(2, "Elected Jila panchayat sadashya Jalalpur", 2000)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(3, "Elected Adyaksh Jila panchayat Hamirpur", 2000)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(4, "Elected Member of parliament (Jalaun 45)", 2009)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              5,
              "Nomitate Rastriye Upadyaksh Akhil Bhariiye Koli(kori) Samaj",
              2010
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              6,
              "Elected Jila panchayat Sadashy(Render-jalaun)",
              2021
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(7, "Elected adyaksh Jila Panchayat (jalaun)", 2021)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              8,
              "Nominate-Pradesh Adyaksh jila panchayat Sangthan (UP)",
              2021
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              9,
              "Nominate-Karya kari Rastriye Adyaksh Akhil Bhariiye Koli(kori) Samaj ",
              2021
            )}
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  )
}

export default Timeline

const classes = {
  imageWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    width: 220,
    height: 200,
    backgroundColor: "rgb(0,0,0,0.3)",
  },
  image: {
    width: "80%",
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
  },
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  year: {
    fontWeight: "bold",
    color: "white",
  },
}
