// import React from "react";
// import { useState, useEffect } from "react";
// import { toggleStart } from "../api/chatStats-api";

// // https://egghead.io/lessons/react-store-values-in-localstorage-with-the-react-useeffect-hook

// const ToggleStartButton = () => {
//   const initialStoredToggle = () => window.localStorage.getItem("isToggled" || false)
//   const [isToggled, setToggled] = useState(initialStoredToggle);
//   console.log(`Here is isToggled: ${isToggled}`)

//   // React.useEffect(() => {
//   //   const getStorageToggle = localStorage.getItem("isToggled" || false)
//   //   setToggled(getStorageToggle)
//   // }, [])

//   useEffect(
//     () => {
//     window.localStorage.setItem("isToggled", isToggled)
//   }, [isToggled])
  
//   const handleClick = () => {
//     setToggled(!isToggled);
//     toggleStart(!isToggled) 
//   }


//   return (
//     <button className="btn w-10 btn-secondary" onClick={handleClick}>
//       {!isToggled ? 'Start Test' : 'Stop Test'}
//     </button>
//   );
// };

// export default ToggleStartButton;