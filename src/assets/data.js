const rootUrl = `${process.env.PUBLIC_URL}/project_imgs`;

export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS}px)`,
  mobileM: `(min-width: ${sizes.mobileM}px)`,
  mobileL: `(min-width: ${sizes.mobileL}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopL: `(min-width: ${sizes.laptopL}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

export const projectsList = [
  {
    name: "Moviemanic 2.0",
    imgSrc: `${rootUrl}/moviemanic-2.png`,
    url: "https://moviemanic.vercel.app",
  },
  {
    name: "Geoid",
    imgSrc: `${rootUrl}/geoid.png`,
    url: "https://geoid.vercel.app",
  },
  {
    name: "Material UI Colors Demo",
    imgSrc: `${rootUrl}/material-ui-color-preview.png`,
    url: "https://samuel-username.github.io/Material-UI-Colors",
  },
  {
    name: "Moviemanic",
    imgSrc: `${rootUrl}/moviemanic.png`,
    url: "https://codermuyi.github.io/Movie-list",
  },
  {
    name: "My blackjack",
    imgSrc: `${rootUrl}/sam-blackjack.png`,
    url: "https://samuel-username.github.io/blackjack",
  },
  {
    name: "Huddle landing page",
    imgSrc: `${rootUrl}/huddle.png`,
    url: "https://samuel-username.github.io/landing_page",
  },
  {
    name: "Base Apparel",
    imgSrc: `${rootUrl}/base-apparel.png`,
    url: "https://samuel-username.github.io/coming-soon-landing-page",
  },
  /*
  {
    name: "Blogr (Desktop view is incomplete)",
    imgSrc: `${rootUrl}/blogr.png`,
    url: "https://samuel-username.github.io/blogr-landing-page"
  },
  { 
    name: "Markdown Hero",
    imgSrc: `${rootUrl}/coming-soon.png`,
    url: ""
  },
  */
];
