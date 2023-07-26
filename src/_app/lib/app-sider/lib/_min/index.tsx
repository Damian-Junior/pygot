import { Divider } from "antd";
export const useContent = ({ accountusers }) => {
  const content = (
    <div
      className={"kwii-fw-5 kwii-text-secondary kwii-pointer"}
      style={{ width: 140, margin: "6px 0" }}
    >
      {accountusers?.map((user) => {
        return (
          <>
            <div
              data-testid={"dti_user_setting"}
              onClick={() => console.log("go to settings")}
            >
              {user} Account
            </div>
            <Divider style={{ margin: "14px 0" }} />
          </>
        );
      })}
    </div>
  );
  return { content };
};
