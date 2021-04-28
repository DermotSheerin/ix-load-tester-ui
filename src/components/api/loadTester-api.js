import axios from 'axios';

export const baseIP = "localhost"
export const port = "8080"


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getConfigCycle = async () => {
  return await axios.get(
    `http://${baseIP}:${port}/cycle_template`
  )
};

export const setConfigCycle = async (data) => {
  return await axios.post(
    `http://${baseIP}:${port}/cycle`, JSON.stringify(data), config
  )
};

export const getConfigAction = async () => {
  return await axios.get(
    `http://${baseIP}:${port}/actions`
  )
};

export const setConfigAction = async (data) => {
  return await axios.post(
    `http://${baseIP}:${port}/actions`, JSON.stringify(data), config
  )
};

