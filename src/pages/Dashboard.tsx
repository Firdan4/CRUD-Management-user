import { RootLayout } from "../layout";
import Header from "../components/Header";
import TableUser from "@/components/table/TableUser";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { showForm } from "@/redux/formSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <RootLayout>
      {/* Header */}
      <Header />

      {/* Main */}
      <div className="px-40 h-full w-full items-center justify-center">
        <div className="flex justify-between w-full">
          <p>User List</p>
          <Button
            onClick={() =>
              dispatch(
                showForm({
                  label: "Create User",
                  isDisable: false,
                  isEdit: false,
                })
              )
            }
            variant={"default"}
          >
            Create User
          </Button>
        </div>

        {/* table user */}
        <TableUser />
      </div>
    </RootLayout>
  );
};

export default Dashboard;
