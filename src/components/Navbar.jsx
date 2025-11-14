const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      
      {/* LEFT SIDE — LOGO */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-4">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">About</a>
        <a className="btn btn-ghost">Contact</a>
      </div>

      {/* AVATAR DROPDOWN */}
      <div className="dropdown dropdown-end ml-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
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

      {/* MOBILE MENU BUTTON */}
      <div className="dropdown dropdown-end md:hidden ml-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        
        {/* MOBILE DROPDOWN MENU */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-52 p-2 bg-base-100 rounded-box shadow"
        >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
