import React, { useState } from 'react';
import Task from './Task';

function Home() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  
 
    const submitHandle = (e) => {
        e.preventDefault();
        setTask([...task, { title, description }]);
        setTitle('');
        setDescription('');
      };

      const deletetask = (index) =>{
            const updatedTask = [...task];
            updatedTask.splice(index,1);
            setTask(updatedTask);
      }

  return (
    <>
      <form onSubmit={submitHandle}>
        <div
          className="container"
          style={{
            width: '60%',
            margin: 'auto',
            backgroundColor: '#757575',
            height: 'auto',
            paddingTop: '3rem',
            paddingBottom : '1rem',
            boxSizing: 'border-box',
            paddingLeft: '4rem',
            paddingRight: '4rem',
          }}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-dark"
              style={{ width: '5rem', cursor: 'pointer' }}>
              Add
            </button>
          </div>

          {task.map((item, index) => (
            <Task key={index} title={item.title} description={item.description} onDelete = { ()=>  deletetask(index)}/>
          ))}
        </div>
      </form>
    </>
  );
}

export default Home;