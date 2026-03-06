import Vector1 from '../../assets/vector1.png';
import Vector2 from '../../assets/vector2.png';

const StatusBanner = ({taskStatus, resolvedTasks    }) => {
    return (
        <section className="p-6 md:p-10">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto'>
        <div className="relative w-full max-w-4xl h-60 rounded-2xl overflow-hidden 
      bg-linear-to-r from-purple-700 to-purple-500 text-white flex flex-col 
      items-center justify-center">
        <img
          src={Vector1}
          className="absolute h-full origin-top xl:scale-x-[2.5] lg:scale-x-[1.5] scale-x-[1]  top-0 left-0 w-40"
        />
        <img
          src={Vector2}
          className="absolute h-full origin-top xl:scale-x-[2.5] lg:scale-x-[1.5] scale-x-[1]  bottom-0 right-0 w-40"
        />
        <p className="text-xl opacity-80">In-Progress</p>
        <h1 className="text-6xl font-bold">0</h1>

        </div>
        <div className="relative w-full max-w-4xl h-60 rounded-2xl overflow-hidden 
      bg-linear-to-r from-green-500 to-teal-500 text-white flex flex-col 
      items-center justify-center">
        <img
          src={Vector1}
          className="absolute h-full origin-top xl:scale-x-[2.5] lg:scale-x-[1.5] scale-x-[1] top-0 left-0 w-40"
        />
        <img
          src={Vector2}
          className="absolute h-full origin-top xl:scale-x-[2.5] lg:scale-x-[1.5] scale-x-[1] bottom-0 right-0 w-40"
        />
        <p className="text-xl opacity-80">Resolved</p>
        <h1 className="text-6xl font-bold">0</h1>

        </div>
        </div>
      </section>
    );
};

export default StatusBanner;