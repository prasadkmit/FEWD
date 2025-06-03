import "./App.css";
import React, { useState } from 'react';
// import TextUpdater from './TextUpdater';
// import FocusBlurDemo from "../components/FocusBlur";
// import MouseEventDemo from "../components/onMouseEvent";
// import Weather from "../components/Weather";
// import ReactLifecycle from "../components/Lifecycle";
import ApiLifecycle from "../components/apilifecycle"

function App() {
  const [mount, setMount] = useState(true);
  return (
    <>
      {/* <div>
        <TextUpdater />
      </div> */}

      {/* <div>
        <FocusBlurDemo />
      </div> */}

      {/* <div>
        <MouseEventDemo/>
      </div> */}

      {/* <Weather/> */}
      {/* <div>
      {mount? <>
        <ReactLifecycle/>
      </>:<>
      <div>Component is not avaliable</div>
      </>
      }
      <button onClick={()=> setMount(!mount)}>mount/unmount</button>
    </div> */}
      <div>
      {mount? <>
        <ApiLifecycle/>
      </>:<>
      <div>Component is not avaliable</div>
      </>
      }
      <button onClick={()=> setMount(!mount)}>mount/unmount</button>
    </div>
    </>
  );
}
export default App;
