import React from "react";
import "./index.css";

const AddTenantButton = ({addTenant}) => {

  return (
    <button type="submit" className="btn-lg btn-primary btn-block-small button-padding" onClick={addTenant}>
      Add New Tenant
    </button>
  );
};

export default AddTenantButton;