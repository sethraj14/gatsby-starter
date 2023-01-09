import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import NavItemGroup from "./nav-item-group"
import BrandLogo from "./brand-logo"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header style={{backgroundColor: 'white'}}>
      <Container className={desktopHeaderNavWrapper} >
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={6}>
              <li key={"nav-1"} style={{color: '#F47216'}}>
                <NavLink to={"/"}>{"Home"}</NavLink>
              </li>
              <li key={"nav-2"} style={{color: '#F47216'}}>
                <NavLink to={"/about"}>{"Biography"}</NavLink>
              </li>
              <li key={"nav-3"} style={{color: '#F47216'}}>
                <NavLink to={"/gallery"}>{"Gallery"}</NavLink>
              </li>
              <li key={"nav-4"} style={{color: '#F47216'}}>
                <NavLink to={"/media"}>{"Media Coverage"}</NavLink>
              </li>
              <li key={"nav-5"} style={{color: '#F47216'}}>
                <NavLink to={"/apni_rasoi"}>{"Apni Rasoi"}</NavLink>
              </li>
              {/*<li key={"nav-6"} style={{color: '#F47216'}}>*/}
              {/*  <NavLink to={"/contact"}>{"Contact"}</NavLink>*/}
              {/*</li>*/}
            </FlexList>
          </nav>
          {/*<div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>*/}
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo width={40} height={40}/>
            </NavLink>
          </span>
          <Flex>
            <Space />
            {/*<div>*/}
            {/*  {cta && (*/}
            {/*    <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>*/}
            {/*      {cta.text}*/}
            {/*    </Button>*/}
            {/*  )}*/}
            {/*</div>*/}
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu color={"#F47216"}/>}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              <li key={"nav-1"} className={mobileNavLink} style={{color: '#F47216'}}>
                <NavLink to={"/"}>{"Home"}</NavLink>
              </li>
              <li key={"nav-2"} className={mobileNavLink} style={{color: '#F47216'}}>
                <NavLink to={"/about"}>{"Biography"}</NavLink>
              </li>
              <li key={"nav-3"} className={mobileNavLink}  style={{color: '#F47216'}}>
                <NavLink to={"/gallery"}>{"Gallery"}</NavLink>
              </li>
              <li key={"nav-4"} className={mobileNavLink} style={{color: '#F47216'}}>
                <NavLink to={"/media"}>{"Media Coverage"}</NavLink>
              </li>
              <li key={"nav-5"} className={mobileNavLink} style={{color: '#F47216'}}>
                <NavLink to={"/apni_rasoi"}>{"Apni Rasoi"}</NavLink>
              </li>
              {/*<li key={"nav-6"} className={mobileNavLink} style={{color: '#F47216'}}>*/}
              {/*  <NavLink to={"/contact"}>{"Contact"}</NavLink>*/}
              {/*</li>*/}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
