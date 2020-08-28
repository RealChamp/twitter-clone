import React, {useEffect} from "react"
import './Feed.css'
import TweetBox from './TweetBox/TweetBox'
import Post from './Post/Post'
import db from './../../firebase'

function Feed() {
  const [posts, setPosts] = React.useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
      <div className="feed">

        {/* Header */}
        <div className='feed__header'>
          <h2>Home</h2>
        </div>

        {/* TweetBox */}
        <TweetBox/>
        {/* Posts */}
        {posts.map(post => (
            <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}/>
        ))}

      </div>
  )
}

export default Feed
