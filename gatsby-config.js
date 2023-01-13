// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ghanshyamanuragi.in/",
    title: "घनश्याम अनुरागी - पूर्व सांसद, अध्यक्ष जिला पंचायत जालौन, भाजपा",
    author: `घनश्याम अनुरागी`,
    description:
      "घनश्याम अनुरागी एक भारतीय राजनीतिज्ञ और भारत की संसद के सदस्य हैं। वर्तमान में वे भारतीय जनता पार्टी से जिला पंचायत जालौन के अध्यक्ष हैं।",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-X2MN809TZ6",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "www.ghanshyamanuragi.in",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        content:  "13a0523e4dad4641b015335b2ac1856a",
        async: true,
        defer: true
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 2, // Percentage of an element's area that needs to be visible to launch animation
        // once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ghanshyam Anuragi - President of District Panchayat Jalaun from BJP",
        short_name: "Ghanshyam Anuragi",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#FFFFFF",
        theme_color: "#F47216",
        icon: "src/favicon.png",
      },
    },
  ],
}
