import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
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

const FormUser = () => {
  return (
    <AlertDialog>
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
            <FormUserContent />
          </CardContent>
        </AlertDialogContent>
      </Card>
    </AlertDialog>
  );
};

export default FormUser;
