export default function PlanetsSkeleton() { 

    return (
        <div className={`flex flex-wrap place-content-center gap-8`}>
        {
            [1,2,3,4,5,6,7,8].map((skeleton) => <PlanetSkeleton key={skeleton}/>)
        }
        </div>
    )
}

function PlanetSkeleton() { 

    return (
        <div className={`
        p-3
        rounded-md shadow-lg
        w-full md:max-w-[300px]
        flex min-h-[22.5rem] h-full
        bg-slate-500
        animate-pulse 
        `}>
            <div className="flex flex-col space-y-3 justify-between items-center w-full animate-pulse">

                <div className="h-8 w-full rounded-md bg-slate-400"></div>

                <div className="h-[230px] w-[230px] rounded-full bg-slate-400"></div>

                <div className="w-full">
                    <div className="flex flex-row space-x-1">
                        <div className="h-8 w-2/6 rounded-md bg-slate-400"></div>
                        <div className="h-8 w-2/6 rounded-md bg-slate-400"></div>
                    </div>
                </div>
            </div>    
        </div>
    )
}