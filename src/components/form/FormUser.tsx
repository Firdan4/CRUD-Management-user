import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormUserContent from "./FormUserContent";
import { useDispatch, useSelector } from "react-redux";
import { hiddenForm } from "@/redux/formSlice";
import { RootState } from "@/redux/store";

const FormUser: React.FC = () => {
  const isVisible = useSelector((state: RootState) => state.form.isVisible);
  const label = useSelector((state: RootState) => state.form.label);

  const dispatch = useDispatch();

  return (
    <AlertDialog open={isVisible} onOpenChange={() => dispatch(hiddenForm())}>
      <Card>
        <AlertDialogTrigger>
          {/* disini error karena tidak boleh ada button lagi, nanti di perbaiki */}

          {/* <Button>Create User</Button> */}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <CardHeader>
              <CardTitle>{label}</CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </CardHeader>
          </AlertDialogHeader>

          <CardContent>
            <FormUserContent />
          </CardContent>
        </AlertDialogContent>
      </Card>
    </AlertDialog>
  );
};

export default FormUser;
