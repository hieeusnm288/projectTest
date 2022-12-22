import React, { useState } from "react";
import { Modal, Form, Input, Button, Radio } from "antd";
import { createUser } from "../Service/UserService";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

function ModalAddUser(props) {
  const { show, handleClose, handleUpdateTable } = props;
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState(0);

  const handleSaveUser = async () => {
    let res = await createUser(
      username,
      firstname,
      lastname,
      email,
      phone,
      address,
      birthday,
      gender
    );
    if (res && res.statusCode === 200) {
      handleClose();
      setUsername("");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setAddress("");
      setBirthday("");
      setGender("");

      handleUpdateTable({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
        birthday: birthday,
        gender: gender,
      });
    }
  };

  return (
    <>
      <Modal
        title="Tạo mới User"
        open={show}
        okButtonProps={{ style: { display: "none" } }}
        onCancel={handleClose}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={handleSaveUser}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "username"]}
            label="Tên đăng nhập"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "lastname"]}
            label="Họ"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "firstname"]}
            label="Tên"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Số điện thoại"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address"]}
            label="Địa chỉ"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "birthday"]}
            label="Ngày sinh"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
            rules={[
              {
                required: true,
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
              <Radio value="1"> Nam </Radio>
              <Radio value="0"> Nữ</Radio>
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
      </Modal>
    </>
  );
}

export default ModalAddUser;
