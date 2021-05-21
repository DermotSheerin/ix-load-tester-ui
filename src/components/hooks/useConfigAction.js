import { useEffect, useState } from "react";
import { getConfigAction } from "../api/loadTester-api";

const useConfigAction = () => {
  const [action, setAction] = useState(null);

  useEffect(() => {
    getConfigAction().then((data) => {
      setAction(data.data);
    });
  }, []);
  return [action];
};

export default useConfigAction;
