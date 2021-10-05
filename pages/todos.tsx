import { FC } from "react";
import { Provider } from "urql";
import { Modal, List, Typography, Spin, Col, Form, Input, Button } from "antd";
import {
  CloseCircleFilled,
  CheckCircleFilled,
  DeleteFilled,
} from "@ant-design/icons";
import classes from "../styles/Todos.module.css";

import {
  Todos as GqlTodo,
  useUpdateTodoMutation,
  useTodosSubscription,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "$gql";

import { initializeGqClient } from "../graphql/client";

const Todo = ({ todo: { todo_id, text, done }, onDelete, onToggle }) => {
  const confirmDelete = () => {
    Modal.confirm({
      title: `Delete "${text}"`,
      onOk: onDelete,
    });
  };
  return (
    <List.Item key={todo_id}>
      <Typography.Text className={classes.todoText} delete={done}>
        {text}
      </Typography.Text>
      <Button
        icon={done ? <CheckCircleFilled /> : <CloseCircleFilled />}
        danger={!done}
        type='primary'
        onClick={onToggle}
        className={classes.todoAction}
      />
      <Button
        icon={<DeleteFilled />}
        className={classes.todoAction}
        type='primary'
        onClick={confirmDelete}
      />
    </List.Item>
  );
};

const Todolist: FC = () => {
  const [{ fetching, data }] = useTodosSubscription();
  const [{ fetching: loading1 }, updateTodo] = useUpdateTodoMutation();
  const [{ fetching: loading2 }, deleteTodo] = useDeleteTodoMutation();
  return (
    <Col span={8} offset={8}>
      {fetching && <Spin size='large' />}
      <List
        size='default'
        dataSource={data?.latest_todos ?? []}
        loading={fetching || loading1 || loading2}
        bordered
        renderItem={(todo: GqlTodo) => {
          const { todo_id, text, done } = todo;
          const onDelete = () => deleteTodo({ todo_id });
          const onToggle = () => updateTodo({ todo_id, text, done: !done });
          return <Todo onDelete={onDelete} onToggle={onToggle} todo={todo} />;
        }}
      />
    </Col>
  );
};

const CreateTodoForm = () => {
  const [{ fetching }, mutate] = useAddTodoMutation();
  const [form] = Form.useForm();
  const handleSubmit = values => {
    mutate({ text: values.text });
    form.resetFields();
  };
  return (
    <Col span={8} offset={8}>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label='Text' name='text'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' loading={fetching} htmlType='submit'>
            Add new Todo
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default function Todos() {
  if (!process.browser) return null;
  return (
    <Provider value={initializeGqClient()}>
      <CreateTodoForm />
      <Todolist />
    </Provider>
  );
}
