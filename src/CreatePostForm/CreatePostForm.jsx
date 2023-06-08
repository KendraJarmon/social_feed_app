import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [Name, setName] = useState('');
    const [Body, setBody] = useState('');

    function handlesubmit(event) {
        event.preventDefault();
        let newEntry = {
            Name: Name,
            Body: Body
        };
        console.log(newEntry);
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handlesubmit} className='form-grid'>
            <div className='form-group'>
                <lable>Name</lable>
                <input className='form-control' value={Name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <lable>Body</lable>
                <input className='form-control' value={Body} onChange={(event) => setBody(event.target.value)} />
            </div>
            <button type='Post' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default CreatePostForm;