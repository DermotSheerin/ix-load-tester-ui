import { useEffect, useState } from "react";
import { getConfigActions } from "../api/loadTester-api";

const useConfigActions = () => {
  const [actions, setActions] = useState(null);
  
  useEffect(() => {
    getConfigActions().then((data) => {
      setActions(data);
    });
  }, []);
  return [actions, setActions];
};

export default useConfigActions;