import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { EffectFade } from "swiper"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles

import journey_1 from "../../../public/images/journey-1.jpeg"
import journey_2 from "../../../public/images/journey-2.jpeg"
import journey_3 from "../../../public/images/journey-3.jpeg"
import journey_4 from "../../../public/images/journey-4.jpeg"
import journey_5 from "../../../public/images/journey-5.jpeg"
import journey_6 from "../../../public/images/journey-6.jpeg"
import journey_7 from "../../../public/images/journey-7.jpeg"
import journey_8 from "../../../public/images/journey-8.jpeg"
import journey_9 from "../../../public/images/journey-9.jpeg"
import { Container, Section, Text } from "../ui"

const Media = props => {
  const renderImage = (id, image) => {
    return (
      <div key={`image-${id}`} style={classes.imageWrap}>
        <img alt={"Alt"} src={image} style={classes.image} />
      </div>
    )
  }
    const galleryArr = new Array(8).fill("image");

    return (
        <Section>
            <Container >
                <Text as="h2" variant="heading" >
                    {"Media Coverage"}
                </Text>
                <Swiper
                    spaceBetween={60}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={swiper => console.log(swiper)}
                >
                    {galleryArr.map((key, index) => {
                        return (
                            <SwiperSlide>
                                {renderImage(index, `/images/media/media_${index+1}.jpeg`)}
                            </SwiperSlide>
                        )
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
    width: 400,
    height: 320,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    borderRadius: 12,
  },
}
