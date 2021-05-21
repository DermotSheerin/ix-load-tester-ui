import React from "react";

// https://jasonwatmore.com/post/2020/09/29/react-dynamic-form-example-with-react-hook-form

const TenantList = ({
  stateTenantList,
  updateTenantList,
  deleteTenant,
  DeleteTenantButton,
  register,
  errors,
}) => {
  return (
    stateTenantList && (
      <div className="card m-3">
        {stateTenantList.map((value, i) => (
          <div key={i} className="list-group list-group-flush">
            <div className="list-group-item">
              <h2 className="card-title">Tenant {i + 1} </h2>

              <div className="form-row">
                <div className="form-group col-2">
                  <label>TenantId</label>
                  <input
                    name="TenantId"
                    value={value.TenantId}
                    ref={register}
                    type="text"
                    onChange={(e) => updateTenantList(e, i)}
                    className={`form-control ${
                      errors.tickets?.[i]?.name ? "is-invalid" : ""
                    }`}
                  />
                  {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                </div>
                <div className="form-group col-2">
                  <label>Domain</label>
                  <input
                    name="Domain"
                    value={value.Domain}
                    ref={register}
                    type="text"
                    onChange={(e) => updateTenantList(e, i)}
                    className={`form-control ${
                      errors.tickets?.[i]?.email ? "is-invalid" : ""
                    }`}
                  />
                  {/* <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div> */}
                </div>
                <div className="form-group col-2">
                  <label>AgentRangeStart</label>
                  <input
                    name="AgentRangeStart"
                    value={value.AgentRangeStart}
                    ref={register}
                    type="number"
                    onChange={(e) => updateTenantList(e, i)}
                    className={`form-control ${
                      errors.tickets?.[i]?.name ? "is-invalid" : ""
                    }`}
                  />
                  {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                </div>
                <div className="form-group col-2">
                  <label>AgentRangeEnd</label>
                  <input
                    name="AgentRangeEnd"
                    value={value.AgentRangeEnd}
                    ref={register}
                    type="number"
                    onChange={(e) => updateTenantList(e, i)}
                    className={`form-control ${
                      errors.tickets?.[i]?.email ? "is-invalid" : ""
                    }`}
                  />
                  {/* <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div> */}
                </div>
                <div className="form-group col-2">
                  <label>AgentPassword</label>
                  <input
                    name="AgentPassword"
                    value={value.AgentPassword}
                    ref={register}
                    type="text"
                    onChange={(e) => updateTenantList(e, i)}
                    className={`form-control ${
                      errors.tickets?.[i]?.name ? "is-invalid" : ""
                    }`}
                  />
                  {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                </div>
                <div className="form-group col-2">
                  <label>TransferServiceId</label>
                  <input
                    name="TransferServiceId"
                    value={value.TransferServiceId}
                    ref={register}
                    type="text"
                    onChange={(e) => updateTenantList(e, i)}
                    className={`form-control ${
                      errors.tickets?.[i]?.email ? "is-invalid" : ""
                    }`}
                  />
                  {/* <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div> */}
                </div>
                <div className="form-group col-2">
                  <DeleteTenantButton deleteTenant={deleteTenant} i={i} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default TenantList;
