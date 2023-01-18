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

const rasoi_1 = {
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=240&h=181&q=50&fm=webp 240w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=480&h=361&q=50&fm=webp 480w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=960&h=722&q=50&fm=webp 960w",
          sizes: "(min-width: 960px) 960px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=960&h=722&fl=progressive&q=50&fm=jpg",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=240&h=181&fl=progressive&q=50&fm=jpg 240w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=480&h=361&fl=progressive&q=50&fm=jpg 480w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/3jwMPzNptR5bEV32rTjJI5/70180f00a7fb6790b078dcdda1fe4443/rasoi_1.jpg?w=960&h=722&fl=progressive&q=50&fm=jpg 960w",
        sizes: "(min-width: 960px) 960px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#d8a838",
    width: 960,
    height: 722,
  },
  alt: "phoenix-baker",
}
const rasoi_2 = {
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=512&h=385&q=50&fm=webp 512w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=1024&h=770&q=50&fm=webp 1024w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=2048&h=1540&q=50&fm=webp 2048w",
          sizes: "(min-width: 2048px) 2048px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=2048&h=1540&fl=progressive&q=50&fm=jpg",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=512&h=385&fl=progressive&q=50&fm=jpg 512w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=1024&h=770&fl=progressive&q=50&fm=jpg 1024w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/36SInHlHl4fTXQoZVq539a/25e73f61453eedcfbe74fd446edc6717/rasoi_2.jpg?w=2048&h=1540&fl=progressive&q=50&fm=jpg 2048w",
        sizes: "(min-width: 2048px) 2048px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#c8c8b8",
    width: 2048,
    height: 1540,
  },
  alt: "jermaine-hall",
}

const rasoi_3 = {
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=320&h=147&q=50&fm=webp 320w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=640&h=294&q=50&fm=webp 640w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=1280&h=588&q=50&fm=webp 1280w",
          sizes: "(min-width: 1280px) 1280px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=1280&h=588&fl=progressive&q=50&fm=jpg",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=320&h=147&fl=progressive&q=50&fm=jpg 320w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=640&h=294&fl=progressive&q=50&fm=jpg 640w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/2o7TihlyIkjW1nVbFBGKdj/636f514e2523cca5042c2442d7eb6245/rasoi_3.jpg?w=1280&h=588&fl=progressive&q=50&fm=jpg 1280w",
        sizes: "(min-width: 1280px) 1280px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#080808",
    width: 1280,
    height: 588,
  },
  alt: "tam-seiko",
}

const rasoi_4 = {
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=512&h=385&q=50&fm=webp 512w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=1024&h=770&q=50&fm=webp 1024w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=2048&h=1540&q=50&fm=webp 2048w",
          sizes: "(min-width: 2048px) 2048px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=2048&h=1540&fl=progressive&q=50&fm=jpg",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=512&h=385&fl=progressive&q=50&fm=jpg 512w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=1024&h=770&fl=progressive&q=50&fm=jpg 1024w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5EVs6Ds7FdtCJvw0GjBxHO/31f10992dbcccb7435492a358a8e9d9f/rasoi_4.jpg?w=2048&h=1540&fl=progressive&q=50&fm=jpg 2048w",
        sizes: "(min-width: 2048px) 2048px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#a8a898",
    width: 2048,
    height: 1540,
  },
  alt: "drew-smith",
}

const rasoi_5 = {
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=512&h=385&q=50&fm=webp 512w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=1024&h=770&q=50&fm=webp 1024w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=2048&h=1540&q=50&fm=webp 2048w",
          sizes: "(min-width: 2048px) 2048px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=2048&h=1540&fl=progressive&q=50&fm=jpg",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=512&h=385&fl=progressive&q=50&fm=jpg 512w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=1024&h=770&fl=progressive&q=50&fm=jpg 1024w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5DwCWPkukf19FhrHTcpIJr/cbcd4b6c18dbcdb7433d8f6375fb0991/rasoi_5.jpg?w=2048&h=1540&fl=progressive&q=50&fm=jpg 2048w",
        sizes: "(min-width: 2048px) 2048px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#888888",
    width: 2048,
    height: 1540,
  },
  alt: "lana-steiner",
}

