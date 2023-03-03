import { useMutation } from "@apollo/client";
import {addAuthorMutation} from "../queries/queries";
import { Button, Form, Input} from "antd";

function AddAuthor() {
  const [addAuthor,{ data, loading, error}] = useMutation(addAuthorMutation);
  const onFinish = (value) => {
    addAuthor({
      variables:{
        name: value.name,
        age:Number(value.age)
      },
    })
  
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Author name:"
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age:"
        name="age"
      >
        <Input/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          +
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddAuthor;
