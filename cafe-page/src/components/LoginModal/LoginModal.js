import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {open, close} from "../../redux/action/LoginModal.js";

const LoginModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="yellow-modal">
      <p>The email address or password you entered is incorrect.</p>
        <button className="btn btn-secondary" onClick={()=>{dispatch(close())}}>close</button>
    </div>
  )
}

export default LoginModal;