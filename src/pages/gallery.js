import React, { useCallback, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import {Button, Container, Flex, Section} from "../components/ui"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {media} from "../components/ui.css";

const getPhotos = () => {
  const photos = []
  const galleryArr = new Array(62).fill("image")
  galleryArr.forEach((t, index) => {
    console.log('test 2',`/images/gallery/gallery_${index + 1}.jpg`);
    photos[index] = {
      src: `/images/gallery/gallery_${index + 1}.jpg`,
      width: index % 2 === 0 ? 3 : index % 3 === 0 ? 2 : 4,
      height: index % 2 === 0 ? 4 : index % 3 === 0 ? 3 : 3,
    }
  })
  return photos
}

const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {

  var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth*ratio, height: srcHeight*ratio };
}

export default function GalleryComponent(props) {
  const { aboutPage } = props.data

  const photos = getPhotos()

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const renderImage = props => {
    return (
      <button onClick={(event) => props.onClick(event,{index: props.index
      })} style={styles.imageWrapper}>
        <img alt={""} src={props.photo.src} style={styles.image} />
      </button>
    )
  }

  return (
    <Layout>
      <Section>
        <Container width="fullbleed">
          <Gallery
            photos={photos}
            onClick={openLightbox}
            margin={6}
            // renderImage={renderImage}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Container>
      </Section>
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


const styles= {
  imageWrapper:{
    display: 'flex',
    margin: 8,
    border: 'none',
    padding: 0,
    maxHeight: '20%',
    maxWidth: '30%',
    borderRadius: 12,
    overflow: 'hidden',
    "@media": {
      [media.medium]: {
        maxHeight: '30%',
        maxWidth: '50%',
      },
    },
  },
  image:{
    objectFit: 'cover',
    width: '100%',
    height:  '100%',
    borderRadius: 12,
  }
}
