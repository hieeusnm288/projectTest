import React, { useEffect, useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { getUserById } from "../Service/UserService";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function UpdateUser(props) {
  const { listUser, setListUser } = props;
  const [idUser, setIdUser] = useState(0);

  const [form] = Form.useForm();
  useEffect(() => {
    console.log(listUser);
    fillToForm(190);
  }, []);

  const fillToForm = async (id) => {
    let res = await getUserById(id);
    console.log(res);
    form.setFieldsValue({
      username: res.username,
      lastname: res.lastname,
      firstname: res.firstname,
      email: res.email,
      phone: res.phone,
      address: res.address,
      birthday: res.birthday,
    });
  };

  const onFinish = (value) => {
    form.resetFields();
    console.log(value);
  };

  return (
    <>
      <h2>Chỉnh Sửa Thông Tin</h2>
      <div className="container">
        <Form
          {...layout}
          initialValues={{ remember: true }}
          form={form}
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Họ"
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="firstname"
            label="Tên"
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Địa chỉ">
            <Input />
          </Form.Item>
          <Form.Item
            name="birthday"
            label="Ngày sinh"
            rules={[
              {
                required: true,
                message: "Please input your birthday!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Giới Tính"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}> Nam </Radio>
              <Radio value={0}> Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default UpdateUser;
