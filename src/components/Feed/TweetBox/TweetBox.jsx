import React from "react"
import './TweetBox.css'
import {Button, Avatar} from '@material-ui/core'
import db from './../../../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = React.useState('')
  const [tweetImage, setTweetImage] = React.useState('')

  const sendTweet = e => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Matthew Popov',
      username: 'realchamp',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }).then()

    setTweetMessage('')
    setTweetImage('')
  }



  return (
      <div className='tweetBox'>
        <form>
          <div className="tweetBox__input">
            <Avatar src='https://randomuser.me/api/portraits/women/44.jpg'/>
            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening" type='text'/>
          </div>
          <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className='tweetBox__imageInput' placeholder='Optional: place img URL' type='text'/>

          <Button disabled={tweetImage === '' && tweetMessage === ''} onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>

      </div>
  )
}

export default TweetBox
