import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
    }
  };
  const fetchNotes = async () => {
    const { data } = await axios.get('/api/notes');
    setNotes(data);
  };
  console.log(notes);
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>My Notes</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Add new entry</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {notes.map((note) => (
        <div key={note._id}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>{note.title}</h1>
            <div>
              <button>
                <a href={`/note/${note._id}`} style={{ padding: '10px' }}>
                  Edit
                </a>
              </button>
              <button onClick={() => deleteHandler(note._id)}>Delete</button>
            </div>
          </div>

          <p>{note.category}</p>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MyNotes;
