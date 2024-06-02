import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { User } from "@/api/userApi";
import { formatDate } from "@/lib/utils";

interface TableItemProps {
  user: User;
  no: number;
}

const TableItem: React.FC<TableItemProps> = ({ user, no }) => {
  return (
    <TableRow>
      <TableCell>{no}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell>{user.gender.includes("L") ? "Pria" : "Wanita"}</TableCell>
      <TableCell>{formatDate(user.birtDate)}</TableCell>
      <TableCell>{formatDate(user.createdAt)}</TableCell>
      <TableCell>Action</TableCell>
    </TableRow>
  );
};

export default TableItem;
