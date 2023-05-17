import './App.css';
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
import EditModal from './components/EditModal';
import { message } from 'antd';


function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    let oldUsers = [...users];
    let newUsers = oldUsers.map((o) => {
      if (o.key === editUser.key) {
        return editUser;
      }
      return o;
    })
    setUsers(newUsers);
    setIsModalOpen(false);
    messageApi.open({
      duration: 2,
      type: 'success',
      content: 'Data updated successfully',
    });
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleDelete = (o) => {
    let oldUsers = [...users];
    let newUsers = oldUsers.filter((u) => u.key !== o.key);
    setUsers(newUsers);
  }

  const handleEdit = (o) => {
    setEditUser(o);
    setIsModalOpen(true);
  }

  return (
    <div className="App">
      {contextHolder}
      <h1>Form Listing App</h1>
      <div className='form-container'>
        <FormComponent setUsers={setUsers} users={users} />
      </div>
      <div className="list-container">
        <ListComponent users={users} handleDelete={handleDelete} setIsModalOpen={setIsModalOpen} setEditUser={setEditUser} handleEdit={handleEdit} />
      </div>

      <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel} editUser={editUser} setEditUser={setEditUser} />
    </div>
  );
}

export default App;
