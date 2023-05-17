import React from 'react'
import { Button, Space, Table, Popconfirm } from 'antd';


const ListComponent = ({ users, handleDelete, handleEdit, tableLoading }) => {

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
        <Popconfirm
          title="Delete the User"
          description="Are you sure to delete this User?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => { handleDelete(k) }}
        >
          <Button danger >Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={users} loading={tableLoading} />
    </>
  )
}

export default ListComponent
