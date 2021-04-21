import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {baseIP, port} from "../api/chatStats-api";


const WebsocketStats = () => {
  const [chatStats, setChatStats] = useState("");
  const [graphData, setGraphData] = useState([]);
  // const [userTime, setUserTime] = useState([]);
  // const [systemTime, setSystemTime] = useState([]);

  // retrieve SUT IP and Port from chatStats-api 
  const ENDPOINT = `http://${baseIP}:${port}/`;


  // connect to the socket server on component mount with useEffect. Then, we save each new incoming message in the component's state.
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setChatStats(data);
      // currentData will grab the current value stored in state when this callback is invoked, I then append this array each time with updated memory values
      setGraphData( (currentData) => [
        ...currentData, data.graphData
      ]);
      // setUserTime( (currentData1) => [
      //   ...currentData1, data.userTimeGraph
      // ]);
      // setSystemTime( (currentData2) => [
      //   ...currentData2, data.systemTimeGraph
      // ]);
    });
    // the logic for cleaning up timers and listeners in JavaScript is paramount to avoid memory leaks in the frontend. We need also to close the connection when the component disappears from the DOM. To do so, we return a function from useEffect, with a call to disconnect() on the client
    return () => {
      socket.disconnect();
    };
  }, []);

  return [chatStats, graphData];

};

export default WebsocketStats;