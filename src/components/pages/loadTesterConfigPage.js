import React, { useState } from "react";
import useConfigCycle from '../hooks/useConfigCycle'
import useConfigActions from '../hooks/useConfigActions'
import LoadTesterConfig from '../loadTesterConfig/index.js'
import TenantList from '../tenantList'


const LoadTesterConfigPage = () => {
  const [config] = useConfigCycle();
  // const [actions] = useConfigActions();

  return (
    <>
    {config ?
      (<LoadTesterConfig data={config} />) : <h1>Please check port 8080 connection to load-tester-master</h1> }
    </>
  );
};

export default LoadTesterConfigPage;