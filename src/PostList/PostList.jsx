import React from 'react';
import Post from '../Post/Post';

const PostList = (props) => {
    
    return (  
        <div>
            {props.entries.map((post)=>(
                <Post post = {post}/>
            ))}
        </div>
    );
}
 
export default PostList;