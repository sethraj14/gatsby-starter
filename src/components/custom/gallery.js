import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { EffectFade } from "swiper"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles

import { Container, Section, Text } from "../ui"

const Gallery = props => {
  const renderImage = (id, image) => {
    return (
      <div key={`image-${id}`} style={classes.imageWrap}>
        <img alt={"Alt"} src={image} style={classes.image} />
      </div>
    )
  }

  const galleryArr = new Array(62).fill("image")

  return (
    <Section>
      <Container>
        <Text as="h2" variant="heading" style={{color: 'black'}}>
          {"Gallery"}
        </Text>
        <Swiper
          spaceBetween={60}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {galleryArr.map((key, index) => {
            return (
              <SwiperSlide>
                {renderImage(index, `/icons/images/gallery/gallery_${index + 1}.jpg`)}
              </SwiperSlide>
            )
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
    width: 300,
    height: 240,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
    borderRadius: 12,
  },
}
