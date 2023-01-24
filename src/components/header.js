import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  InteractiveIcon,
  NavLink,
  Nudge,
  Space,
  VisuallyHidden,
} from "./ui"
import {
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavLink,
  mobileNavOverlay,
  mobileNavSVGColorWrapper,
} from "./header.css"
import BrandLogo from "./brand-logo"
import { colors } from "../colors.css"

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
  let location = ""
  if (typeof window !== "undefined") {
    location = window?.location?.pathname
  }

  console.log("test", location === "/about/")

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header style={{ backgroundColor: "white" }}>
      <Container className={desktopHeaderNavWrapper}>
        <Flex row variant="spaceBetween" style={{ paddingLeft: "25%" }}>
          <NavLink
            to="/"
            style={{
              // backgroundColor: colors.background,
              margin: 0,
              position: "absolute",
              left: 10,
              top: 0,
              bottom: 0,
              height: "100%",
              // borderRight: `5px solid ${colors.active}`,
            }}
          >
            <VisuallyHidden>Home</VisuallyHidden>
            <Flex
              row
              alignItems={"center"}
              style={{
                justifyContent: "center",
                padding: "0px 20px",
                height: "100%",
                borderRight: "2px solid white",
              }}
            >
              <BrandLogo />
              {/*<Text*/}
              {/*  withTransition={false}*/}
              {/*  style={{*/}
              {/*    color: colors.text,*/}
              {/*    fontFamily: theme.fonts.mono,*/}
              {/*    fontSize: theme.fontSizes[3],*/}
              {/*    fontWeight: theme.fontWeights.extrabold,*/}
              {/*    margin: 0,*/}
              {/*  }}*/}
              {/*>*/}
              {/*  {"Ghanshyam"}*/}
              {/*  <br />*/}
              {/*  {"Anuragi"}*/}
              {/*</Text>*/}
            </Flex>
          </NavLink>
          <nav>
            <FlexList gap={5}>
              <li key={"nav-1"} style={activeStyle(location === "/")}>
                <NavLink to={"/"}>{"Home"}</NavLink>
              </li>
              <li key={"nav-2"} style={activeStyle(location === "/about/")}>
                <NavLink to={"/about"}>{"Biography"}</NavLink>
              </li>
              <li key={"nav-3"} style={activeStyle(location === "/gallery/")}>
                <NavLink to={"/gallery"}>{"Gallery"}</NavLink>
              </li>
              <li
                key={"nav-3"}
                style={activeStyle(location === "/video-gallery/")}
              >
                <NavLink to={"/video-gallery"}>{"Videos"}</NavLink>
              </li>
              <li key={"nav-4"} style={activeStyle(location === "/media/")}>
                <NavLink to={"/media"}>{"Media Coverage"}</NavLink>
              </li>
              <li
                key={"nav-5"}
                style={activeStyle(location === "/apni_rasoi/")}
              >
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
              <BrandLogo width={40} height={40} />
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
                {isOpen ? <X /> : <Menu color={"#F47216"} />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              <li
                key={"nav-1"}
                className={mobileNavLink}
                style={{
                  color: location === "/" ? colors.active : colors.background,
                }}
              >
                <NavLink to={"/"}>{"Home"}</NavLink>
              </li>
              <li
                key={"nav-2"}
                className={mobileNavLink}
                style={{
                  color:
                    location === "/about/" ? colors.active : colors.background,
                }}
              >
                <NavLink to={"/about"}>{"Biography"}</NavLink>
              </li>
              <li
                key={"nav-3"}
                className={mobileNavLink}
                style={{
                  color:
                    location === "/gallery/"
                      ? colors.active
                      : colors.background,
                }}
              >
                <NavLink to={"/gallery"}>{"Gallery"}</NavLink>
              </li>
              <li
                key={"nav-3"}
                className={mobileNavLink}
                style={{
                  color:
                    location === "/video-gallery/"
                      ? colors.active
                      : colors.background,
                }}
              >
                <NavLink to={"/video-gallery"}>{"Videos"}</NavLink>
              </li>
              <li
                key={"nav-4"}
                className={mobileNavLink}
                style={{
                  color:
                    location === "/media/" ? colors.active : colors.background,
                }}
              >
                <NavLink to={"/media"}>{"Media Coverage"}</NavLink>
              </li>
              <li
                key={"nav-5"}
                className={mobileNavLink}
                style={{
                  color:
                    location === "/apni_rasoi/"
                      ? colors.active
                      : colors.background,
                }}
              >
                <NavLink to={"/apni_rasoi"}>{"Apni Rasoi"}</NavLink>
              </li>
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}

const activeStyle = isActive => ({
  color: isActive ? colors.active : colors.background,
  borderBottom: isActive ? `3px solid ${colors.active}` : "none",
  paddingBottom: 12,
})
