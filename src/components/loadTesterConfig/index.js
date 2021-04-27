import React, { useReducer, useState } from "react";
import {useForm} from "react-hook-form";
import { setConfigCycle } from "../api/loadTester-api"
import TenantList from "../tenantList"
import AddTenantButton from "../buttons/addTenantButton"
import DeleteTenantButton from "../buttons/deleteTenantButton"
import ConfigForm from '../configForm'
import { reducerMainConfig, reducerTenantList } from "../hooks/useReducerConfig"

// https://medium.com/swlh/usereducer-form-example-16675fa60229

const LoadTesterConfig = ({ data }) => {

  const [state, dispatch] = useReducer(reducerMainConfig, data.data);
  const [stateTenantList, dispatchTenantList] = useReducer(reducerTenantList, data.data.TenantList);
  const [isLoading, setIsLoading] = useState(false);


  const { register, handleSubmit, errors, reset } = useForm();

  const handleTextChange = (e, type, i) => {
    console.log(`inside handleTextChange, payloadType is: ${typeof(e.target.value)} and value is ${e.target.value} }`)
    dispatch({
      type: type,
      payloadType: e.target.type,
      field: e.target.name,
      payload: e.target.value,
      index: i,
    })
  }

  const handleTextChangeTenantList = (e, type, i) => {
    // e is the event object passed into the event handler. Actions such as onClick or onSubmit will trigger a change to state which will
    // cause a re-render which will in turn invoke the functions within the form e.g., onSubmit. This means adding a tenant for example will trigger 
    // a submit i.e., POST will be sent to backend immediately. e.preventDefault() will prevent a browser reload/refresh.
    // This was not implemented for handleTextChange as preventing the reload meant the radio button displays were not updated when selected.
    e.preventDefault();
    dispatchTenantList({
      type: type,
      payloadType: e.target.type,
      field: e.target.name,
      payload: e.target.value,
      index: i
    })
  }
  
  const updateTenantConfig = (e) => {
    console.log(`inside handleTextChange, payloadType is: ${typeof(e.target.value)} and value is ${e.target.value}`);
    handleTextChange(e, "handle-input")
  };

  const updateTenantList = (e, i) => {
    handleTextChangeTenantList(e, "tenantList-update", i)
  };

  const addTenant = (e) => {
    handleTextChangeTenantList(e, "add-tenant")
  };

  const deleteTenant = (e, i) => {
    handleTextChangeTenantList(e, "delete-tenant", i)
  };

  const onSubmit = async () => {
    // set loader to true on submission
    setIsLoading(true);

    // for payload create a new array and replace TenantList with latest TenantList state
    const payload = {
        ...state,    
        TenantList: [...stateTenantList]
    }
    const response = await setConfigCycle(payload);

    // disable loader if 200 OK received for submission
    response.status = 200 && setIsLoading(false);
  }

  return (
    <>
        <form className="form bg-light text-dark table-space" onSubmit={handleSubmit(onSubmit)} >
          <h2 className="text-center bg-primary text-white">IX Load Tester Configuration</h2>
          
          <ConfigForm state={state} register={register} updateTenantConfig={updateTenantConfig}/>
          <AddTenantButton addTenant={addTenant} />
          <TenantList stateTenantList={stateTenantList} updateTenantList={updateTenantList} deleteTenant={deleteTenant} DeleteTenantButton={DeleteTenantButton} register={register} errors={errors}/>

          <div className="form-group">
            { isLoading ? 
            <button type="submit" className="btn-lg btn-danger btn-block">
              Submitting ....
            </button> 
            :
            <button type="submit" className="btn-lg btn-primary btn-block">
              Submit
            </button>}
          </div> 
        </form>
    </>
  );
};

export default LoadTesterConfig;