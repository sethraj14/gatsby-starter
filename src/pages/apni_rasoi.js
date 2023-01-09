import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import Timeline from "../components/custom/timeline";
import Media from "../components/custom/media";

import '../style.css';
import Gallery from "../components/custom/gallery";
import {Box, Container, Flex, Section, Subhead, Text} from "../components/ui";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const bio = "अपनी रसोई नामक मुहिम चला कर dr ghanshyam anuragi Ji जरूरतमंद और गंभीर परिस्थितियों से जूझ रहे लोगो के लिए भोजन का निज निवास पर प्रबंध कर रहे है जिसके तहत वह रोजाना 800–900 जरूरतमंद लोगों को स्वच्छ–स्वादिष्ट भोजन वितरित करवाते है । \n" +
    "जिसकी शुरुवात उन्होंने 8July2022 में भारत जन सेवा फाउंडेशन के अंतर्गत की। \n" + "<br/><br/>" +
    "इस शुभ और समाज के प्रति समर्पित अपनी रसोई नामक मुहीम का उद्घाटन कैबिनेट मंत्री उत्तर प्रदेश राकेश सचान जी तथा पूर्व उप मुख्यमंत्री उत्तर प्रदेश दिनेश शर्मा जी के द्वारा किया गया।"

const image = {
    "id": "358a70d6-cf59-5894-b0c4-a2bbc9391bc2",
    "gatsbyImageData": {
        "images": {
            "sources": [
                {
                    "srcSet": "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=103&h=122&q=50&fm=webp 103w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=205&h=242&q=50&fm=webp 205w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=410&h=484&q=50&fm=webp 410w",
                    "sizes": "(min-width: 410px) 410px, 100vw",
                    "type": "image/webp"
                }
            ],
            "fallback": {
                "src": "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=410&h=484&q=50&fm=png",
                "srcSet": "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=103&h=122&q=50&fm=png 103w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=205&h=242&q=50&fm=png 205w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=410&h=484&q=50&fm=png 410w",
                "sizes": "(min-width: 410px) 410px, 100vw"
            }
        },
        "layout": "constrained",
        "backgroundColor": "#080808",
        "width": 410,
        "height": 484
    },
    "alt": "घनश्याम अनुरागी"
}
export default function ApniRasoi(props) {
    const { homepage } = props.data


    return (
        <Layout>
            <Section>
                <Container>
                    <Flex gap={4} variant="responsive">
                        <Box width="half" center={true}>
                            {(
                                <GatsbyImage
                                    alt={image.alt}
                                    image={getImage(image.gatsbyImageData)}
                                />
                            )}
                        </Box>
                        <Box width="half">
                            <Text as="h2" variant="heading" >
                                {"\"घनश्याम अनुरागी ने ठाना है"}
                            </Text>
                            <Text as="h2" variant="heading" center={false}>
                                {"हर भुखे को भोजन खिलाना है\""}
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Section>
            {homepage.blocks.map(block => {
                const { id, blocktype, ...componentProps } = block
                const Component = sections[blocktype] || Fallback
                return ["HomepageStatList"].includes(blocktype) ? (
                    <Component key={id} {...componentProps} bio={bio} />
                ) : null
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
