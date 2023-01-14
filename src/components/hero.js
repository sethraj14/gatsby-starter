import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { image } from "./stat-list"

import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css"
import "swiper/css/effect-fade"

const img1 =
  "https://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=200&h=184&q=50&fm=png"
const img2 =
  "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=205&h=242&q=50&fm=webp"

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" center={true}>
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Text as="h2" variant="heading" withTransition={true}>
              {"डॉ घनश्याम अनुरागी जी"}
            </Text>
            <section className="animation">
              <Text
                className="first"
                as="h2"
                variant="heading"
                center={false}
                withTransition={false}
              >
                {"पूर्व सांसद"}
              </Text>
              <Text
                className="second"
                as="h2"
                variant="heading"
                {...props}
                withTransition={false}
              >
                {"अध्यक्ष जिला पंचायत - जालौन"}
              </Text>
            </section>

            <Subhead as="h2">{props.subhead}</Subhead>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`

const classes = {
  imageWrap: {
    borderRadius: 12,
    width: 400,
    height: 360,
    backgroundColor: "yellow",
  },
  image: {
    width: "auto",
    height: "auto",
    objectFit: "cover",
  },
}
