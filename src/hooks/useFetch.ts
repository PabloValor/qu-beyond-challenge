import { useEffect, useState } from "react"
import { ApiError } from "../types/apiError"

export default function useFetch<Response>(
    { url, errorMessage, mapper }
    : { url : string, errorMessage: string, mapper?: Function }
    )
{ 
    const [data, setData] = useState<Response>()
    const [error, setError] = useState<ApiError>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)

        fetch(url)
        .then(res => res.json())
        .then((res: Response) => {

            if(mapper) { 
                mapper(res)
            }

            setData(res)
            setIsLoading(false)
        })
        .catch(err => {
            const error : ApiError = {
                message: errorMessage,
                reason: `Error calling API with URL: ${url}` 
            }
            setError(error)
            setIsLoading(false)
        })

    }, [url])

    return { data, error, isLoading }
}