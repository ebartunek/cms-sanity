import { GetStaticProps } from 'next'
import {client} from '../lib/sanity'
import { groq } from 'next-sanity'
import {PortableText} from '@portabletext/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

interface Faq {
  _id: string;
  title: string;
  content: [];
}

interface Props {
  faqs: [Faq];
}

export default function Home({faqs}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity CMS Test</title>
        <meta name="description" content="Testing Sanity.io CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Sanity.io integration in Next.js</h1>
        <p>Here is an example section for a FAQ section. This content is static and can be updated more easily through the Sanity Studio.</p>
        <hr/>
        {faqs.map(data => (
          <div key={data._id}>
            <h4>{data.title}</h4>
            <PortableText value={data.content}/>
          
          </div>
        ))}
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ faqs: [Faq] }> = async (
  context
) => {
  const faqs: [Faq] = await client.fetch(groq`*[_type == "faq"]{_id,title,content}`)

  return {
    props: {
      faqs,
    },
  }
}