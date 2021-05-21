import React from "react";
import "./index.css";

const AddTenantButton = ({ addTenant }) => {
  const handleClick = (e) => {
    addTenant(e);
  };

  return (
    <button
      type="submit"
      className="btn-lg btn-primary btn-block-small button-padding margin-top"
      onClick={handleClick}
    >
      Add New Tenant
    </button>
  );
};

export default AddTenantButton;
