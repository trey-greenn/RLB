import Link from 'next/link';
import CollapsibleTable from './components/table';

export default function Home() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-center text-center">
        <ul className="flex space-x-4 justify-center text-center">
          <li>
            <Link href="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <button>Resources</button>
            </Link>
          </li>
          <li>
            <Link href="/newsletter">
              <button>Newsletter</button>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <button>Dashboard</button>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-center bg-black rounded-lg p-2 shadow-lg shadow-orange-400 w-fit flex justify-center">Welcome to Read Like Buffet </h1>
        </div>
        <div className="flex justify-center">
        <p className="text-center bg-black rounded-lg p-2 shadow-lg shadow-orange-400 mt-4 w-fit" >We aggregate the best resources to help you read like a buffet.</p>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-center bg-black rounded-lg p-2 shadow-lg shadow-orange-400">Data Sources</h2>
          <CollapsibleTable />
        </section>
      </main>
    </div>
  );
}