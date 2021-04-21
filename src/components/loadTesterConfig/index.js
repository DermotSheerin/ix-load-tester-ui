import React, { useReducer } from "react";
import {useForm} from "react-hook-form";
import { setConfigCycle } from "../api/loadTester-api"
import TenantList from '../tenantList'

// https://medium.com/swlh/usereducer-form-example-16675fa60229

const reducer = (state, action) => {
  switch (action.type) {
    case "handle-input":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

const reducerTenantList = (state, action) => {
  switch (action.type) {
    case "tenantList-update":
      // create a new array to modify using spread operator
      const newState = [...state];
      // access the index of the newState array that is being modified
      newState[action.index] = {
        // using the spread operator to extract the fields from the newState array (at index specified) and modify the required action field
        ...newState[action.index],
        [action.field]: action.payload      
        };
      return newState; // return the modified newState array that contains the field change
    default:
      return state;
  }
};

const LoadTesterConfig = ({ data }) => {

  const [state, dispatch] = useReducer(reducer, data.data);
  const [stateTenantList, dispatchTenantList] = useReducer(reducerTenantList, data.data.TenantList);

  const { register, handleSubmit, errors, reset } = useForm();

  const handleTextChange = (e, type, i) => {
    dispatch({
      type: type,
      field: e.target.name,
      payload: e.target.value,
      index: i,
    })
  }

  const handleTextChangeTenantList = (e, type, i) => {
    dispatchTenantList({
      type: type,
      field: e.target.name,
      payload: e.target.value,
      index: i
    })
  }
  
  const updateTenantConfig = (e) => {
    handleTextChange(e, "handle-input")
  };

  const updateTenantList = (e, i) => {
    handleTextChangeTenantList(e, "tenantList-update", i)
  };


  const onSubmit = async () => {
    const payload = {
        ...state,    
        TenantList: [...stateTenantList]
    }
    const response = await setConfigCycle(payload)
  }


  return (
    <>
        <form className="form bg-light text-dark table-space" onSubmit={handleSubmit(onSubmit)} >
          <h2 className="text-center">IX Load Tester Configuration</h2>
          <div className="list-group list-group-flush">
            <div className="list-group-item">
              <div className="form-row">
                <div className="form-group col-4">
                <label>
                  GrafanaGUID
                </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    required="required"
                    name="GrafanaGUID"
                    value={state.GrafanaGUID}
                    onChange={(e) => updateTenantConfig(e)}
                    ref={register({
                      required: "GrafanaGUID is required",
                      minLength: {
                        value: 1,
                        message: "GrafanaGUID is too short, minimum length is 1",
                      },
                    })}
                  />
                </div>
                <div className="form-group col-4">
                <label>
                  UCEnabled
                </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    required="required"
                    name="UCEnabled"
                    value={state.UCEnabled}
                    onChange={(e) => updateTenantConfig(e)}
                    ref={register({
                      required: "UCEnabled is required",
                      minLength: {
                        value: 1,
                        message: "UCEnabled is too short, minimum length is 1",
                      },
                    })}
                  />
                </div> 
                <div className="form-group col-4">
                <label>
                  UCClusterIP
                </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    required="required"
                    name="UCClusterIP"
                    value={state.UCClusterIP}
                    onChange={(e) => updateTenantConfig(e)}
                    ref={register({
                      required: "UCClusterIP is required",
                      minLength: {
                        value: 1,
                        message: "UCClusterIP is too short, minimum length is 1",
                      },
                    })}
                  />
                </div> 
              </div>
              <div className="form-row">
                <div className="form-group col-4">
                  <label>
                    ClusterIP
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="ClusterIP"
                      value={state.ClusterIP}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "ClusterIP is required",
                        minLength: {
                          value: 1,
                          message: "ClusterIP is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    StartInteractionIntervalSec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="StartInteractionIntervalSec"
                      value={state.StartInteractionIntervalSec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "StartInteractionIntervalSec is required",
                        minLength: {
                          value: 1,
                          message: "StartInteractionIntervalSec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    EndInteractionDelaySec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="EndInteractionDelaySec"
                      value={state.EndInteractionDelaySec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "EndInteractionDelaySec is required",
                        minLength: {
                          value: 1,
                          message: "EndInteractionDelaySec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-4">
                  <label>
                    RingSeconds
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="RingSeconds"
                      value={state.RingSeconds}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "RingSeconds is required",
                        minLength: {
                          value: 1,
                          message: "RingSeconds is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    MinChatMessageDelaySec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="MinChatMessageDelaySec"
                      value={state.MinChatMessageDelaySec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "MinChatMessageDelaySec is required",
                        minLength: {
                          value: 1,
                          message: "MinChatMessageDelaySec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    MaxChatMessageDelaySec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="MaxChatMessageDelaySec"
                      value={state.MaxChatMessageDelaySec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "MaxChatMessageDelaySec is required",
                        minLength: {
                          value: 1,
                          message: "MaxChatMessageDelaySec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-4">
                  <label>
                    AgentLogoutTimerSec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="AgentLogoutTimerSec"
                      value={state.AgentLogoutTimerSec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "AgentLogoutTimerSec is required",
                        minLength: {
                          value: 1,
                          message: "AgentLogoutTimerSec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    MinEmailAnswerDelaySec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="MinEmailAnswerDelaySec"
                      value={state.MinEmailAnswerDelaySec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "MinEmailAnswerDelaySec is required",
                        minLength: {
                          value: 1,
                          message: "MinEmailAnswerDelaySec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    MaxEmailAnswerDelaySec
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="MaxEmailAnswerDelaySec"
                      value={state.MaxEmailAnswerDelaySec}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "MaxEmailAnswerDelaySec is required",
                        minLength: {
                          value: 1,
                          message: "MaxEmailAnswerDelaySec is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-4">
                  <label>
                    AgtInitialiseDelaySecs
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="AgtInitialiseDelaySecs"
                      value={state.AgtInitialiseDelaySecs}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "AgtInitialiseDelaySecs is required",
                        minLength: {
                          value: 1,
                          message: "AgtInitialiseDelaySecs is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    ClientSecret
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="ClientSecret"
                      value={state.ClientSecret}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "ClientSecret is required",
                        minLength: {
                          value: 1,
                          message: "ClientSecret is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                     PublishStats
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="PublishStats"
                      value={state.PublishStats}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "PublishStats is required",
                        minLength: {
                          value: 1,
                          message: "PublishStats is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-4">
                  <label>
                    EnableSdkLogs
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="EnableSdkLogs"
                      value={state.EnableSdkLogs}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "EnableSdkLogs is required",
                        minLength: {
                          value: 1,
                          message: "EnableSdkLogs is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
                <div className="form-group col-4">
                  <label>
                    ClientsPerInstance
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      required="required"
                      name="ClientsPerInstance"
                      value={state.ClientsPerInstance}
                      onChange={(e) => updateTenantConfig(e)}
                      ref={register({
                        required: "ClientsPerInstance is required",
                        minLength: {
                          value: 1,
                          message: "ClientsPerInstance is too short, minimum length is 1",
                        },
                      })}
                    />           
                </div>
              </div>
            </div>
          </div>
          <TenantList data={stateTenantList} updateTenantList={updateTenantList} />
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