import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    styles?: string
}

export const Button = ({ children, styles = ''} : ButtonProps)  => {
    return (
        <div className={`
        "bg-blue-500 bg-blue-700 hover:bg-blue-500 uppercase text-white font-bold py-2 px-4 rounded inline-block ${styles}
        `}>
            { children }
        </div>
    )
}