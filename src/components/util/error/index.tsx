import { BiErrorAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Button } from '../button'

export const Error = ({ message } : { message: string })  => {
    return (
        <div className={`bg-red-500 p-2 font-bold text-center shadow-md rounded-md text-xl text-slate-50`}>
            <h3>
                <BiErrorAlt className={`inline-block mr-1 text-3xl`}/>
                {message}
            </h3>
            <Link to={'/ '}>
                <Button>
                    Home
                </Button>
            </Link>
        </div>
    )
}