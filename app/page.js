import Head from 'next/head';
import './page.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoToGreen Gitex Contact - In Progress</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <h1>GoToGreen Gitex Contact</h1>
        <div className="spinner"></div>
        <div className="status">In Progress</div>
        <p>We're working on something amazing. Stay tuned!</p>
      </main>
    </>
  );
}
