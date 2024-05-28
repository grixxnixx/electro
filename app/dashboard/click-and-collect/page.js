import Search from "@/app/components/ui/Search";
import Filter from "./Filter";
import RecentOrder from "./RecentOrder";
import Orders from "./Orders";

const page = () => {
  return (
    <div>
      <h1 className="heading-h1 mb-8 mt-4">Click and Collect</h1>
      <Search />
      <Orders />
    </div>
  );
};

export default page;
