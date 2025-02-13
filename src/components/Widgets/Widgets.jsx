import React from "react"
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
  return (
      <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className='widgets__searchIcon' />
          <input type="text" placeholder='Search Twitter'/>
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's Happening</h2>

          <TwitterTweetEmbed tweetId={"1293154394058432512"}/>

          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='reactjs'
            options={{height: 400}}
          />


        </div>

      </div>
  )
}

export default Widgets
