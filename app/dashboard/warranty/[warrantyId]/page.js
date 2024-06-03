"use client";
import { useWarranty } from "@/app/_features/warranties/useWarranty";
import Spinner from "@/app/components/ui/Spinner";
import Image from "next/image";

const WarrantyPageInfo = ({ params }) => {
  const { warrantyId } = params;
  const { data, isLoading, isError, error } = useWarranty(warrantyId);

  if (isLoading) return <Spinner />;

  const warranty = data.data;

  console.log(warranty);

  return (
    <>
      {isError && error && "There is no warranty with that id"}
      {!isLoading && !isError && !error && (
        <div className="space-y-2">
          <p className="btn-primary inline-block bg-green-400">
            {warranty.status}
          </p>
          <h1 className="font-semibold font-serif">
            {warranty.firstname} {warranty.lastname}
          </h1>

          <p>
            ID: <span className="font-medium">{warranty.id}</span>
          </p>
          <p>
            Created At:
            <span className="font-medium">{warranty.created_at}</span>
          </p>
          <h1>
            Company Name:
            <span className="font-medium font-serif">
              {warranty.company_name}
            </span>
          </h1>
          <p>
            Address: <span className="font-medium">{warranty.address}</span>
          </p>
          <p>
            Email: <span className="font-medium">{warranty.email}</span>
          </p>
          <p>
            Phone No:<span className="font-medium"> {warranty.phone}</span>
          </p>
          <p>
            Purchase From:
            <span className="font-medium"> {warranty.purchase_from}</span>
          </p>
          <p>
            Purchase Date:
            <span className="font-medium"> {warranty.purchase_date}</span>
          </p>
          <p>
            Updated at
            <span className="font-medium">{warranty.updated_at}</span>
          </p>

          <div className="!mt-6 border border-gray-100 shadow-sm rounded-sm w-fit p-3">
            <p>
              Bike Battary serial no:
              <span className="font-medium">
                {warranty.bike_battery_serial_no}
              </span>
            </p>
            <Image src="/cycle-1.jpg" width={400} height={320} alt="test" />
          </div>
          <div className="border border-gray-100 shadow-sm rounded-sm w-fit p-3">
            <p>
              Bike Frame serial no:
              <span className="font-medium">
                {warranty.bike_frame_serial_no}
              </span>
            </p>
            <Image src="/cycle-1.jpg" width={400} height={320} alt="test" />
          </div>
          <div className="border border-gray-100 shadow-sm rounded-sm w-fit p-3">
            <p>
              Bike Motor serial no:
              <span className="font-medium">
                {warranty.bike_motor_serial_no}
              </span>
            </p>
            <Image src="/cycle-1.jpg" width={400} height={320} alt="test" />
          </div>
          <div className="border border-gray-100 shadow-sm rounded-sm w-fit p-3">
            <p>
              Invoice no:
              <span className="font-medium">
                {warranty.bike_battery_serial_no}
              </span>
            </p>
            <Image src="/cycle-1.jpg" width={400} height={320} alt="test" />
          </div>
        </div>
      )}
    </>
  );
};

export default WarrantyPageInfo;
