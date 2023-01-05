import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Parallax } from "@react-spring/parallax"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal"
import { useSiteConfiguration } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration"
import { Animation } from "gatsby-theme-portfolio-minimal/src/components/Animation"
import { Section } from "gatsby-theme-portfolio-minimal/src/components/Section"
import { Slider } from "gatsby-theme-portfolio-minimal/src/components/Slider"
import * as classes from "gatsby-theme-portfolio-minimal/src/sections/Articles/style.module.css"
import {
  ArticleCard,
  ArticleCardSkeleton,
} from "gatsby-theme-portfolio-minimal/src/components/ArticleCard"

export default function Homepage(props) {
  const { homepage } = props.data
  const siteConfiguration = useSiteConfiguration()

  const articles = []

  return (
    <Layout>
        {homepage.blocks.map(block => {
          const { id, blocktype, ...componentProps } = block
          const Component =sections[blocktype] || Fallback
          return ['HomepageStatList','HomepageHero'].includes(blocktype)  ? <Component key={id} {...componentProps} /> : null;
        })}
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
