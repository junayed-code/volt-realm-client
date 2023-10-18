import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function UserAccount({
  name = "Junayed",
  email = "junayed@mail.com",
  onLogOut,
}) {
  const currentUser = true;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full">
          <BsPersonFill className="w-full h-full" />
        </div>
      </label>

      <div className="mt-3 z-[1] p-2 shadow-md dropdown-content bg-base-100 rounded-md w-52">
        {currentUser ? (
          <>
            <div className="text-sm">
              <h5 className="font-semibold">{name}</h5>
              <p className="">{email}</p>
            </div>
            <hr className="my-3 border-gray-300" />
            <ul tabIndex={0} className="menu menu-sm p-0">
              <Button onClick={onLogOut} className="btn-primary btn-outline">
                Logout
              </Button>
            </ul>
          </>
        ) : (
          <ul className="menu menu-sm p-0 items-stretch gap-2">
            <Link>
              <Button className="btn-secondary w-full">Log In</Button>
            </Link>
            <Link>
              <Button className="btn-secondary btn-outline w-full">
                Sign Up
              </Button>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
