import { Skeleton } from "./components/ui/skeleton";
import { TableCell, TableRow } from "./components/ui/table";

export const TableSkalecton = () => {
  return [1, 2, 3].map(() => (
    <TableRow>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-full h-[20px] rounded-full" />
      </TableCell>
    </TableRow>
  ));
};
