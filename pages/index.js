import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Terragrids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to terragrids
        </h1>
      </main>
    </div>
  )
}
