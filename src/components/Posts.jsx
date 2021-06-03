import {Post} from './Post'

export function Posts ({posts, removePost}) {
    return <div>
        {
            posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} removePost={removePost}/>
            ))
        }
    </div>
}