import './App.css';
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
import EditModal from './components/EditModal';
import { message } from 'antd';
import { DELETE_USER, EDIT_USER, GET_USERS } from './API/Api_methods';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [tableLoading, setTableLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = async () => {
    const res = await EDIT_USER(editUser);
    console.log(res);
    if (res.modifiedCount) {
      getUsers();
      setIsModalOpen(false);
      messageApi.open({
        duration: 2,
        type: 'success',
        content: 'User updated successfully',
      });
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleDelete = async (o) => {
    const res = await DELETE_USER(o._id);
    if (res.deletedCount) {
      getUsers();
      messageApi.open({
        duration: 2,
        type: 'success',
        content: 'User deleted successfully',
      });
    }
  }

  const handleEdit = (o) => {
    setEditUser(o);
    setIsModalOpen(true);
  }

  const getUsers = async () => {
    setTableLoading(true);
    setTimeout(async () => {
      const res = await GET_USERS();
      setUsers(res);
      setTableLoading(false);

    }, 2000);
  }

  return (
    <div className="App">
      {contextHolder}
      <h1>Form Listing App</h1>
      <div className='form-container'>
        <FormComponent setUsers={setUsers} users={users} getUsers={getUsers} />
      </div>
      <div className="list-container">
        <ListComponent users={users} tableLoading={tableLoading} handleDelete={handleDelete} setIsModalOpen={setIsModalOpen} setEditUser={setEditUser} handleEdit={handleEdit} />
      </div>

      <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel} editUser={editUser} setEditUser={setEditUser} />
    </div>
  );
}

export default App;
