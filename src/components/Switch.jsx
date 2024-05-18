// Switch.js
import { useState, useEffect } from "react";
import "./Slider.css";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { database } from "./config.js";
import { ref, onValue, set } from "firebase/database";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const lockStatusRef = ref(database, "door/status");
    onValue(lockStatusRef, (snapshot) => {
      const status = snapshot.val();
      setIsChecked(status === "UNLOCKED");
    });
  }, []);

  const handleChange = () => {
    const newStatus = !isChecked ? "UNLOCKED" : "LOCKED";
    setIsChecked(!isChecked);
    set(ref(database, "door/status"), newStatus);
  };

  return (
    <div className="switch-container">
      <label id="switch" className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="slider round">
          {isChecked ? (
            <FaUnlock className="icon unlock" />
          ) : (
            <FaLock className="icon lock" />
          )}
        </span>
        <div className={`slide-text ${isChecked ? "hidden" : ""}`}>
          Slide to unlock
        </div>
      </label>
    </div>
  );
};

export default Switch;
