import React from 'react'
import { Button, Form, Input, message } from 'antd';

const FormComponent = ({ setUsers, users }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const formRef = React.createRef();

  const onFinish = (values) => {
    if (formValidation(values)) {
      values.key = users.length + 1;
      let newUsers = [...users, values];
      setUsers(newUsers);
      formRef.current.resetFields();
      messageApi.open({
        duration: 2,
        type: 'success',
        content: 'Form data submitted successfully',
      });
    }
  };



  const formValidation = (values) => {
    const { name, email, mobile } = values;

    if (name.length < 5) {
      messageApi.open({
        duration: 2,
        type: 'warning',
        content: 'name cannot be less than 5 characters',
      });
      return false;
    }

    if (mobile.length < 10 || mobile.length > 10) {
      messageApi.open({
        duration: 2,
        type: 'warning',
        content: 'Phone number must be of 10 digits',
      });
      return false;
    }

    return true
  }

  const validateMessages = {
    types: {
      email: 'Please input a valid email!',
    },

  };

  return (
    <>
      {contextHolder}
      <Form
        ref={formRef}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[{ required: true }]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  )
}

export default FormComponent
