import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, callcounter] = useState(0);
  let btnhandle = (val) => {
    if (counter == 0) {
      if (val == -1) {
        callcounter(0);
        return;
      } else if (val == 1) {
        callcounter(counter + val);
        return;
      }
      }
      if (val == 2) { 
        callcounter(counter * val);
      } else {
        callcounter(counter + val);
      }
    
  };
  return (
    <div>
      <div className="counter">
        Counter Value : 
        <span className={`${counter % 2 == 0 ? "green" : "red"}`}>
           {counter}
        </span>
      </div>
      <div className="counter-btn">
        <button
          className="ctr-btn"
          onClick={() => {
            btnhandle(1);
          }}
        >
          increment
        </button>
        <button
          className="ctr-btn"
          onClick={() => {
            btnhandle(-1);
          }}
        >
          decrement
        </button>
        <button
          className="ctr-btn"
          onClick={() => {
            btnhandle(2);
          }}
        >
          double
        </button>
      </div>
    </div>
  );
}

export { Counter };
