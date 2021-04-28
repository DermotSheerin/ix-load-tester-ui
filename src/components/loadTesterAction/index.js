import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { setConfigAction } from '../api/loadTester-api';
import "./index.css"

const LoadTesterAction = ({ data }) => {
const [currentAgentState, setCurrentAgentState] = useState(data.AgentState);
const [currentAgentList, setCurrentAgentList] = useState(data.AgentList);
const [newAgentState, setNewAgentState] = useState(data.AgentState);
const [newAgentList, setNewAgentList] = useState(data.AgentList);
const [isLoading, setIsLoading] = useState(false);

const options = ["false", "READY", "NOT_READY", "LOGGED_OUT", "DEACTIVATED" ];

const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async () => {
    // set loader to true on submission
    setIsLoading(true);

    // for payload create a new array and replace TenantList with latest TenantList state
    const payload = {
        AgentState: newAgentState,
        AgentList: newAgentList,
    }
    const response = await setConfigAction(payload);

    // disable loader and update current state if 200 OK received for submission
    response.status = 200 && updateUI();
  }

  const updateUI = () => {
    setIsLoading(false)
    setCurrentAgentState(newAgentState);
    setCurrentAgentList(newAgentList);
  }

  return (
    <>
        <h2 className="text-center p-2 mb-2 bg-primary text-white margin-top">Current Agent Action</h2>
        <div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col" >Current Agent State</th>      
                <th scope="col">Current Agent List</th>
            </tr>
            </thead>
            <tbody>         
                <tr>
                    <td>{currentAgentState}</td>
                    <td>{currentAgentList}</td>                 
                </tr>
            </tbody>
            </table>
        </div>

        {/* <div className="list-group list-group-flush">
            <div className="list-group-item">
              <div className="form-row">
                <div className="form-group col-4"> */}

        <form className="form bg-light text-dark table-space" onSubmit={handleSubmit(onSubmit)} >
            <h2 className="text-center p-2 mb-2 bg-primary text-white margin-top">Set Agent Action</h2>
            <div className="list-group-item">
            <div className="form-row">
                <div className="form-group col-6">
                    <label className="label">Agent State</label>                    
                    <select value={newAgentState} onChange={(e) => setNewAgentState(e.target.value)}>
                    {options.map((value, i) => (
                        <option>{value}</option>
                    ))}
                    </select>
                </div>
                <div className="form-group col-6">
                    <label className="label">Agent List</label>
                    <input name="agentList" value={newAgentList} ref={register} type="text" onChange={(e) => setNewAgentList(e.target.value)}  />
                </div>
            </div>
            </div>
            <div className="form-group">
            { isLoading ? 
            <button type="submit" className="btn-lg btn-danger btn-block-small button-padding">
                Submitting ....
            </button> 
            :
            <button type="submit" className="btn-lg btn-primary btn-block-small button-padding">
                Submit
            </button>}
            </div> 
        </form>
    </>
  );
};

export default LoadTesterAction;