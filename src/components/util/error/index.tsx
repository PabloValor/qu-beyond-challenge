import { BiErrorAlt } from 'react-icons/bi'

export const Error = ({ message } : { message: string })  => {
    return (
        <div className={`bg-red-400 p-2 font-bold text-center shadow-md rounded-md text-xl text-slate-900`}>
            <h3>
                <BiErrorAlt className={`inline-block mr-1 text-4xl`}/>
                {message}
            </h3>
        </div>
    )
}