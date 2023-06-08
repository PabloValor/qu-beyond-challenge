import { default as TFilm }  from "../../../types/film";
import { MdOutlineLocalMovies } from "react-icons/md";

export default function Film({ films } : { films: TFilm[]}) { 

    return (
        <>
            { 
                films.map((film: TFilm) => (
                <div key={film.title} className="bg-slate-800 text-slate-100 p-1 rounded-lg shadow-md w-full mb-3 md:w-1/4 md:mb-0">
                    <div className='m-2 uppercase text-center'>
                        <MdOutlineLocalMovies className='inline-block mr-1 text-2xl'/><span className='font-bold'>{film.title}</span>
                    </div> 
                    <div className='m-2'>
                        Director: <span className='font-bold'>{film.director}</span>
                    </div> 
                    <div className='m-2'>
                        Producer: <span className='font-bold'>{film.producer}</span>
                    </div> 
                </div>
                ))
            }
        </>
    )

}