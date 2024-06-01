import React from "react";
import { RootLayout } from "../layout";
import Header from "../components/Header";
import TableUser from "@/components/table/TableUser";
import FormUser from "@/components/FormUser";

const Dashboard = () => {
  return (
    <RootLayout>
      {/* Header */}
      <Header />

      {/* Main */}
      <div className="px-40 h-full w-full items-center justify-center">
        <div className="flex justify-between w-full">
          <p>User List</p>
          {/* <Button variant={"default"}>Create User</Button> */}
          <FormUser />
        </div>

        {/* table user */}
        <TableUser />
      </div>
    </RootLayout>
  );
};

export default Dashboard;
