export default function FilmsSkeleton() {
    return (
        <>
            <div className="h-12 bg-slate-500 my-2 animate-pulse "></div>
            <div className="mb-3 bg-slate-500 rounded-md p-4 gap-4 animate-pulse block md:flex place-content-center">
                <div className="h-40 w-full mb-2 md:mb-0 md:w-1/6 bg-slate-300 animate-pulse rounded-lg"></div>
                <div className="h-40 w-full mb-2 md:mb-0 md:w-1/6 bg-slate-300 animate-pulse rounded-lg"></div>
                <div className="h-40 w-full mb-2 md:mb-0 md:w-1/6 bg-slate-300 animate-pulse rounded-lg"></div>
                <div className="h-40 w-full mb-2 md:mb-0 md:w-1/6 bg-slate-300 animate-pulse rounded-lg"></div>
            </div>
        </>
    )
}