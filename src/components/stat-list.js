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

export const biography = "जिला पंचायत अध्यक्ष जालौन डॉ घनश्याम अनुरागी जी जन सेवा के पथ पर विभिन्न दायित्वों का कुशलता पूर्वक निर्वाहन करते रहे है।\n" + "<br/><br/>" +
    "वे उत्तर प्रदेश  जिला हमीरपुर ग्राम खेड़ा शिलाजीत के मूल निवासी है अतः उनका जन्म 15 Dec,1972 को श्रीमती गणेशी देवी–श्री देशराज अनुरागी जी के घर हुआ।\n" +
    "उन्हें बचपन से ही साहित्य पढ़ना और देश –विदेश के नए नए आयामों के बारे में पढ़ने और जानने में रुचि रही है उनकी इसी रुचि को साकार करने में एक बड़ी बाधा आयी की उनके गांव के 20KM की परिधि में कोई विद्यालय नही था और इसी शिक्षा के आभाव के चलते उन्होंने बचपन में ही तय किया की वो कुछ ऐसा करेंगे की शिक्षा का अभाव क्षेत्र में किसी बच्चे को ना देखना पड़े परंतु इन कठिन परिस्थितियों में भी वे रुके नहीं उन्होंने अपनी प्रारंभिक शिक्षा हमीरपुर जिले से करके MA (आचार)– संपूर्णानंद महाविद्यालय वाराणसी, LLB – बुंदेलखंड महाविद्यालय झांसी, PhD – सनराइज महाविद्यालय अलवर (राजस्थान) से कर डॉक्टरेट की पदवी हासिल की तथा अपनी औपचारिक शिक्षा की यात्रा को विराम दिया किंतु सीखने और आगे बढ़ने को अपने जीवन में विशेष स्थान दिया। \n" + "<br/><br/>" +
    "इसी के चलते सन 1995 में केवल 23 वर्ष की आयु में वो ग्राम प्रधान बने तथा कार्यकाल के दौरान पुर जोर कोशिश करके शासन की सहायता से  श्री भरत कुमार बालिका इंटर कालेज की स्थापना की अतः उसकी अध्यक्षता भी संभाली केवल यही नहीं सरकारी सहायता प्राप्त कर कबीर बेसिक विद्यालय नई बस्ती राठ, हमीरपुर UP का निर्माण करवाया अतः उसके प्रबंधक भी रहे।\n" +"<br/><br/>" +
    "घनश्याम जी के अथक प्रयास और कार्यकुशलता को देखते हुए शासन के द्वारा उन्हें 2लाख की राशि से सम्मानित किया गया।\n" +
    "क्षेत्र में इनकी जनता सेवाकार्यो के प्रति लगन और कार्यकुशलता के कारण लोक प्रियता बहुत ही तेजी से बढ़ने लगी जिसके चलते सन 2000 में भारी मतों से जनता ने उन्हें क्षेत्र जलालपुर जिला हमीरपुर से जिला पंचायत सदस्य चुना और लोगो के इतने अताह प्रेम के कारण उन्होंने जिला पंचायत अध्यक्षी के चुनाव पर भी जीत हासिल की और मात्र 28 वर्ष की आयु में जिला पंचायत अध्यक्ष हमीरपुर UP बने।\n" +
    "इस घटना क्रम को देख कर लखनऊ विधानसभा में बैठे लोग भी ये समझ गए कि ये तो सिर्फ यात्रा का आरंभ है।\n" +
    "इसी यात्रा के दौरान 2003 में वे उत्तर प्रदेश सरकार में जनसंख्या एवं विकास आयोग के सदस्य भी बने।\n" +"<br/><br/>" +
    "सन 2009 में एक बार फिर कुशल नेतृत्व, दूर गामी सोच, मिलनसार, लोकप्रिय, खुश मिजाज छवि वाले माननीय डॉ घनश्याम अनुरागी जी को जालौन–गरोठा–भोगनीपुर की जनता ने संसद में उनको सांसद के तौर पर चुनकर जनता की सेवा करने के लिए भेजा।\n" +
    "सांसद कार्यकाल के दौरान उन्होंने कई अलग अलग दायित्वों का भी निर्वाहन किया जैसे मानव संसाधन विकास समिति के सदस्य, ऊर्जा एवं जल संसाधन,आवास,MP led, स्टील,विधायन SC ST MPO महा सचिव , SC ST  संगठन महा सचिव अतः 2010 में अखिल भारतीय कोरी समाज के राष्ट्रीय उपाध्यक्ष का दायित्व भी मिला जिन सभी को उन्होंने बखूबी निभाया। \n" +
    "जनता के कार्यों के प्रति लगनशील हमेशा जनता के हित की बात को शीर्ष नेतृत्व ,प्रदेश व क्षेत्र वासियों  के समक्ष रखना और उन पर डट कर खड़े रहना ही उनका स्वभाव देखा गया है।\n" +
    "इन्ही गुडो और कार्यकुशलता के चलते 2021 में भारतीय जनता पार्टी से उन्हे जिला पंचायत क्षेत्र रेंधर जिला जालौन से टिकट मिला अतः क्षेत्र वासियों में भरपूर प्रेम और आशीर्वाद के साथ उन्हें जिला पंचायत सदस्य चुना इसके साथ ही जिला पंचायत अध्यक्षी का चुनाव जीत कर वे मौजूदा काल में जिला पंचायत अध्यक्ष जालौन का कार्यभार संभाल रहे है। वे हमेशा से ही कमजोर और बेसहारा लोगो की मदद करने तथा अधिकार के लिए साथ खड़े रहे है इसी स्वार्थहीन स्वभाव व कर्तव्य परायणता के चलते अपने निज निवास पर अपनी रसोई नामक मुहीम चला कर रोजाना 800–900 जरूरतमंदों को साफ स्वच्छ भोजन सम्मनापूर्वक करवाते है , हाल ही में उन्हें जिला पंचायत कमेटी का प्रदेश अध्यक्ष , अखिल भारतीय कोरी समाज से कार्य कारी राष्ट्रीय अध्यक्ष भी चुना गया साथ ही जिले में उनके कार्यों को देखते हुए मुख्यमंत्री जी के हाथो से 50 लाख की राशि से सम्मानित किया गया।\n" +
    "डॉ घनश्याम अनुरागी जी के जनता के प्रति कार्यों और प्रदेश में एक दमदार छवि के कारण उनका केंद्र व प्रदेश सरकार में एक अहम स्थान है।"

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
              {props.bio ? "अपनी रसोई"  : props.heading}
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: props.bio || biography }} />
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
