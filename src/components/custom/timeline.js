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
          <Text as="h2" variant="kicker" style={classes.image}>
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
              "निर्वाचित ग्राम प्रधान (खेड़ा शिलाजीत, थाना-जरिया, जिला-हमीरपुर)\n",
              1995
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(2, "निर्वाचित जिला पंचायत सदस्य (जलालपुर क्षेत्र)\n", 2000)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(3, "निर्वाचित अध्यक्ष जिला पंचायत (हमीरपुर)\n", 2000)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(4, "निर्वाचित सांसद (जालौन-45)\n", 2009)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              5,
              "मनोनीत-राष्ट्रीय उपाध्यक्ष अखिल भारतीय कोली (कोरी) समाज\n",
              2010
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              6,
              "निर्वाचित जिला पंचायत सदस्य (रेंडर-जालौन)\n",
              2021
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(7, "निर्वाचित अध्यक्ष जिला पंचायत (जालौन)\n", 2021)}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              8,
              "मनोनीत-प्रदेश अध्यक्ष जिला पंचायत संगठन (यूपी)\n",
              2021
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              9,
              "मनोनीत-कार्यकारी राष्ट्रीय अध्यक्ष अखिल भारतीय कोली (कोरी) समाज\n",
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
    backgroundColor: 'rgb(0, 166, 80,0.8)',
  },
  image: {
    width: "80%",
    fontSize: 20,
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
    color: colors.background,
  },
}
