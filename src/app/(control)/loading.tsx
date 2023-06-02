export default function Loading() {
    let circleCommonClasses = 'h-3.5 w-3.5 bg-current rounded-full bg-green-500';

    return (
        <div className='flex justify-center items-center w-full h-screen bg-zinc-800 pb-10'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};
