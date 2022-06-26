import { useState } from "react"
import * as React from "react";
import Button from "../button/Button";

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(props.options[0]);

    return (
        <>
            <div className="dropdown-base">
                <Button click={() => setOpen(!open)} text={
                    <span className="dropdown-selection">
                        <span>{selected}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"bi bi-chevron-down dropdown-chevron " + (open ? "" : "closed")} viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                } dataType="glass"></Button>
                <div className="dropdown-container">
                    <div className={"dropdown-options dropdown-options-closed " + (open ? "dropdown-options-opening" : "dropdown-options-closing")}>
                        <span><Button click={() => {setOpen(!open); setSelected("test2")}} text={"test2"}></Button></span>
                        <span><Button click={() => {setOpen(!open); setSelected("test3")}} text={"test3"}></Button></span>
                        <span><Button click={() => {setOpen(!open); setSelected("test4")}} text={"test4"}></Button></span>
                        <span><Button click={() => {setOpen(!open); setSelected("test5")}} text={"test5"}></Button></span>
                        <span><Button click={() => {setOpen(!open); setSelected("test6")}} text={"test6"}></Button></span>
                    </div>
                </div>
            </div>
        </>
        
    )
}

Dropdown.defaultProps = {
    id: null,
    options: [],
    defaultOptionIndex: -1
}

export default Dropdown;