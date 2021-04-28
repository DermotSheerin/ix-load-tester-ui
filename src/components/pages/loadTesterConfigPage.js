import React from "react";
import useConfigCycle from '../hooks/useConfigCycle'
import LoadTesterConfig from '../loadTesterConfig/index.js'


const LoadTesterConfigPage = () => {
  const [config] = useConfigCycle();

  return (
    <>
    {config ?
      (<LoadTesterConfig data={config} />) : <h1>Please check port 8080 connection to load-tester-master</h1> }
    </>
  );
};

export default LoadTesterConfigPage;