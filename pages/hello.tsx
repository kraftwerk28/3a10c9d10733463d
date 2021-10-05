import { useState } from "react";
import { Button, Modal } from "antd";

const Hello = () => {
  const [count, setCount] = useState(0);
  return (
    <Modal visible>
      <p>The count is: {count}</p>
      <Button type="dashed" size="large" onClick={() => setCount(c => c + 1)}>
        Hello, world
      </Button>
    </Modal>
  );
};

export default Hello;
