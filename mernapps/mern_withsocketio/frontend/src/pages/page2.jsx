import { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import socketModule from "../socket";

function Page2() {
  useEffect(() => {
    // Listen for "message" when this component is mounted
    socketModule.on("message", handleMyEvent);

    return () => {
      // Unregister the "message" listener when this component is unmounted
      socketModule.off("message", handleMyEvent);
    };
  }, []);

  const handleMyEvent = (data) => {
    console.log(`Received data: ${data.message}`);
  };

  const handleClick = () => {
    // Send a "message" event when the button is clicked
    socketModule.emit("message", { message: "Hello!" });
  };

  return (
    <>
      <h1>Page2</h1>
      <button onClick={handleClick}>Send Event</button>
      <Link to="/">gotohome</Link>
      <Link to="/page1">gotopage1</Link>
    </>
  );
}

export default Page2;
