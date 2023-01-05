import * as React from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/effect-fade"
// Import Swiper styles
import {Container, Section, Text} from "../ui"

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
                                {renderImage(index, `/icons/images/media/media_${index+1}.jpeg`)}
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
