import React from "react";
import "./index.css";

const AddTenantButton = ({addTenant}) => {

  return (
    <button type="submit" className="btn-lg btn-primary btn-block" onClick={addTenant}>
      Add Tenant
    </button>
  );
};

export default AddTenantButton;