import { ReactNode } from "react";

interface BadgetProps {
    children: ReactNode,
    bg?: string,
    styles?: string
}

export const Badget = ({ children, styles = '', bg = 'bg-gradient-to-r from-blue-500 to-violet-500'} : BadgetProps)  => {
    return (
        <div className={`
        text-zinc-50
        inline-block p-1 rounded-md shadow-md font-bold ${bg} ${styles}
        `}>
            { children }
        </div>
    )
}