import UsersTabs from "./UsersTabs";
import NewUserModal from "./NewUserModal";
import Search from "./Search";

const page = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-y-3 sm:items-center my-3 mb-8">
        <h1 className="heading-h1">User and Permission</h1>
        <NewUserModal title="Create New User" btn="New User" />
      </div>
      <Search />
      <UsersTabs />
    </div>
  );
};

export default page;
