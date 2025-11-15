import { useSelector } from "react-redux"

const Navbar = () => {
  const user = useSelector((store)=>store.user)
  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      
      {/* LEFT SIDE — LOGO */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
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
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
