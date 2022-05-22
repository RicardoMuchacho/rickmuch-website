import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="player" />
      <meta name="twitter:site" content="@rickmuch00" />
      <meta name="twitter:player" content="https://rickmuch.com" />
      <meta name="twitter:player:width" content="200" />
      <meta name="twitter:player:height" content="200" />

      <meta
        name="twitter:title"
        content="Ricardo Muchacho | Computer Science Student / Developer"
      />
      <meta name="twitter:description" content="Personal Portafolio Website" />
      <meta name="twitter:image" content="/workRick.jpg" />
    </Head>
  );
}
