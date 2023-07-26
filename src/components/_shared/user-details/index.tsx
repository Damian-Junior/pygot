import React from "react";
import { Avatar, Divider, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons/lib";
import { DropDownArrow } from "../../../_shared/assets/svg";

type UserFormProps = {
  userData?: Record<string, any>;
  isMobile?: boolean | undefined;
};

const UserDetails = (props: UserFormProps) => {
  const {
    userData: { email },
  } = props;
  const content = (
    <div
      className={"kwii-fw-5 kwii-text-secondary kwii-pointer"}
      style={{ width: 140, margin: "6px 0" }}
    >
      <div
        data-testid={"dti_user_setting"}
        onClick={() => console.log("go to settings")}
      >
        <i className="ri-user-settings-line kwii-mr-2" />
        User Settings
      </div>
      <Divider style={{ margin: "14px 0" }} />
      <div
        data-testid={"dti_logo_avatar"}
        onClick={() => {
          console.log("user logged out");
        }}
      >
        <i className="ri-logout-box-line kwii-mr-2" />
        Logout
      </div>
    </div>
  );
  return (
    <Popover
      content={content}
      className={"kwii-pointer"}
      placement={"bottom"}
      trigger={"click"}
      overlayStyle={{ zIndex: 10, width: 250 }}
    >
      <div
        className={"kwii-flex-center"}
        style={{
          gap: 10,
          boxShadow: " 0px 4px 5px 0px rgba(27, 28, 30, 0.05)",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Avatar
          icon={<UserOutlined />}
          // src={userData?.businessLogo}
          size={24}
          data-testid={"dti_logo_avatar"}
        />
        <div style={{ color: "#000" }}>{email}</div>
        <DropDownArrow />
      </div>
    </Popover>
  );
};

export default UserDetails;
