import FolderFiles from "@/app/components/ui/FolderFiles";
import Search from "@/app/components/ui/Search";

const AllMedia = ({ data }) => {
  return (
    <div>
      <Search />
      {data.length === 0 ? (
        <h1 className="my-4">There is no Media available</h1>
      ) : (
        <FolderFiles data={data} />
      )}
    </div>
  );
};

export default AllMedia;