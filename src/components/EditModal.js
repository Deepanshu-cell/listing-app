import React, { useState } from 'react';
import { Modal } from 'antd';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditModal = ({ isModalOpen, setIsModalOpen, handleOk, handleCancel, editUser, setEditUser }) => {


    const handleChange = (e) => {
        setEditUser({
            ...editUser,
            [e.target.name]: e.target.value
        })

    }

    return (
        <>

            <Modal title="Edit User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" value={editUser?.name} onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Mobile" value={editUser?.mobile} name="mobile" onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={editUser?.email} name='email' onChange={(e) => { handleChange(e) }} />
                    </Form.Group>

                </Form>
            </Modal>
        </>
    );
};

export default EditModal;