import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Flex,
  Box,
  Icon,
  ButtonList,
  Nudge,
} from "./ui"

function Stat(props) {
  return (
    <Box>
      <Text variant="stat">{props.value}</Text>
      <Text variant="statLabel">{props.label}</Text>
    </Box>
  )
}

export const biography =
  "घनश्याम अनुरागी जी का जन्म 15 दिसंबर 1972 को उत्तर प्रदेश के हमीरपुर में हुआ था। उनके माता-पिता का नाम श्रीमती गणेशी देवी और श्री देशराज अनुरागी है। उन्हें बचपन में साहित्य पढ़ना और विभिन्न राष्ट्रीय कार्यक्रम देखना पसंद था। उन्होंने अपनी प्रारंभिक पढ़ाई हमीरपुर में ही की थी। इसके बाद बुदेलखंड कॉलेज से उन्होंने एलएलबी और संपूर्णानंद संस्कृत कॉलेज से उन्होंने एमए आचार किया। उन्होंने कानून का अध्ययन किया और एक वकील के रूप में काम किया और अपने प्रारंभिक जीवन में एक कृषक के रूप में काम किया। \n" +
  "<br/><br/>" +
  "घनश्याम अनुरागी जी सबसे पहले 1990 के दशक की शुरुआत में एक जागरूक राजनेता के रूप में दिखाई देने लगे। उन्होंने अपने राजनीतिक सफर कि शुरुवात समाजवादी पार्टी से करी। वह एक जिम्मेदार नेता बने और सासंद का पद प्राप्त किया। वह लोकसभा में शामिल होने से पहले जिला पंचायत व ग्राम प्रधान का पद भी संभालते है। वर्ष 1995 में, उन्हें ग्राम प्रधान के रूप में निर्वाचित किया गया था। यहां तक कि ग्राम प्रधान के रूप में उन्होंने ग्राम खेड़ा शिलाजीत पर अच्छे कार्य करने के लिए 2 लाख रुपए की धनराशि से उन्हे सम्मानित किया गया था। \n" +
  "इसके दौरान उन्होंने मई 1998 में डॉ. कल्पना जी से शादी की। अब उनकी एक बेटी और एक बेटा है जिनका नाम आकांक्षा और आलौकिक है।\n" +
  "<br/><br/>" +
  "विवाह के 2 साल बाद सन 2000 में उन्हें जिला पंचायत जलाल पुर और अध्यक्ष जिला पंचायत हमीरपुर के रूप में चुने गए। जैसा कि आप जानते हैं, कड़ी मेहनत का फल हमेशा मिलता है, 2009 में जालौन गरौठा भोगनीपुर से अनुरागी जी संसद के सदस्य के रूप में वे चुने गए। उसके बाद साल 2010 में अनुरागी जी को राष्ट्रीय उपअध्यक्ष अखिल भारतीय कोरी समाज के रूप में निर्वाचित किया गया। सन 2021 में वे जालौन के जिला पंचायत के सदस्य, जिला पंचायत जालौन के अध्यक्ष और जिला पंचायत संगठन के सदस्य के रूप में भी उन्हें चुना गया। अनुरागी जी को जिला पंचायत के रूप मे भारत सरकार द्वारा 50 लाख की धनराशि से सम्मानित भी किया जा चुका है। वे जिला पंचायत अध्यक्ष के रूप में अपना सारा काम करते हैं। \n" +
  "<br/><br/>" +
  "घनश्याम अनुरागी एक राजनैतिक, सामाजिक और एक अच्छी छव वाले राजनेता है। वे हमेशा कमजोर और बेसहारा लोगो कि मदद करते हैं और उनके अधिकारों को दिलवाने के लिए कमजोरों के साथ खड़े रहते है। किसी भी आपदा के समय वे हमेशा लोगो की मदत करते दिखाई देते है। वे अपने आवास में एक अपनी रसोई चला कर प्रतिदिन 800-900 जरूरतमंद लोगों को भोजन करा रहे है। उन्होंने ऐसे ही न जाने कितने नेक कार्य किए जिसके लिए उन्हें कई बार सम्मानित व पुरुस्कृत भी किया जा चुका है। अनुरागी जी के इसी तरह के स्वार्थहीन और नेक कार्यों की वजह से उनका भारत सरकार में एक अहम स्थान है। अपने नाम को लोगों के लिए प्रेरणा बनाने के लिए कड़ी मेहनत की और यह मुकाम हासिल किया।"

export const image = {
  id: "7b588357-cdd2-5f42-860d-bb999bdf2e5b",
  alt: "घनश्याम अनुरागी",
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=100&h=92&q=50&fm=webp 100w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=200&h=184&q=50&fm=webp 200w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=400&h=368&q=50&fm=webp 400w",
          sizes: "(min-width: 400px) 400px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=400&h=368&q=50&fm=png",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=100&h=92&q=50&fm=png 100w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=200&h=184&q=50&fm=png 200w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/24pDVWYAGqV18dKDuEdFvb/e15ba713f75c597250652389bad7a78b/image_-_Edited.png?w=400&h=368&q=50&fm=png 400w",
        sizes: "(min-width: 400px) 400px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#080808",
    width: 400,
    height: 368,
  },
}

export default function StatList(props) {
  return (
    <Container width="fullbleed">
      <Section padding={5} radius="large" background="primary">
        <Flex responsive variant="baseline">
          <Box width="half">
            {/*{props.icon && (*/}
            {/*  <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />*/}
            {/*)}*/}
            <Heading>
              {/*{props.kicker && <Kicker>{props.kicker}</Kicker>}*/}
              {props.heading}
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: biography }} />
            {/*<FlexList wrap gap={4}>*/}
            {/*  {props.content.map((stat) => (*/}
            {/*    <li key={stat.id}>*/}
            {/*      <Stat {...stat} />*/}
            {/*    </li>*/}
            {/*  ))}*/}
            {/*</FlexList>*/}
            {/*<ButtonList links={props.links} reversed />*/}
          </Box>
          <Box width="half" center={true}>
            {props.image ? (
              <Nudge right={5} bottom={5}>
                <GatsbyImage
                  alt={props.image.alt}
                  image={getImage(props.image.gatsbyImageData)}
                />
              </Nudge>
            ) : (
              <Nudge right={5} bottom={5}>
                <GatsbyImage
                  alt={image.alt}
                  image={getImage(image.gatsbyImageData)}
                />
              </Nudge>
            )}
          </Box>
        </Flex>
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageStatListContent on HomepageStatList {
    id
    kicker
    heading
    text
    biography
    image {
      id
      alt
      gatsbyImageData
    }
    icon {
      id
      alt
      gatsbyImageData
    }
    content {
      id
      value
      label
      heading
    }
    links {
      id
      href
      text
    }
  }
`
