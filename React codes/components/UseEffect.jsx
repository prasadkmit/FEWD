import React, {useEffect, useState} from "react"

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
    alert("This will run on initial rendering only");
  }, []);
  useEffect(() => {
    alert("This will render on count change");
  }, [count]);
    return (
        <>
        <div>
            <button onClick={()=> setCount(count + 1)}>Increase count</button>
        </div>
        </>
    )
}
export default UseEffect;