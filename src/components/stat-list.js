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
  "<br/>" +
  "अनुरागी : व्यक्तित्व\n" +
  "<br/><br/>" +
  "# समाज के सुविधा वंचित, साधन विपन्न, गरीब वर्ग को सम्मान जनक जीवन स्तर प्रदान करने, पिछड़े वर्ग को विकास की मुख्य धारा में लाने, क्षेत्र में सामाजिक, राजनैतिक जागृति, आर्थिक विकास एवं समरसता की आकांक्षा के साथ जन सेवा की अलौकिक प्रेरणा से प्रेरित जिला पंचायत अध्यक्ष जालौन डॉ० घनश्याम अनुरागी जी राजनैतिक क्षितिज में जन सेवा के नित नए प्रतिमान स्थापित कर रहें हैं । राजनैतिक पटल पर विभिन्न दायित्वों का कुशलता पूर्वक निर्वहन करने वाले बुंदेलखंड क्षेत्र के कद्दावर जन प्रतिनिधि जनपद जालौन, झाँसी, कानपुर देहात, हमीरपुर क्षेत्र में जन जन की आकांक्षा का प्रतीक हैं ।\n" +
  "\n" +
  "<br/><br/>"

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

const buttonLinks = [
  {
    id: "button-more",
    href: "/about",
    text: "और पढ़े\n",
  },
]

export default function StatList(props) {
  const transitionProps = props.withTransition
    ? {
        "data-sal": "zoom-in",
        "data-sal-delay": "200",
        "data-sal-duration": "1000",
        "data-sal-easing": "ease",
      }
    : {}
  return (
    <Container width="fullbleed">
      <Section
        padding={5}
        radius="large"
        background="primary"
        {...transitionProps}
      >
        <Flex responsive variant="baseline">
          <Box width="half">
            {/*{props.icon && (*/}
            {/*  <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />*/}
            {/*)}*/}
            <Heading
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              {/*{props.kicker && <Kicker>{props.kicker}</Kicker>}*/}
              {props.head || props.heading}
            </Heading>
            {props.bio ? (
              <div
                dangerouslySetInnerHTML={{ __html: props.bio || biography }}
              />
            ) : (
              <div
                data-sal="slide-up"
                data-sal-delay="1000"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: props.bio || biography }}
              />
            )}
            {!props.bio ? <ButtonList reversed links={buttonLinks} /> : null}
            {/*<FlexList wrap gap={4}>*/}
            {/*  {props.content.map((stat) => (*/}
            {/*    <li key={stat.id}>*/}
            {/*      <Stat {...stat} />*/}
            {/*    </li>*/}
            {/*  ))}*/}
            {/*</FlexList>*/}
            {/*<ButtonList links={props.links} reversed />*/}
          </Box>
          <Box
            width="half"
            center={true}
            data-sal="slide-up"
            data-sal-duration="100"
            data-sal-delay="1000"
            data-sal-easing="ease"
          >
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
