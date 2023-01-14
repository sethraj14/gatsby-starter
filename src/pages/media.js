import React, { useCallback, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { Container, Section } from "../components/ui"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import {photos} from "../photos/media_photos";

const getPhotos = () => {
    const photos = []
    const galleryArr = new Array(122).fill("image")
    galleryArr.forEach((t, index) => {
        photos[index] = {
            src: `/images/media/media_${index + 1}.jpg`,
            width: index % 2 === 0 ? 3 : index % 3 === 0 ? 2 : 4,
            height: index % 2 === 0 ? 4 : index % 3 === 0 ? 3 : 3,
        }
    })
    return photos
}

export default function Media(props) {
    const { aboutPage } = props.data

    // const photos = getPhotos()

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

    return (
        <Layout>
            <Section>
                <Container width="fullbleed">
                    <Gallery photos={photos} onClick={openLightbox} margin={6}/>
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
