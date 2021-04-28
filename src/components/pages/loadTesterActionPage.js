import React from "react";
import useConfigAction from '../hooks/useConfigAction';
import LoadTesterAction from '../loadTesterAction/index.js'


const LoadTesterActionPage = () => {
  const [getAction] = useConfigAction();

  return (
    <>
    {getAction ?
      (<LoadTesterAction data={getAction} />) : <h1>Please check port 8080 connection to load-tester-master</h1> }
    </>
  );
};

export default LoadTesterActionPage;