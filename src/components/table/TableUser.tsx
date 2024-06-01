import React from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableItem from "./TableItem";

const TableUser = () => {
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
          <TableItem />
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUser;
