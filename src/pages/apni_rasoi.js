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
import { Box, Container, Flex, Section, Subhead, Text } from "../components/ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const bio =
  "" +
  "******\n" +
  "<br/>" +
  "नान्नोदकसमं दानं न तिथिर्द्वादशी समा ।\n" +
  "<br/>" +
  "न गायत्र्याः परो मन्त्रो न मातुर्दैवतं परम् ॥\n" +
  "<br/><br/>" +
  "\tमहान शिक्षाविद, अर्थशास्त्री और नीतिशास्त्री रहे आचार्य चाणक्य ने एक श्लोक के माध्यम से संसार के सबसे बड़े मन्त्र, श्रेष्ठ दान, श्रेष्ठ तिथि और सबसे बड़े देवता के वारे में बताया है । उन्होंने बताया की अन्न और जल के समान कोई श्रेष्ठ दान नहीं है । द्वादशी के समान कोई श्रेष्ठ तिथि नहीं है । गायत्री मंत्र से बढ़कर कोई मंत्र नहीं है और माता के समान कोई देवता नहीं है । \n" +
  "\tउपनिषदों में भी ऐसा उल्लेख किया गया है कि – “ अन्नमयं ही सोम्य मनः ” अन्न का असर मन पर पड़ता है । इसी सेवा और समर्पण भाव को आधार मान कर बुंदेलखंड क्षेत्र की राजनीती के चाणक्य जाने वाले डॉ० घनश्याम अनुरागी की अध्यक्षता में “ भारत जन सेवा फाउंडेशन ” द्वारा संचालित अपनी रसोई में बेहतर साफ़ सुथरी, उच्च गुणवत्ता पूर्ण पोष्टिक तत्वों से भरपूर खाद्य सामग्री का प्रयोग कर सात्विक स्वादिष्ट भरपेट भोजन प्रतिदिन 800 से 900 लोगों को खिलाया जा रहा है । जनपद जालौन ही नहीं समस्त बुंदेलखंड क्षेत्र के कद्दावर एवं जन-जन में लोकप्रिय जनप्रतिनिधि डॉ घनश्याम अनुरागी पूर्व सांसद एवं अध्यक्ष जिला पंचायत जालौन द्वारा भारत जन सेवा फाउंडेशन के माध्यम से संचालित अपनी रसोई में जनता की निस्वार्थ सेवा के नित नए मानदंड स्थापित हो रहें हैं । “अपनी रसोई” की बढती लोकप्रियता का यह आलम है कि किसी भी राजनैतिक दल से सम्बद्धता रखने वाला राजनैतिक व्यक्ति, समाज सेवी, व्यापारी, शिक्षाविद, गणमान्य नागरिक डॉ० घनश्याम अनुरागी के जन जन की सेवा के संकल्प में हाथ बढाने के लिए “अपनी रसोई” में स्वयं अपने हाथों से आम जन को भोजन परोसकर अपने को धन्य समझता है । आजादी के अमृत महोत्सव काल में समाज के असहाय, अति गरीब, अभावग्रस्त लोगों की खाद्य समस्याओं का समाधान कर उनके आत्मविश्वास को बढाने का पुनीत कार्य डॉ० घनश्याम अनुरागी अध्यक्ष जिला पंचायत जालौन द्वारा किया जा रहा है । \n" +
  "<br/><br/>" +
  "“सबका साथ-सबका विकास, सबका विश्वास-सबका प्रयास” के मूल मन्त्र में अन्तर्निहित रामराज्य की लोकमंगलकारी परिकल्पना को साकार करने के लिए जन-कल्याणकारी नेतृत्व की प्रतिमूर्ति डॉ० घनश्याम अनुरागी द्वारा आर्थिक रूप से सुविधा वंचित, साधन विपन्न, सीमान्त श्रमजीवियों, आम जनमानस की सेवा, उनके जीवन स्तर का उन्नयन, कर्मक्षेत्र में श्रमशीलता, कार्य-कुशलता में अभिवृद्धि करने के महान उद्देश्य से भारत जन सेवा फाउंडेशन के माधयम से “ अपनी रसोई ” का सञ्चालन अलौकिक भवन जिला परिषद के पास उरई जनपद जालौन (उ०प्र०) में किया जा रहा है ।\n" +
  "\tव्यक्ति की गरिमा, स्वाभिमान के प्रति सम्मान भाव के दृष्टिगत सांकेतिक टोकन मूल्य रुपया 5.00 (पांच रुपया) मात्र में सभी को भरपेट भोजन कराया जाता है । सीमान्त, अकुशल श्रमिक वर्ग, साधन विपन्न, सुविधा वंचित वर्गों, विभिन्न समुदायों के लोगों को प्रतिदिन भरपेट भोजन के साथ साथ भारत सरकार, उत्तर प्रदेश सरकार द्वारा संचालित विभिन्न महत्त्वपूर्ण जन-कल्याणकारी, सामाजिक सुरक्षा योजनाओं, वित्तीय समावेशन आदि के वारे में जन जागरूकता कार्यक्रम में योजनाओं का लाभ समाज के अंतिम छोर में बैठे सुविधा वंचित लोगों तक पहुंचाने का पुनीत कार्य जा रहा है ।\n" +
  "<br/><br/>" +
  "\tभारतीय जनता पार्टी के कर्मठ सिपाही, जन सेवा के लिए समर्पित कार्यकर्ता एवं जिला पंचायत अध्यक्ष जालौन होने के नाते जन कल्याणकारी योजनाओं का लाभ समाज के अंतिम छोर में बैठे लोगों तक पहुंचाने के लिए डॉ घनश्याम अनुरागी की अध्यक्षता में संचालित भारत जन सेवा फाउंडेशन “अपनी रसोई” के माध्यम से रामराज्य की परिकल्पना – “ दैहिक दैविक भौतिक तापा, राम राज काहू नहीं व्यापा ।” को साकार करने, आत्मनिर्भर भारत की ओर प्रयत्नशील, भारतीय मूल्यों में समाहित सामाजिक-सांस्कृतिक विरासत के मूल मंत्र – “ परहित सरस धरम नहि भाई .......... । ” की प्रेरणा से सतत कार्यरत है । \n" +
  "*****\n" +
  "<br/><br/>" +
  "सबका साथ सबका विकास के इस परिवर्तन शील दौर में\n" +
  "<br/>" +
  "राजनीति के नए मानदंड स्थापित करते जन सेवा परिवेश में\n" +
  "<br/>" +
  "एक किरण, निस्वार्थ प्रेम, जन सेवा के अनुराग की “अनुरागी के रूप में”\n" +
  "<br/>" +
  "राजनीति के चाणक्य, निर्धन को दान, भूखे को सम्मान “अपनी रसोई ” के रूप में\n" +
  "<br/>" +
  "न कोई बड़ा न कोई छोटा, सव पाते एक समान अनुराग “अनुरागी” के रूप में\n" +
  "<br/>" +
  "न निर्धन, न धनवान, सबके साथ भोजन “अपनी रसोई” के आँगन में\n" +
  "<br/>" +
  "ऊंच-नींच न जाने कोई, जन सेवा भाव सबके प्रति एक समान उनके मन में\n" +
  "<br/>" +
  "भरपेट भोजन पांच रूपये में, “अपनी रसोई” देती तन, मन का आनंद सबके मन में\n" +
  "<br/>" +
  "मुरली मनोहर जैसी मनमोहक साक्षात प्रतिमूर्ति “घनश्याम” सी\n" +
  "<br/>" +
  "दुःख में सुख में सबके अनुराग में, अतुल्य जनसेवा “अनुरागी” सी\n" +
  "<br/>" +
  "धन्य हैं जनपद वासी सभी, हमीरपुर-जालौन जिले में\n" +
  "<br/>" +
  "“अनुरागी” के अनुराग की ख़ास जगह महके सबके दिल में\n" +
  "<br/>" +
  "*****"
