import { useEffect, useState } from "react";
import { getConfigCycle } from "../api/loadTester-api";

const useConfigCycle = () => {
  const [config, setConfig] = useState(null);
  
  useEffect(() => {
    getConfigCycle().then((data) => {
      setConfig(data);
    });
  }, []);
  return [config];
};

export default useConfigCycle;