
import { useState } from 'react';
function Stack({ stack, stackLists, stackImages }) {
    
    return (
        <div className="tech-stack">
            <p>{stack}</p>
            <ul>
                {stackLists[stack].map((tech, index) => (
                    <li key={index}>
                        <img src={stackImages[tech]} alt={tech} />
                        <span>{tech}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Stack
