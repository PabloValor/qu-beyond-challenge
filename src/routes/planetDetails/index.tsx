import { Link, useParams } from "react-router-dom";
import PlanetDetailsSkeleton from "../../components/skeleton/pages/planetDetails";
import { Error } from '../../components/util/error'
import { getFilms, getPlanet } from "../../services/swapi";
import { Button } from "../../components/util/button";
import { useEffect, useState } from "react";
import Film from "../../types/film";
import FilmsSkeleton from "../../components/skeleton/components/filmsSkeleton";
import PlanetProperties from "../../components/planets/properties";
import Films from "../../components/planets/films";
import { getRandomImageId } from "../../util";

export default function PlanetDetail() {
    const [films, setFilms] = useState<Film[]>()

    const { id } = useParams(); 
    const { data, isLoading, error } = getPlanet(id)

    useEffect(() => {
      if (data) {
        getFilms(data.films)
          .then((data: Film[]) => setFilms(data))
      }
    }, [data])

    return (
      <>
        { error && <Error message={error.message}/> }
        { isLoading && <PlanetDetailsSkeleton/> }
        {
          data &&
          <>
            <h2 className='uppercase font-extrabold text-center text-[30px]'>{data.name}</h2>
            <div className={`my-4 h-64 shadow-lg rounded-lg w-full bg-[url('/img/bg-galaxy.png')] bg-center bg-cover bg-no-repeat overflow-hidden`}>
              <img src={`/img/planet-${getRandomImageId()}.svg`} className='w-[250px] block mx-auto'/>
            </div>

            <PlanetProperties planet={data} />

            { !films && <FilmsSkeleton/> }
            {
              films && films.length > 0 && 
              <div className='bg-slate-300 p-4 rounded-lg shadow-lg w-full'>
                  <div className="text-center font-bold text-2xl pb-5 uppercase">{`planet ${data.name} appers in the following movies`}</div>
                  <div className="md:flex sm:block gap-4 flex-row flex-wrap place-content-center">
                    <Films films={films}/>
                  </div>

              </div>
            }

            <div className='text-center mt-5'>
                <Link to='/'>
                  <Button>
                    Back
                  </Button>
                </Link>
            </div>
          </>
        }
     </>
    )
}