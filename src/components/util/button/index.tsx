import {  ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    styles?: string,
    onclick?: any,
    disabled?: boolean
}

export const Button = ({ children, styles = '', onclick = () => {}, disabled} : ButtonProps)  => {
    return (
        <button
        disabled={disabled}
        className={`
        disabled:bg-slate-300 disabled:cursor-not-allowed
        "bg-blue-500 bg-blue-700 hover:bg-blue-500 uppercase text-white font-bold py-2 px-4 rounded inline-block ${styles}
        `}
        onClick={onclick}
        >
            { children }
        </button>
    )
}