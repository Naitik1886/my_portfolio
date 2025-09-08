
export function Tooltip() {


  return (
    <div className="flex items-center mt-15  h-[56px] justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8  w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
     <img data-tippy-content=  "MongoDB" className='w-15 cursor-pointer h-15'  src="/MongoDB.svg" alt="mongo" />
     <img data-tippy-content="ExpressJs" className='w-15 cursor-pointer h-15'  src="/express2.svg" alt="mongo" />
     <img data-tippy-content="ReactJs" className='w-15 cursor-pointer h-15'  src="/React.svg" alt="mongo" />
     <img data-tippy-content="NodeJs" className='w-15 cursor-pointer h-15'  src="/Node.js.svg" alt="mongo" />

    </div>
  );
}