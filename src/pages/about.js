import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import StatList from "../components/stat-list";

export default function About(props) {
  const {aboutPage} = props.data

  return (
      <Layout>
        {aboutPage.blocks.map((block) => {
          const {id, blocktype, ...componentProps} = block
          const Component = sections[blocktype] || Fallback
          return ["AboutHero"].includes(blocktype) ? (
              <Component key={id} {...componentProps} />
          ) : null
        })}
        <StatList/>
      </Layout>
  )
}


export const Head = (props) => {
  const { aboutPage } = props.data
  return <SEOHead {...aboutPage} />
}
export const query = graphql`
  {
    aboutPage {
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
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
