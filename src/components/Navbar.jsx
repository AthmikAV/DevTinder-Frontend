import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { removeRequests } from "../utils/requestsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post(BASE_URL + '/logout', {}, { withCredentials: true });
    dispatch(removeUser());
    dispatch(removeRequests());
    navigate('/login');
  }



  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      
      {/* LEFT SIDE — LOGO */}
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/feed">DevTinder</Link>
      </div>

  
      {/* AVATAR DROPDOWN */}
      <div className="dropdown dropdown-end ml-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          {!user ? (<div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>) : (<div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src={user.photoUrl}
            />
          </div>) }
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link className="justify-between" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link to='/requests'>Requests</Link>
          </li>
          <li>
            <button onClick={()=>handleLogout()}>Logout</button>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
