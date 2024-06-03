import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormUserContent from "./FormUserContent";
import { Button } from "../ui/button";
import { SetStateAction } from "react";

interface FormUserProps {
  showFormUser: boolean;
  setShowFormUser: React.Dispatch<SetStateAction<boolean>>;
}

const FormUser: React.FC<FormUserProps> = ({
  setShowFormUser,
  showFormUser,
}) => {
  return (
    <AlertDialog open={showFormUser} onOpenChange={setShowFormUser}>
      <Card>
        <AlertDialogTrigger>
          {/* disini error karena tidak boleh ada button lagi, nanti di perbaiki */}

          <Button>Create User</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
          </AlertDialogHeader>

          <CardContent>
            <FormUserContent setShowFormUser={setShowFormUser} />
          </CardContent>
        </AlertDialogContent>
      </Card>
    </AlertDialog>
  );
};

export default FormUser;
