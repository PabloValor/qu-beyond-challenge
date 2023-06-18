import { Planet as TPlanet } from "../../types/planet"
import Planet from "./planet"
import PlanetsSkeleton from "../skeleton/components/planets"
import { getPlanets } from "../../services/swapi"
import { Button } from "../util/button"
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Error } from '../../components/util/error'


export default function Planets() {
  let [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('p') || '1'

  const [page, setPage] = useState(currentPage)
  const { data, error, isLoading } = getPlanets(page)


  function handleClick(url: string) {
    const page = subtractPage(url) 
    setPage(page)
    setSearchParams({p: page})
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <>
      { isLoading && <PlanetsSkeleton/> }

      { error && <Error message={error.message}/> }

      <div className={`flex flex-wrap place-content-center gap-8`}>
        {
            data && data.results.map((planet : TPlanet) => <Planet key={planet.id} planet={planet}/>)
        }
      </div>

      {
        data &&
        <div className="uppercase text-center mt-5">
            <Button styles={`mx-1 cursor-pointer`} disabled={data.previous === null} onclick={() => handleClick(data.previous)}>
              Prev
            </Button>
            <Button styles="mx-1 cursor-pointer" disabled={data.next === null} onclick={() => handleClick(data.next)}>
              Next
            </Button>
        </div>
      }
    </>
  )

  function subtractPage(url: string) {

    if(!url) return "1"

    const regex = /(\d+)(?=[^\/]*$)/
    const matches = url.match(regex)
    const page = matches ? matches[0] : "1"
    return page
  }

}
