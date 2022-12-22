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
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
function UpdateUser() {
  const [getuser, setGetUser] = useState({});
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState(0);
  useEffect(() => {
    getUserId(190);
    setUsername(getuser.name);
    setFirstname(getuser.firstname);
    setLastname(getuser.lastname);
    setEmail(getuser.email);
    setPhone(getuser.phone);
    setAddress(getuser.address);
    setBirthday(getuser.birthday);
    setGender(getuser.gender);
  }, []);

  const getUserId = async (id) => {
    let res = await getUserById(id);
    console.log(res);
    if (res) {
      setGetUser(res);
    }
    console.log("check getUser:>>>");
  };
  return (
    <>
      <h2>Chỉnh Sửa Thông Tin</h2>
      <div className="container">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={0}
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
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "address"]} label="Địa chỉ">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "birthday"]}
            label="Ngày sinh"
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
      </div>
    </>
  );
}

export default UpdateUser;
