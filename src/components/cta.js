import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  FlexList,
  Heading,
  Icon,
  Section,
  Subhead,
  Text,
} from "./ui"
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import {MdLocationOn} from "react-icons/all";
import {IoCall} from "react-icons/all";
import {MdEmail} from "react-icons/all";
import {colors} from "../colors.css";

const contactDetails = [
  {
    id: "cc92ffcb-a209-545c-8a95-60c210e07e5e",
    heading: "Address",
    text: " 3338, Alaukik Bhavan, Patel Nagar - Rajendra Nagar Link Rd, Near Jila Panchayat, Officers Colony, Orai, Uttar Pradesh 285001",
    icon: <a style={{color: colors.background}} href="https://goo.gl/maps/Guf6AaWxfRd4e6og7" ><MdLocationOn size={32}/></a>,
  },
  {
    id: "380a631f-cdc0-5e20-9404-525cd39b29b5",
    heading: "Phone Number",
    text: "+91-9415144666",
    icon: <a style={{color: colors.background}} href="tel:+919415144666"><IoCall size={32}/></a>,
  },
  {
    id: "6fdbcc5e-9d30-5bb5-961f-00a6f555e3d2",
    heading: "Email Address",
    text: "contact@ghanshyamanuragi.in",
    icon: <a style={{color: colors.background}} href="mailto:contact@ghanshyamanuragi.in"><MdEmail size={32}/></a>,
  },
]

export function Product(props) {
  return (
    <Box center>
      <div style={{marginBottom: '12px'}}>{props.icon}</div>
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
    </Box>
  )
}

export default function HomepageCta(props) {
  const breakpoints = useBreakpoint()

  return (
    <Container width="fullbleed">
      <Section radius="large" background="primary" style={{paddingBottom: 0}}>
        <Heading center>{"Contact Now"}</Heading>
        <FlexList
          gap={4}
          variant="responsive"
          style={{ marginBottom: "32px", marginTop: "44px", padding: '0px 20px' }}
        >
          {contactDetails.map(product => (
            <li
              key={product.id}
              style={{ width: breakpoints.small ? "100%" : "33%", height: breakpoints.small ? '250px' : '200px'}}
            >
              <Product {...product} />
            </li>
          ))}
        </FlexList>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.132001235288!2d79.45042941557111!3d25.996492983530743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d7f3114fba95f%3A0xa43f5b2cbb899a29!2sGhanshyam%20Anuragi%20Residence%2FCamp%20Office!5e0!3m2!1sen!2sin!4v1674123702521!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
