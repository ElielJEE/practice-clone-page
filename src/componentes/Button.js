import React, { useState } from 'react'
import './Button.css';

const Videos = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="button-content">
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    )
}

export default Videos