const rasoi_6 = {
  gatsbyImageData: {
    images: {
      sources: [
        {
          srcSet:
            "https://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=320&h=213&q=50&fm=webp 320w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=640&h=427&q=50&fm=webp 640w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=1280&h=853&q=50&fm=webp 1280w",
          sizes: "(min-width: 1280px) 1280px, 100vw",
          type: "image/webp",
        },
      ],
      fallback: {
        src: "https://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=1280&h=853&fl=progressive&q=50&fm=jpg",
        srcSet:
          "https://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=320&h=213&fl=progressive&q=50&fm=jpg 320w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=640&h=427&fl=progressive&q=50&fm=jpg 640w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/NNg898VTuwbnld5ohcDdC/8b204630b00beee1a878a0d17f230025/rasoi_6.jpg?w=1280&h=853&fl=progressive&q=50&fm=jpg 1280w",
        sizes: "(min-width: 1280px) 1280px, 100vw",
      },
    },
    layout: "constrained",
    backgroundColor: "#f88808",
    width: 1280,
    height: 853,
  },
  alt: "amy-hansen",
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
    text: "आगे पढ़े\n",
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
                style={{ fontWeight: "600" }}
                dangerouslySetInnerHTML={{ __html: props.bio || biography }}
              />
            ) : (
              <div
                style={{ fontWeight: "600" }}
                data-sal="slide-up"
                data-sal-delay="1000"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: props.bio || biography }}
              />
            )}
            {!props.bio ? <ButtonList reversed links={buttonLinks} /> : null}
          </Box>
          <Box
            width="half"
            center={true}
            data-sal="slide-up"
            data-sal-duration="100"
            data-sal-delay="1000"
            data-sal-easing="ease"
          >
            {props.img ? (
              <Nudge right={5} bottom={5}>
                <GatsbyImage
                  alt={props.img.alt}
                  image={getImage(props.img.gatsbyImageData)}
                />
              </Nudge>
            ) : props.page === "rasoi" ? (
              <>
                <Nudge bottom={5}>
                  <GatsbyImage
                    alt={rasoi_6.alt}
                    image={getImage(rasoi_6.gatsbyImageData)}
                  />
                  <GatsbyImage
                      alt={rasoi_1.alt}
                      image={getImage(rasoi_1.gatsbyImageData)}
                  />
                    <GatsbyImage
                      alt={rasoi_2.alt}
                      image={getImage(rasoi_2.gatsbyImageData)}
                    />
                </Nudge>
                {/*<Nudge right={5} bottom={5}>*/}
                {/*  <GatsbyImage*/}
                {/*    alt={rasoi_1.alt}*/}
                {/*    image={getImage(rasoi_1.gatsbyImageData)}*/}
                {/*  />*/}
                {/*</Nudge>*/}
                {/*<Nudge right={5} bottom={5}>*/}
                {/*  <GatsbyImage*/}
                {/*    alt={rasoi_2.alt}*/}
                {/*    image={getImage(rasoi_2.gatsbyImageData)}*/}
                {/*  />*/}
                {/*</Nudge>*/}
                {/*<Nudge right={5} bottom={5}>*/}
                {/*  <GatsbyImage*/}
                {/*    alt={rasoi_3.alt}*/}
                {/*    image={getImage(rasoi_3.gatsbyImageData)}*/}
                {/*  />*/}
                {/*</Nudge>*/}
                {/*<Nudge right={5} bottom={5}>*/}
                {/*  <GatsbyImage*/}
                {/*    alt={rasoi_4.alt}*/}
                {/*    image={getImage(rasoi_4.gatsbyImageData)}*/}
                {/*  />*/}
                {/*</Nudge>*/}
                {/*<Nudge right={5} bottom={5}>*/}
                {/*  <GatsbyImage*/}
                {/*    alt={rasoi_5.alt}*/}
                {/*    image={getImage(rasoi_5.gatsbyImageData)}*/}
                {/*  />*/}
                {/*</Nudge>*/}
              </>
            ) : props.image ? (
              <Nudge right={5} bottom={5}>
                <GatsbyImage
                  alt={image.alt}
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

const styles = {
  img: {
    width: "50%",
    height: "auto",
  },
}
