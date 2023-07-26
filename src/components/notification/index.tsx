import { Popover } from "antd";
import React, { useState } from "react";
import { NotifyBell } from "../../_shared/assets/svg";
const Notification = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      content={
        <div className={"kwii-text-center"}>
          You don't have any Notification
        </div>
      }
      placement={"bottom"}
      trigger={"click"}
      visible={open}
      onOpenChange={(prev) => setOpen(prev)}
    >
      <div
        className={"kwii-relative kwii-pointer"}
        style={{
          boxShadow: " 0px 4px 5px 0px rgba(27, 28, 30, 0.05)",
          padding: '12px 20px',
        }}
      >
        <NotifyBell />
      </div>
    </Popover>
  );
};
export default Notification;
