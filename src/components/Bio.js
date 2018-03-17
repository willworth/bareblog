import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './willcloseup.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Will Worth`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Will Worth</strong> who lives in Alicante and is 
          actively looking for work as a developer.{' '}
          <a href="https://twitter.com/worthcoding">
            You should say hello on Twitter.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
