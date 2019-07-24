import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import '../fonts/pyidaungsu.css'
import './global.css'

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    'body': {
      background: '#292929'
      // bodyFontFamily: ['georgia']
    },
    'p, h1, small, footer': {
      color: '#e7eae6'
    },
    'a': {
      // color: '#bb86fc',
      // color: '#03dac6',
      color: '#03f193',
      // color: '#cf6679', //red
      boxShadow: 'none'
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
