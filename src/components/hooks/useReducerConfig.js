// onChange event sets all values to strings therefore there are a number of conditionals below
// to parse integers, return boolean or no change

const convertPayload = (payloadType, payload) => {
  if (payloadType === "number") {
    return parseInt(payload);
  } else if (payloadType === "radio") {
    return payload == "true";
  } else return payload;
};

export const reducerMainConfig = (state, action) => {
  action.payload = convertPayload(action.payloadType, action.payload);
  console.log(
    `inside reducer, payloadType is: ${typeof action.payload} and value is ${
      action.payload
    } }`
  );

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
  action.payload = convertPayload(action.payloadType, action.payload);
  console.log(
    `inside reducer, payloadType is: ${typeof action.payload} and value is ${
      action.payload
    } }`
  );

  switch (action.type) {
    case "tenantList-update":
      // create a new array to modify using spread operator
      const newState = [...state];
      // access the index of the newState array that is being modified
      newState[action.index] = {
        // using the spread operator to extract the fields from the newState array (at index specified) and modify the required action field
        ...newState[action.index],
        [action.field]: action.payload,
      };
      return newState; // return the modified newState array that contains the field change
    case "add-tenant":
      const newTenant = [
        ...state,
        {
          TenantId: "",
          Domain: "",
          AgentRangeStart: 0,
          AgentRangeEnd: 0,
          AgentPassword: "",
          TransferServiceId: "",
        },
      ];
      return newTenant;
    case "delete-tenant":
      // The filter() method creates a new array with all elements that pass the test implemented by the provided function i.e.,
      // keep every item except the one we want to remove and return this new array
      return state.filter((_, index) => index != action.index);
    default:
      return state;
  }
};
