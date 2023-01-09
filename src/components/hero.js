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
            <Text as="h2" variant="heading" >
              {"डॉ घनश्याम अनुरागी जी"}
            </Text>
            <Text as="h2" variant="heading" center={false}>
              {"पूर्व सांसद"}
            </Text>
            <Text as="h2" variant="heading" {...props}>
              {"अध्यक्ष जिला पंचायत - जालौन"}
            </Text>
            <Subhead as="h2">{props.subhead}</Subhead>
            {/*<Text as="p">{props.text}</Text>*/}
            {/*<ButtonList links={props.links} />*/}
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
