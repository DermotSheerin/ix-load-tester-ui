import React, { useReducer } from "react";
import {useForm} from "react-hook-form";
import { setConfigCycle } from "../api/loadTester-api"
import TenantList from '../tenantList'
import AddTenantButton from '../buttons/addTenantButton'
import ConfigForm from '../configForm'
import { reducerMainConfig, reducerTenantList } from "../hooks/useReducerConfig"

// https://medium.com/swlh/usereducer-form-example-16675fa60229

const LoadTesterConfig = ({ data }) => {

  const [state, dispatch] = useReducer(reducerMainConfig, data.data);
  const [stateTenantList, dispatchTenantList] = useReducer(reducerTenantList, data.data.TenantList);
  console.log(`here is actual state: ${typeof(state.UCEnabled)}, ${state.UCEnabled}`)

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
    dispatchTenantList({
      type: type,
      payloadType: e.target.type,
      field: e.target.name,
      payload: e.target.value,
      index: i
    })
    // e.preventDefault();
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


  const onSubmit = async () => {
    const payload = {
        ...state,    
        TenantList: [...stateTenantList]
    }
    const response = await setConfigCycle(payload);
    // temp std out to report on successful REST call
    response.status = 200 ? console.log(`SUBMIT SUCCESS`) : console.log(`SUBMIT fail`);
  }

  return (
    <>
        <form className="form bg-light text-dark table-space" onSubmit={handleSubmit(onSubmit)} >
          <h2 className="text-center">IX Load Tester Configuration</h2>
          
          <ConfigForm state={state} register={register} updateTenantConfig={updateTenantConfig}/>
          <AddTenantButton addTenant={addTenant} />
          <TenantList stateTenantList={stateTenantList} updateTenantList={updateTenantList} register={register} errors={errors}/>

          <div className="form-group">
            <button type="submit" className="btn-lg btn-primary btn-block">
              Submit
            </button>
            <button
              type="reset"
              className="btn-sm btn-secondary btn-block"
              onClick={() => {
                reset({
                  email: "",
                  password: "",
                });
              }}
            >
              Reset
            </button>
          </div> 
        </form>
    </>
  );
};

export default LoadTesterConfig;