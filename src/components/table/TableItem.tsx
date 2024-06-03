import React from "react";
import Swal from "sweetalert2";
import { TableCell, TableRow } from "../ui/table";
import { User, deleteUser } from "@/api/userApi";
import { formatDate } from "@/lib/utils";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { showForm } from "@/redux/formSlice";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

interface TableItemProps {
  user: User;
  no: number;
}

const TableItem: React.FC<TableItemProps> = ({ user, no }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: mutateDeleteUser } = useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      Swal.fire({
        title: "Deleted Success!",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    },
  });

  const handleAction = async (type: string, id: string) => {
    if (type === "delete") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this user!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          mutateDeleteUser(id);
        }
      });
    }

    if (type === "view") {
      dispatch(
        showForm({ user, label: "Detail User", isDisable: true, isEdit: false })
      );
    }
    if (type === "edit") {
      dispatch(
        showForm({ user, label: "Edit User", isDisable: false, isEdit: true })
      );
    }
  };

  return (
    <TableRow>
      <TableCell>{no}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell>{user.gender.includes("L") ? "Pria" : "Wanita"}</TableCell>
      <TableCell>{formatDate(user.birtDate)}</TableCell>
      <TableCell>{formatDate(user.createdAt)}</TableCell>
      <TableCell className="flex gap-2">
        <div
          className="cursor-pointer"
          onClick={() => handleAction("view", user.id)}
        >
          <FaEye size={20} color="orange" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleAction("edit", user.id)}
        >
          <FaRegEdit size={20} color="green" />
        </div>
        <div
          onClick={() => handleAction("delete", user.id)}
          className="cursor-pointer"
        >
          <MdDelete size={20} color="red" />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
