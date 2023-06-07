import { FaGithub } from "react-icons/fa"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
    <footer className="bg-slate-900 text-slate-200 h-28 flex items-center place-content-center">
        <h3 className="font-bold">
            <a href="https://github.com/PabloValor/qu-beyond-challenge" target="_blank" className="hover:underline hover:underline-offset-2">
                <FaGithub className="inline-block mr-1" />
                Check repo 
            </a>
            {` | QuBeyond Challenge | ${currentYear}`} 
        </h3>
    </footer>

    )

}
    

export default Footer