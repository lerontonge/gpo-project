import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/api/organizations.json',
    'utf8'
  );
  const organization = JSON.parse(file);

  return (
    <main className=' flex justify-around content-around  w-screen p-10'>
      <div className='content-container w-3/4  p-10'>
        <h1 className='text-center'>Welcome to {organization.name}</h1>
        {/* <div className='flex justify-around content-around py-10'> */}
        <div className='card-container bg-blue-200 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
          {/* <!--Card 1--> */}
          <div className='card rounded overflow-hidden shadow-lg '>
            <img
              className='w-full'
              src='/mountain.jpg'
              alt='Mountain'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Registered</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'> test</div>
          </div>
          {/* <!--Card 2--> */}
          <div className='card rounded overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src='/river.jpg'
              alt='River'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Express</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'></div>
          </div>
          {/* // <!--Card 3--> */}
          <div className='card rounded overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src='/forest.jpg'
              alt='Forest'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>PO Box</div>
              <p className='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'></div>
          </div>
        </div>
      </div>

      {/* <div className='h-1/4 w-1/4 bg-blue-500'>Modal 1</div>
          <div className='h-1/4 w-1/4 bg-blue-500'>Modal 2</div>
          <div className='h-1/4 w-1/4 bg-blue-500'>Modal 3</div> */}
    </main>
  );
}
