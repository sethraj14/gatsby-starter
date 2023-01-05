import * as React from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles
import {Container, Flex, Section, Text} from "../ui"

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
      <Container width="fullbleed">
        <Text as="h2" variant="heading">
          {"Timeline"}
        </Text>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
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
            {renderImage(
              2,
              "Elected Jila panchayat sadashya Jalalpur",
              2000
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              3,
              "Elected Adyaksh Jila panchayat Hamirpur",
              2000
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderImage(
              4,
              "Elected Member of parliament (Jalaun 45)",
              2009
            )}
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
            {renderImage(
              7,
              "Elected adyaksh Jila Panchayat (jalaun)",
              2021
            )}
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
    width: 240,
    height: 200,
    backgroundColor: "rgb(0,0,0,0.3)",
  },
  image: {
    width: "80%",
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
  },
  wrapper:{
    flexDirection: 'column',
    alignItems: 'center'
  },
  year: {
    fontWeight: 'bold',
    color: 'white'
  }
}
