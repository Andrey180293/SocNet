import React from "react";
import x from "./Message.module.css";
import { Button } from "antd";

const Message = (props) => {
  return (
    <div className={x.message}>
      {props.message}{" "}
      <Button type="link" onClick={() => props.deletMessage(props.id)}>
        delet
      </Button>{" "}
    </div>
  );
};
export default Message;
