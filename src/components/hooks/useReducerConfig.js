export const reducerMainConfig = (state, action) => {
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
  
export const reducerTenantList = (state, action) => {
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
      case "add-tenant":
        const newTenant = [...state, {
          TenantId: "",
          Domain: "",
          AgentRangeStart: 0,
          AgentRangeEnd: 0,
          AgentPassword: "",
          TransferServiceId: ""
        }];
        return newTenant;
      default:
        return state;
    }
  };