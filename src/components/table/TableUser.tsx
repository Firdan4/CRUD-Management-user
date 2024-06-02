import React from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableItem from "./TableItem";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/userApi";
import { TableSkalecton } from "@/loading";

const TableUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
    select: (res) => res?.data,
  });

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>P/W</TableHead>
            <TableHead>Tanggal Lahir</TableHead>
            <TableHead>Tanggal Input</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <TableSkalecton />}

          {data?.map((user, index) => (
            <TableItem user={user} no={index + 1} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUser;
