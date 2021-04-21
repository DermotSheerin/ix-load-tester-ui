import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

// https://jasonwatmore.com/post/2020/09/29/react-dynamic-form-example-with-react-hook-form

const TenantList = ({ data, updateTenantList  }) => {

    // form validation rules 
    const validationSchema = Yup.object().shape({
        numberOfTenants: Yup.string()
            .required('Number of tickets is required'),
        tickets: Yup.array().of(
            Yup.object().shape({
                name: Yup.string()
                    .required('Name is required'),
                email: Yup.string()
                    .email('Email is Invalid')
                    .required('Email is required')
            })
        )
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, errors, watch } = useForm({
        resolver: yupResolver(validationSchema)
    });

    // watch to enable re-render when ticket number is changed
    const watchnumberOfTenants = watch('numberOfTenants');

    // return array of ticket indexes for rendering dynamic forms in the template
    function tenantNumbers() {
        return [...Array(parseInt(watchnumberOfTenants || 0)).keys()];
    }

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    }

    return data && (
            <div className="card m-3">
                {data.map((value, i) => (
                    <div key={i} className="list-group list-group-flush">
                        <div className="list-group-item">
                            <h2 className="card-title">Tenant {i + 1} </h2>

                            <div className="form-row">
                                <div className="form-group col-2">
                                    <label>TenantId</label>
                                    <input name="TenantId" value={value.TenantId} ref={register} type="text" onChange={(e) => updateTenantList(e, i)} className={`form-control ${errors.tickets?.[i]?.name ? 'is-invalid' : '' }`} />
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                                </div>
                                <div className="form-group col-2">
                                    <label>Domain</label>
                                    <input name="Domain" value={value.Domain} ref={register} type="text" onChange={(e) => updateTenantList(e, i)} className={`form-control ${errors.tickets?.[i]?.email ? 'is-invalid' : '' }`} />
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div> */}
                                </div>
                                <div className="form-group col-2">
                                    <label>AgentRangeStart</label>
                                    <input name="AgentRangeStart" value={value.AgentRangeStart} ref={register} type="text" onChange={(e) => updateTenantList(e, i)} className={`form-control ${errors.tickets?.[i]?.name ? 'is-invalid' : '' }`} />
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                                </div>
                                <div className="form-group col-2">
                                    <label>AgentRangeEnd</label>
                                    <input name="AgentRangeEnd" value={value.AgentRangeEnd} ref={register} type="text" onChange={(e) => updateTenantList(e, i)} className={`form-control ${errors.tickets?.[i]?.email ? 'is-invalid' : '' }`} />
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div> */}
                                </div>
                                <div className="form-group col-2">
                                    <label>AgentPassword</label>
                                    <input name="AgentPassword" value={value.AgentPassword} ref={register} type="text" onChange={(e) => updateTenantList(e, i)} className={`form-control ${errors.tickets?.[i]?.name ? 'is-invalid' : '' }`} />
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.name?.message}</div> */}
                                </div>
                                <div className="form-group col-2">
                                    <label>TransferServiceId</label>
                                    <input name="TransferServiceId" value={value.TransferServiceId} ref={register} type="text" onChange={(e) => updateTenantList(e, i)} className={`form-control ${errors.tickets?.[i]?.email ? 'is-invalid' : '' }`} />
                                    {/* <div className="invalid-feedback">{errors.tickets?.[i]?.email?.message}</div> */}
                                </div> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
};

export default TenantList;