import { useState } from 'react';

export const Incrementor = () => {
    // you know it's a Hook because of the naming convention, this hook 
    // is useState, the intention here is to "get" set data and "set" state date
    // the set function in useState tells react to RE-Render the component
    // which will then re-render the html
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count+1)} >+</button>
            <p>{count}</p>
        </div>
    )
}