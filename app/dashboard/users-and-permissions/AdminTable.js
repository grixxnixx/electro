"use client";

import { Switch } from "@/app/components/ui/switch";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import EditUser from "./EditUser";
import BlockUser from "./BlockUser";
import AssignUserRole from "./AssignUserRole";
import { useAdminUsers, useUsers } from "@/app/_features/users/useUsers";
import Spinner from "@/app/components/ui/Spinner";

const AdminTable = () => {
  const { data, isLoading, isError, error } = useAdminUsers();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Table className="mt-10 table_modify">
      <TableHeader className="font-semibold">
        <TableRow>
          <TableHead scope="col">User Name</TableHead>
          <TableHead scope="col">Email</TableHead>
          <TableHead scope="col">Phone Number</TableHead>
          <TableHead scope="col">Role</TableHead>
          <TableHead scope="col">Date</TableHead>

          <TableHead scope="col">Status</TableHead>
          <TableHead scope="col" className="w-1/6">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <tbody>
        {data.data.data?.map((data, i) => {
          return (
            <TableRow key={i + 1} className="font-sans">
              <TableCell data-label="User Name">{data.name}</TableCell>
              <TableCell className="w-fit" data-label="Email">
                {data.email}
              </TableCell>
              <TableCell data-label="Phone">{data.phone_number}</TableCell>
              <TableCell data-label="Role">{data.roles[0]?.name}</TableCell>
              <TableCell data-label="Created At">{data.created_at}</TableCell>

              <TableCell data-label="Status">
                {data.email_verified_at ? (
                  <span className="btn-primary bg-green-300">Verified</span>
                ) : (
                  <span className="btn-primary bg-yellow-300">Unverified</span>
                )}
              </TableCell>
              <TableCell data-label="">
                <div className="flex gap-1">
                  <EditUser user={data} />
                  <BlockUser user={data} />
                  <AssignUserRole user={data} />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
export default AdminTable;