import * as React from "react";
//create a functional react component called button that has the props href, text, click, 

const rippleClick = (e) => {
    const elem = e.currentTarget.parentElement;
    if (elem.querySelector(".disabled")) return;
    var rect = elem.getBoundingClientRect();
    const circle = document.createElement("span");
    const diameter = Math.max(elem.clientWidth, elem.clientHeight);
    const radius = diameter/2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (rect.left + radius)}px`;
    circle.style.top = `${e.clientY - (rect.top + radius)}px`;
    circle.classList.add("ripple-effect");
    const ripple = elem.getElementsByClassName("ripple-effect")[0];
    if (ripple) ripple.remove();
    elem.appendChild(circle);
}


const Button = (props) => {
    return (
        <div  className={"ripple button-base " + props.outerClass ?? ""} data-type={props.dataType}>
            {props.href == null ? 
                <button onClick={ (e) => {
                    rippleClick(e);
                    props.click();
                }} className={props.innerClass ?? ""}>{props.text}</button> : 
                <a href={props.href} onClick={ (e) => {
                    rippleClick(e)
                    props.click();
                }} className={props.innerClass ?? ""}>{props.text}</a>}
        </div>
    )
}
Button.defaultProps = {
    href: "#",
    text: "Button",
    click: () => {},
    dataType: "",
    outerClass: "",
    innerClass: ""
}

export default Button;