const image = {
  id: "358a70d6-cf59-5894-b0c4-a2bbc9391bc2",
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=103&h=122&q=50&fm=webp 103w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=205&h=242&q=50&fm=webp 205w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=410&h=484&q=50&fm=webp 410w",
          sizes: "(min-width: 410px) 410px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=410&h=484&q=50&fm=png",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=103&h=122&q=50&fm=png 103w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=205&h=242&q=50&fm=png 205w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/U3SK6xjRhpQRa9vJy8nyM/88872623eaa0279f9897f332ed545e5f/WhatsApp_Image_2022-12-15_at_9.37.51_PM_Background_Removed_-_Edited.png?w=410&h=484&q=50&fm=png 410w",
        sizes: "(min-width: 410px) 410px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#080808",
    width: 410,
    height: 484,
  },
  alt: "घनश्याम अनुरागी",
}
export default function ApniRasoi(props) {
  const { homepage } = props.data

  return (
    <Layout>
      <Section>
        <Container>
          <Flex gap={4} variant="responsive">
            <Box
              data-sal="slide-up"
              data-sal-duration="100"
              data-sal-delay="1000"
              data-sal-easing="ease"
              width="half"
              center={true}
            >
              {
                <GatsbyImage
                  alt={image.alt}
                  image={getImage(image.gatsbyImageData)}
                />
              }
            </Box>
            <Box
              width="half"
              data-sal="slide-up"
              data-sal-duration="100"
              data-sal-delay="1000"
              data-sal-easing="ease"
            >
              <section className="animation-2">
                <div className="first">
                  <Text as="h2" variant="heading">
                    {'"घनश्याम अनुरागी ने ठाना है'}
                  </Text>
                  <Text as="h2" variant="heading" center={false}>
                    {'हर भूखे को भोजन खिलाना है"'}
                  </Text>
                </div>
                <div className="second">
                  <Text as="h2" variant="heading">
                    {"डॉ घनश्याम अनुरागी जी"}
                  </Text>
                  <Text as="h2" variant="heading" center={false}>
                    {"पूर्व सांसद"}
                  </Text>
                  <Text as="h2" variant="heading" {...props}>
                    {"अध्यक्ष जिला पंचायत - जालौन"}
                  </Text>
                </div>
              </section>
            </Box>
          </Flex>
        </Container>
      </Section>
      {homepage.blocks.map(block => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return ["HomepageStatList"].includes(blocktype) ? (
          <Component
            key={id}
            {...componentProps}
            bio={bio}
            head={"अपनी रसोई"}
            withTransition={true}
          />
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
