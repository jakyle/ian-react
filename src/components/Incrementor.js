import { useState, useCallback } from 'react';

export const Incrementor = () => {
    // you know it's a Hook because of the naming convention, this hook 
    // is useState, the intention here is to "get" set data and "set" state date
    // the set function in useState tells react to RE-Render the component
    // which will then re-render the html

    const [count, setCount] = useState(0); // useState is how you maintain data that you
    // want to dynamically change and re-render ie, show the changes to your data

    // usually the way you handle using "event" functions in your html
    const incrementHandler = () => {
        setCount(count + 1);
    }

    // you can optimize your call back functions with the useCallback hook
    const cachedIncrementHandler = useCallback(
        () => setCount(count + 1),
    [count]);

    return (
        <div>
            <button onClick={cachedIncrementHandler} >+</button>
            <p>{count}</p>
        </div>
    )
}