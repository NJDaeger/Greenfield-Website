import { useState } from "react"
import * as React from "react";
import Button from "../button/Button";

/**
 * 
 * @param {{id: string|null, options: [any], defaultOptionIndex: int, onSelect: function(selection), prefixSelection: string, reverseOptions: boolean}} props 
 */
const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(props.reverseOptions ? [...props.options].reverse() : props.options);
    const [selected, setSelected] = useState(props.options[props.defaultOptionIndex]);

    return (
        <>
            <div className="dropdown-base">
                <Button click={() => setOpen(!open)} text={
                    <span className="dropdown-selection">
                        <span>{props.prefixSelection + selected}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"bi bi-chevron-down dropdown-chevron " + (open ? "" : "closed")} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                } dataType="glass"></Button>
                <div className={"dropdown-container-blur dropdown-options-closed " + (open ? "dropdown-options-opening" : "dropdown-options-closing")}></div>
                <div className={"dropdown-container dropdown-options-closed flex-shrink-0 " + (open ? "dropdown-options-opening" : "dropdown-options-closing")}>
                    <div className={"dropdown-options"}>
                        {options.map((option, index) => {
                            return <span className={selected == option ? "dropdown-selected" : ""} key={index}>
                                <Button click={() => {setOpen(!open); setSelected(option); props.onSelect(option)}} text={option}></Button>
                            </span>
                        })}
                    </div>
                </div>
            </div>
        </>
        
    )
}

Dropdown.defaultProps = {
    id: null,
    options: [],
    defaultOptionIndex: 0,
    onSelect: (selection) => {},
    prefixSelection: "",
    reverseOptions: false
}

export default Dropdown;