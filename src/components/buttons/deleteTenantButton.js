import React from "react";
import "./index.css";

const DeleteTenantButton = ({deleteTenant, i}) => {

  const handleClick = (e) => {
    deleteTenant(e, i);
  }

  return (
    <button type="submit" className="btn-small btn-primary" onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteTenantButton;