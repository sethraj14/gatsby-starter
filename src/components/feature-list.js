import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Heading>
            {'टाइमलाइन'}
          </Heading>
          {<Text>{"डॉ घनश्याम अनुरागी की राजनीतिक यात्रा"}</Text>}
        </Box>
        {featuresList.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`


const featuresList = [
    {
        "id": "87d5969d-963b-5620-a492-8a31d411a38b",
        "kicker": "",
        "heading": "1995",
        "text": "निर्वाचित ग्राम प्रधान (खेड़ा शिलाजीत, थाना-जरिया, जिला-हमीरपुर)\n",
        // "links": [
        //     {
        //         "id": "0dfa8af8-69f6-5ca3-9919-0dddf2918b7c",
        //         "href": "#!",
        //         "text": "Learn more"
        //     }
        // ],
        // "image": {
        //     "id": "60e850dc-b065-5e15-88cf-9a427f43baeb",
        //     "gatsbyImageData": {
        //         "images": {
        //             "sources": [
        //                 {
        //                     "srcSet": "https://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=592&h=444&q=50&fm=webp 592w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=1184&h=888&q=50&fm=webp 1184w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=2368&h=1776&q=50&fm=webp 2368w",
        //                     "sizes": "(min-width: 2368px) 2368px, 100vw",
        //                     "type": "image/webp"
        //                 }
        //             ],
        //             "fallback": {
        //                 "src": "https://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=2368&h=1776&q=50&fm=png",
        //                 "srcSet": "https://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=592&h=444&q=50&fm=png 592w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=1184&h=888&q=50&fm=png 1184w,\nhttps://images.ctfassets.net/d5ql4rml3t6t/5ZkiE2jhld2iLz7VBmMEeX/808b52dde7f8d2a7873994d221055b84/Developer.png?w=2368&h=1776&q=50&fm=png 2368w",
        //                 "sizes": "(min-width: 2368px) 2368px, 100vw"
        //             }
        //         },
        //         "layout": "constrained",
        //         "backgroundColor": "#f8c808",
        //         "width": 2368,
        //         "height": 1776
        //     },
        //     "alt": "Developer Floating"
        // }
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2000",
        "text": "निर्वाचित जिला पंचायत सदस्य (जलालपुर क्षेत्र)\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2000",
        "text": "निर्वाचित अध्यक्ष जिला पंचायत (हमीरपुर)\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2009",
        "text": "निर्वाचित सांसद (जालौन-45)\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2010",
        "text": "मनोनीत-राष्ट्रीय उपाध्यक्ष अखिल भारतीय कोली (कोरी) समाज\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2021",
        "text": "निर्वाचित जिला पंचायत सदस्य (रेंडर-जालौन)\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2021",
        "text": "निर्वाचित अध्यक्ष जिला पंचायत (जालौन)\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2021",
        "text": "मनोनीत-प्रदेश अध्यक्ष जिला पंचायत संगठन (यूपी)\n",
    },
    {
        "id": "c3ef1998-2eb3-57ed-8392-e38e00b5035a",
        "kicker": "",
        "heading": "2021",
        "text": "मनोनीत-कार्यकारी राष्ट्रीय अध्यक्ष अखिल भारतीय कोली (कोरी) समाज\n",
    }
];
