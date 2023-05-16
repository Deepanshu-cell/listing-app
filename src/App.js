import './App.css';
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
import EditModal from './components/EditModal';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleEdit = (o) => {
    setEditUser(o);
    setIsModalOpen(true);
    // let oldUsers = [...users];
    // let newUsers = oldUsers.map((u) => {
    //   if (o.key === u.key) {

    //   }
    // })
  }


  const handleDelete = (o) => {
    let oldUsers = [...users];
    let newUsers = oldUsers.filter((u) => u.key !== o.key);
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <h1>Form Listing App</h1>
      <div className='form-container'>
        <FormComponent setUsers={setUsers} users={users} />
      </div>
      <div className="list-container">
        <ListComponent users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>

      <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel} editUser={editUser}/>
    </div>
  );
}

export default App;
