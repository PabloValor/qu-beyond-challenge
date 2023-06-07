import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => (
    <header className="text-slate-200 bg-slate-900 h-28 flex items-center place-content-center flex-col shadow-lg">

        <Link to={'/ '}>
            <h1 className="font-bold text-3xl mb-2">QuBeyond Challenge</h1>
        </Link>

        <a href="https://github.com/PabloValor/qu-beyond-challenge"
        target="_blank"
        className="hover:underline hover:underline-offset-2">
            <FaGithub className="inline-block mr-1" />
            Check repo 
        </a>
    </header>
)

export default Header