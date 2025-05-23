import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Korean Reader</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>📘 Korean Reading Practice</h1>
        <p>Welcome! This is your Korean reading app.</p>
        <p>If you see this, your app is working on Vercel 🎉</p>
      </main>
    </div>
  )
}
