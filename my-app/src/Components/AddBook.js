import { useQuery, useMutation } from "@apollo/client";
import { getAuthorQuery, addBookMutation,getBookQuery } from "../queries/queries";
import { Button, Form, Input,Select, } from "antd";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorQuery);
  const [addBook/*,{ data:addBookData, loading:addBookLoading, error:addBookError }*/] = useMutation(addBookMutation);
  const onFinish = (value) => {
    addBook({
      variables:{
        name: value.name,
        genre:value.genre,
        authorid:value.authorid
      },
    })
  
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  function displayAuthors() {
    return data.authors.map((author) => {
      return (
        <Select.Option key={author.id} value={author.id}>
          {author.name}
        </Select.Option>
      );
    });
  }

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
        label="Book name:"
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Genre:"
        name="genre"
      >
        <Input/>
      </Form.Item>

      <Form.Item
         label="Select"
         name="authorid"
      >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            {displayAuthors()}
          </Select>
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

export default AddBook;
