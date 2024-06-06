"use client";

import { Switch } from "@/app/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import EditUser from "./EditUser";
import BlockUser from "./BlockUser";
import AssignUserRole from "./AssignUserRole";
import { useUsers } from "@/app/_features/users/useUsers";
import Spinner from "@/app/components/ui/Spinner";
import PaginationUI from "./Pagination";
import { useSearchParams } from "next/navigation";

const UsersTable = () => {
  const params = useSearchParams();
  const page = params.get("page") ? params.get("page") : 1;
  const { data, isLoading, isError, error } = useUsers(page, 3);

  if (isLoading) {
    return <Spinner />;
  }

  console.log(data);

  return (
    <>
      {isError && error && error.message}

      {!isError && !error && (
        <Table className="mt-10 table_modify">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium" scope="col">
                User Name
              </TableHead>
              <TableHead className="font-medium" scope="col">
                Email
              </TableHead>
              <TableHead className="font-medium" scope="col">
                Phone Number
              </TableHead>
              <TableHead className="font-medium" scope="col">
                Role
              </TableHead>
              <TableHead className="font-medium" scope="col">
                Date
              </TableHead>

              <TableHead className="font-medium" scope="col">
                Status
              </TableHead>
              <TableHead className="font-medium" scope="col">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.data?.map((data, i) => {
              return (
                <TableRow key={i + 1} className="font-sans">
                  <TableCell data-label="User Name">{data.name}</TableCell>
                  <TableCell className="w-fit" data-label="Email">
                    {data.email}
                  </TableCell>
                  <TableCell data-label="Phone">{data.phone_number}</TableCell>
                  <TableCell data-label="Role">{data.roles[0]?.name}</TableCell>
                  <TableCell data-label="Created At">
                    {new Date(data.created_at).toDateString()}
                  </TableCell>

                  <TableCell data-label="Status">
                    {data.is_blocked === 0 ? (
                      <span className="btn-primary bg-green-300">Active</span>
                    ) : (
                      <span className="btn-primary bg-yellow-300">
                        Inactive
                      </span>
                    )}
                  </TableCell>
                  <TableCell data-label="">
                    <div className="flex gap-1 flex-wrap">
                      <EditUser user={data} />
                      <BlockUser user={data} />
                      <AssignUserRole user={data} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
      <PaginationUI data={data.data} page={page} />
    </>
  );
};
export default UsersTable;
