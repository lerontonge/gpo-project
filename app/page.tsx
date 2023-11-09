import { promises as fs } from 'fs';
import Link from 'next/link';
export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/api/organizations.json',
    'utf8'
  );
  const organization = JSON.parse(file);

  return (
    <main className=''>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            'url(https://i.ibb.co/5RSgRFM/POST-OFFICE-e1696429842123.jpg)',
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>The General Post Office</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <Link href='news'> <button className='btn btn-primary'>Welcome</button></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
