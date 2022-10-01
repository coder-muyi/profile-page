const rootUrl = `${process.env.PUBLIC_URL}/project_imgs`

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const projectsList = [
  { 
    name: "Geoid",
    imgSrc: `${rootUrl}/geoid.png`,
    url: "https://geoid.vercel.app"
  },
  {
    name: "Material UI Colors Demo",
    imgSrc: `${rootUrl}/material-ui-color-preview.png`,
    url: "https://samuel-username.github.io/Material-UI-Colors",
  },
  {
    name: "Moviemanic",
    imgSrc: `${rootUrl}/moviemanic.png`,
    url: "https://samuel-username.github.io/Movie-list"
  },
  {
    name: "My blackjack",
    imgSrc: `${rootUrl}/sam-blackjack.png`,
    url: "https://samuel-username.github.io/blackjack"
  },
  {
    name: "Huddle landing page",
    imgSrc: `${rootUrl}/huddle.png`,
    url: "https://samuel-username.github.io/landing_page"
  },
  {
    name: "Base Apparel",
    imgSrc: `${rootUrl}/base-apparel.png`,
    url: "https://samuel-username.github.io/coming-soon-landing-page"
  },
  {
    name: "Blogr (Desktop view is incomplete)",
    imgSrc: `${rootUrl}/blogr.png`,
    url: "https://samuel-username.github.io/blogr-landing-page"
  },
  /*
  { 
    name: "Markdown Hero",
    imgSrc: `${rootUrl}/coming-soon.png`,
    url: ""
  },
  { 
    name: "Moviemanic 2.0",
    imgSrc: `${rootUrl}/coming-soon.png`,
    url: ""
  }
  */
]
