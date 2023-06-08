import React, { useState } from 'react';
import PostList from './PostList/PostList';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import Post from './Post/Post';
import './App.css';
function App() {

  const [entries, setEntries] = useState([{'Name': 'Kathy', 'Body': 'Hello World'},{'Name': 'Paul', 'Body': 'Pineapple smoothie'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <CreatePostForm addNewEntry={addNewEntry} />
          </div>
          <div className='border-box'>
            <PostList entries = {entries}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
