import Image from "next/image";

const User = () => {
  return (
    <div className="flex gap-3 items-center rounded-xl font-sans py-4 px-3">
      <Image
        width={40}
        height={40}
        src={"/default.jpg"}
        alt="User name"
        className="rounded-full"
      />
      <div className="flex flex-col leading-5">
        <span className="name font-bold">John Doe</span>
        <span className="email">johndoe@example.com</span>
      </div>
    </div>
  );
};

export default User;
