import React from 'react'
import { Button, Space, Table, Tag } from 'antd';

const ListComponent = ({ users, handleDelete, handleEdit}) => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Edit',
      key: 'edit',
      dataIndex: 'edit',
      render: (_, k) => (
        <Button type='primary' onClick={() => { handleEdit(k) }}>Edit</Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, k) => (
        <Button danger onClick={() => { handleDelete(k) }}>Delete</Button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={users} />
    </>
  )
}

export default ListComponent
