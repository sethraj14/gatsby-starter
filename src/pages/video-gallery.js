import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { Box, Container, Flex, Section } from "../components/ui"
import ReactPlayer from "react-player"
import { media } from "../components/ui.css"

const getVideos = () => {
  let videos = []
  const galleryArr = new Array(79).fill("video")
  galleryArr.forEach((t, index) => {
    videos[index] = `/videos/anuragi_videos_${index + 1}.mp4`
  })
  return videos
}

export default function GalleryComponent(props) {
  const { aboutPage } = props.data

  const renderVideo = (id, video) => {
    return (
      <div key={`image-${id}`} style={classes.imageWrap}>
        <ReactPlayer
          style={classes.player}
          url={video}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    )
  }

  const videos = getVideos()

  const len = videos.length
  console.log("test 3", videos)

  return (
    <Layout>
      <Container width="fullbleed">
        {videos.map((video, index) => {
          if (index < len / 2) {
            return (
              <>
                <Flex gap={4} variant={"responsive"}>
                  <Box width="full" center={true} style={classes.videoWrap}>
                    {renderVideo(index, videos[index])}
                  </Box>
                  <Box width="full" center={true} style={classes.videoWrap}>
                    {renderVideo(index + 1, videos[index + 1])}
                  </Box>
                </Flex>
              </>
            )
          }
        })}
      </Container>
    </Layout>
  )
}
export const Head = props => {
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

const classes = {
  videoWrap: {
  },
  imageWrap: {
    position: "relative",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "5%",

  },
  player: {
    borderRadius: 12,
    overflow: 'hidden'
  },
}
