import { BsPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Button from "../Button";

export default function UserAccount() {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();

  function handleLogOut() {
    logOut().then(() => navigate("/login"));
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full">
          <BsPersonFill className="w-full h-full" />
        </div>
      </label>

      <div className="mt-3 z-[1] p-3 border shadow-xl dropdown-content bg-base-100 rounded-md w-52">
        {currentUser ? (
          <>
            <div className="text-sm">
              <h5 className="font-semibold">{currentUser?.displayName}</h5>
              <p className="">{currentUser?.email}</p>
            </div>
            <hr className="my-3 border-gray-300" />
            <ul tabIndex={0} className="menu menu-sm p-0">
              <Button
                onClick={handleLogOut}
                className="btn-primary btn-outline"
              >
                Logout
              </Button>
            </ul>
          </>
        ) : (
          <ul className="menu menu-sm p-0 items-stretch gap-2">
            <Link to="/login">
              <Button className="btn-secondary text-base w-full">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-secondary text-base btn-outline w-full">
                Sign Up
              </Button>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
