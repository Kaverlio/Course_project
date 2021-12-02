import React, { useState } from "react";


function Dropdown({ selected, setSelected, options} ) {
    const [isActive, setIsActive] = useState(false);
    
    return (
        
        <div className="dropdown d-inline ml-2">
            <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) =>
                setIsActive(!isActive)}>
                {selected}
            </a>
            {isActive && (
                <div class="dropdown-content" aria-labelledby="dropdownMenuButton1">
                    {options.map((option) => (
                        <a onClick={(e) => {
                            setSelected(option);
                            setIsActive(false)
                        }} className="dropdown-item">
                            {option}
                        </a>
                    ))}

                </div>
            )}
        </div>
    
    );

}

export default Dropdown;