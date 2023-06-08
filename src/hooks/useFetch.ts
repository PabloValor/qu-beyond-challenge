import { useEffect, useState } from "react"
import { ApiError } from "../types/apiError"

interface UseFetchResponse<T> { 
    data: T | undefined 
    error: ApiError | undefined
    isLoading: boolean
}

export default function useFetch<Response>(
    { url, errorMessage, mapper }
    : { url : string, errorMessage: string, mapper?: Function }
    )
    : UseFetchResponse<Response>
{ 
    const [data, setData] = useState<Response>()
    const [error, setError] = useState<ApiError>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setData(undefined)
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
                reason: `Error calling API with URL: ${url}`,
                err
            }
            setError(error)
            setIsLoading(false)
            // log error somewhere (datalog, newrelic)
        })

    }, [url])

    return { data, error, isLoading }
}