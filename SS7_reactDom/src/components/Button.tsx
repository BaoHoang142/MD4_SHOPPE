import React from 'react'
import './Button.css'
type ButtonProps = {
    size: "sm"|"md"|"lg";
    onClick?:() => void;
    status?:boolean;
}
const Button:React.FC<ButtonProps> = ({size, onClick,status}: ButtonProps) => {
    console.log("size", size)
  return (
    <button className={`${size}`} onClick={onClick}>
        {" "}
        {status ? "Loading..." : "me"}
    </button> // element
  )
};

export default Button;

/* 
click vào button cái đầu tiên sẽ xuất hiện loading
*/