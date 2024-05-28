import { AiOutlineExclamationCircle } from "react-icons/ai";

const page = () => {
  return (
    <>
      <h1 className="heading-h1">Warranty Registration</h1>
      <form className="md:py-8 p-2 md:px-6 ">
        <h2 className="flex items-center  gap-2 justify-center my-3 mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3L23 3L23 24L20 22L17 24L14 22L11 24L8 22L5 24L5 3Z"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M9 9L14 9"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M18 9H19"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M9 13L14 13"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M18 13H19"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M9 17H14"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M18 17H19"
              stroke="#FFB500"
              stroke-width="2.4"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
          </svg>
          <span className="font-semibold font-serif">
            Register your Warranty
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-3">
          <div className="">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                name="text"
                type="email"
                placeholder="Your Email"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="">
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div className="mt-1">
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Company Name"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="streetAddress"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-1">
              <input
                id="streetAddress"
                name="streetAddress"
                type="text"
                placeholder="Street Address"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="">
            <label
              htmlFor="date-select"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Purchase From
            </label>
            <select
              name="purchaseDate"
              id="date-select"
              className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
            >
              <option value="">--Please choose an option--</option>
              <option value="abn">ABN</option>
              <option value="abn">TV5</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="date-select"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Purchase Date
            </label>
            <select
              name="purchaseDate"
              id="date-select"
              className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
            >
              <option value="">--Please choose an option--</option>
              <option value="abn">ABN</option>
              <option value="abn">TV5</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="invoiceNumber"
              className="flex items-center gap-1 text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              <span>Invoice Number</span>
              <AiOutlineExclamationCircle size={18} />
            </label>
            <div className="mt-1">
              <input
                id="invoiceNumber"
                name="invoiceNumber"
                type="number"
                placeholder="Invoice Number"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="invoice"
              className="block text-sm font-semibold font-serif leading-6 text-gray-900"
            >
              Upload your Invoice
            </label>
            <div className="mt-1">
              <small className="text-sm mb-1">
                Your photo should be PNG or JPG format
              </small>
              <input
                id="invoice"
                name="invoice"
                type="file"
                placeholder="Upload your Invoice"
                accept=".png,.jpg"
                required
                className="block w-full rounded-md py-1.5 px-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold file:ring-1
                file:ring-color-primary file:text-color-primary
                file:hover:ring-2 file:bg-transparent"
              />
            </div>
          </div>

          <div className="">
            <label className="flex items-center gap-1 text-sm font-semibold font-serif leading-6 text-gray-900">
              <span>Bike Frame Serial Number</span>
              <AiOutlineExclamationCircle size={18} />
            </label>
            <div className="mt-1">
              <input
                name="bikeframe"
                type="text"
                placeholder="Bike Frame Serial Number"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold font-serif leading-6 text-gray-900">
              Upload your Bike Frame Serial Number
            </label>
            <div className="mt-1">
              <small className="text-sm mb-1">
                Your photo should be PNG or JPG format
              </small>
              <input
                id="invoice"
                name="invoice"
                type="file"
                accept=".png,.jpg"
                placeholder="Upload your Invoice"
                required
                className="block w-full rounded-md py-1.5 px-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold file:ring-1
                file:ring-color-primary file:text-color-primary
                file:hover:ring-2 file:bg-transparent"
              />
            </div>
          </div>
          <div className="">
            <label className="flex items-center gap-1 text-sm font-semibold font-serif leading-6 text-gray-900">
              <span>Bike Battary Serial Number </span>
              <AiOutlineExclamationCircle size={18} />
            </label>
            <div className="mt-1">
              <input
                name="bikebattary"
                type="text"
                placeholder="Bike Battary Serial Number"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold font-serif leading-6 text-gray-900">
              Upload your Bike Battary Serial Number
            </label>
            <div className="mt-1">
              <small className="text-sm mb-1">
                Your photo should be PNG or JPG format
              </small>
              <input
                name="bikebarryS"
                type="file"
                accept=".png,.jpg"
                required
                className="block w-full rounded-md py-1.5 px-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold file:ring-1
                file:ring-color-primary file:text-color-primary
                file:hover:ring-2 file:bg-transparent"
              />
            </div>
          </div>
          <div className="">
            <label className="flex items-center gap-1 text-sm font-semibold font-serif leading-6 text-gray-900">
              <span>Bike Motor Serial Number</span>
              <AiOutlineExclamationCircle size={18} />
            </label>
            <div className="mt-1">
              <input
                name="bikemotor"
                type="url"
                placeholder="Bike Motor Serial Number"
                required
                className="block w-full rounded-md border bg-gray-100 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm px-3placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-semibold font-serif leading-6 text-gray-900">
              Upload your Bike Motor Serial Number
            </label>
            <div className="mt-1">
              <small className="text-sm mb-1">
                Your photo should be PNG or JPG format
              </small>
              <input
                name="bikebarryS"
                type="file"
                accept=".png,.jpg"
                required
                className="block w-full rounded-md py-1.5 px-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold file:ring-1
                file:ring-color-primary file:text-color-primary
                file:hover:ring-2 file:bg-transparent"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary mt-5 font-semibold rounded-sm px-6 py-2"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default page;
