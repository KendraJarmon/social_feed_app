import React from 'react';

const Post = (props) => {
    console.log (props)
    return ( 

<div>
    <h3>{props.post.Name}</h3>
    <p>{props.post.Body}</p>
</div>
    );
}
 
export default Post;