import React, { Component } from 'react'
import ThemeContext from '../context/ThemeContext'
import './Toggle.css'

class Toggle extends Component {
  render () {
    // const { dark, toggleDark } = this.context
    return (
      <ThemeContext.Consumer>
        {value => (
          <button className={value.dark ? 'dark-switcher--light' : 'dark-switcher--dark'} onClick={value.toggleDark}>
          {value.dark ? <span role='img' aria-label='Sun'>Light mode 🌞</span> : <span role='img' aria-label='Moon'>Dark mode 🌙</span>}
          {/* <span role="img" aria-label="Snowman">&#9731;</span> */}
        </button>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Toggle