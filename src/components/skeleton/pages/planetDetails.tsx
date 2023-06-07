export default function PlanetDetailsSkeleton() { 
    return (
        <>
            <div className="h-8 mb-3 bg-slate-500 w-full rounded-md animate-pulse"></div>
            <div className="h-52 mb-3 bg-slate-500 w-full rounded-md animate-pulse"></div>
            <div className="flex gap-4">
                <div className="h-52 bg-slate-500 p-4 w-full rounded-md animate-pulse">
                    <div className="h-7 mb-3 w-1/4 bg-slate-600 rounded-md animate-pulse"></div>
                    <div className="h-7 mb-3 w-1/3 bg-slate-600 rounded-md animate-pulse"></div>
                    <div className="h-7 mb-3 w-1/2 bg-slate-600 rounded-md animate-pulse"></div>
                </div>
                <div className="h-52 bg-slate-500 p-4 w-full rounded-md animate-pulse">
                    <div className="h-7 mb-3 w-1/4 bg-slate-600 rounded-md animate-pulse"></div>
                    <div className="h-7 mb-3 w-1/3 bg-slate-600 rounded-md animate-pulse"></div>
                    <div className="h-7 mb-3 w-1/2 bg-slate-600 rounded-md animate-pulse"></div>
                </div>
            </div>
            <div className="mt-3 text-center" >
                <div className="h-8 bg-slate-500 w-20 rounded-md animate-pulse inline-block"></div>
            </div>
        </>
    )
}