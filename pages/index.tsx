import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Homepage</h1>
      </main>

      <footer>
        <a
          href="https://github.com/amaralc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ...
        </a>
      </footer>
    </div>
  )
}
