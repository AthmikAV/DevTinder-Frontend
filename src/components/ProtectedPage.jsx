import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const ProtectedPage = ({ children }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      dispatch(removeUser());   // clear redux immediately
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  if (!user) return null;

  return <>{children}</>;
};

export default ProtectedPage;
