import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const EditModal = ({ isModalOpen, setIsModalOpen, handleOk, handleCancel, editUser }) => {

    const formRef = React.createRef();

    return (
        <>
            <Button type="primary" onClick={() => { setIsModalOpen(true) }}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    ref={formRef}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        initialValue={editUser?.name}
                    >
                        <Input size='large' />
                    </Form.Item>

                    <Form.Item
                        label="Mobile"
                        name="mobile"
                        rules={[{ required: true }]}
                        initialValue={editUser?.mobile}
                    >
                        <Input size='large' />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: "email" }]}
                        initialValue={editUser?.email}
                    >
                        <Input size='large' />
                    </Form.Item>

                    {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>

            </Modal>
        </>
    );
};

export default EditModal;