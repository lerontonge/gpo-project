import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/api/organizations.json',
    'utf8'
  );
  const organization = JSON.parse(file);

  return (
    <main className=''>

    </main>
  );
}
