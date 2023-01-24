import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import Timeline from "../components/custom/timeline"
import Media from "../components/custom/media"

import "../style.css"
import Gallery from "../components/custom/gallery"
import { Box, Container, Flex, Section, Text } from "../components/ui"
import { colors } from "../colors.css"
import HomepageCta from "../components/cta"
import Videos from "../components/custom/videos"

export default function Homepage(props) {
  const { homepage } = props.data
  return (
    <Layout>
      {homepage.blocks.map(block => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return ["HomepageStatList", "HomepageHero"].includes(blocktype) ? (
          <Component key={id} {...componentProps} withTransition={true} />
        ) : null
      })}
      <Timeline />
      <Gallery />
      <Videos />
      <Media />
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
            {"Stay Connected"}
          </Text>
          <Flex gap={4} variant="responsive">
            <Box width="half" center={true}>
              <a
                className="twitter-timeline"
                data-width={"500"}
                data-height={"700"}
                href="https://twitter.com/MpAnuragi?ref_src=twsrc%5Etfw"
              >
                Tweets by MpAnuragi
              </a>
            </Box>
            <Box width="half" center={true}>

              <iframe
                width="100%"
                height="700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                src="https://embedsocial.com/api/pro_hashtag/d62771dbabe8e95eb6ba947e22401b321ee0d479"
              ></iframe>

            </Box>
            {/*<Box width="half" center={true}>*/}
            {/*  <div*/}
            {/*    className="fb-page"*/}
            {/*    data-href="https://www.facebook.com/ghanshyamanuragi1972"*/}
            {/*    data-tabs="timeline"*/}
            {/*    data-width="500"*/}
            {/*    data-height={"1000"}*/}
            {/*    // data-small-header="true"*/}
            {/*    data-adapt-container-width="true"*/}
            {/*    data-hide-cover="false"*/}
            {/*    data-show-facepile="true"*/}
            {/*  >*/}
            {/*    <blockquote*/}
            {/*      cite="https://www.facebook.com/ghanshyamanuragi1972"*/}
            {/*      className="fb-xfbml-parse-ignore"*/}
            {/*    >*/}
            {/*      <a href="https://www.facebook.com/ghanshyamanuragi1972">*/}
            {/*        {"Apni Rasoi"}*/}
            {/*      </a>*/}
            {/*    </blockquote>*/}
            {/*  </div>*/}
            {/*</Box>*/}
          </Flex>
        </Container>
      </Section>
      <HomepageCta />
    </Layout>
  )
}
export const Head = props => {
  const { homepage } = props.data
  return <SEOHead {...homepage} />
}
export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageStatListContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageProductListContent
      }
    }
  }
`
