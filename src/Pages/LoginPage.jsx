import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-auto ">
      <div className="bg-white  dark:bg-green-500 shadow-lg px-10 py-5 rounded-lg border-black text-center  ">
        <p className="">Login Page </p>
        <h1 className="text-3xl">Ospro Management</h1>

        <form action="/userLogin" className="m-5  flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter UserName /Email"
            className="border px-6 py-2 my-2 rounded "
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-6 py-2 rounded "
          />

          <div className="flex gap-2 mt-3">
            <input type="checkbox" name="require" id="require" />
            <label htmlFor="require">Required </label>
          </div>
          <Link className="bg-green-100 dark:bg-white p-2 rounded-lg hover:bg-green-500">
            Submit
          </Link>
          <Link className="bg-green-100 p-2 rounded-lg gap-2 hover:bg-green-500 flex justify-center">
            <FcGoogle className="text-2xl " />
            Login With Google
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
