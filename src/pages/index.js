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
import { Container, Section, Text } from "../components/ui"
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
      {/*<Videos />*/}
      <Media />
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
