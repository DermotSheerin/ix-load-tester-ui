import { useEffect, useState } from "react";
import { setConfigCycle } from "../api/loadTester-api";

const useSetConfigCycle = (config) => {
  const [response, setResponse] = useState(null);
console.log(config)

  
  useEffect((config) => {
    setConfigCycle(config).then((data) => {
      setResponse(data);
    });
  }, []);
  return [response];
};

export default useSetConfigCycle;