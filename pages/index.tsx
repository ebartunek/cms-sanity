import { GetStaticProps } from 'next';
import {client} from '../lib/sanity';
import { groq } from 'next-sanity';
import { components } from 'lib/serializer';
import {PortableText} from '@portabletext/react';
import Head from 'next/head';
import { Center, Container, Title, Accordion, createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));


interface Faq {
  _id: string;
  title: string;
  content: [];
}

interface Props {
  faqs: [Faq];
}

export default function Home({faqs}: Props) {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Sanity CMS Test</title>
        <meta name="description" content="Testing Sanity.io CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Center><h1>Sanity.io integration in Next.js</h1></Center>
        <p>Here is an example section for a FAQ section. This content is static and can be updated more easily through the Sanity Studio.</p>
        <hr/>
        <Accordion variant="separated">
        {faqs.map(data => (
          <Accordion.Item key={data._id} className={classes.item} value={data._id}>
            <Accordion.Control>
              <Title order={1}>{data.title}</Title>
              </Accordion.Control>
            <Accordion.Panel>
              <PortableText 
                value={data.content} 
                components={components} 
                />
              </Accordion.Panel>
          </Accordion.Item>
        ))}
        </Accordion>
        </Container>
    
    </>
  )
}

export const getStaticProps: GetStaticProps<{ faqs: [Faq] }> = async (
  context
) => {
  const faqs: [Faq] = await client.fetch(groq`*[_type == "faq"]|order(_createdAt asc){_id,title,content}`)

  return {
    props: {
      faqs,
    },
  }
}