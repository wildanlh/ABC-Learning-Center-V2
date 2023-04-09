import Head from "next/head";

interface titleProps {
  pageTitle: string;
}

export default function Header({ pageTitle }: titleProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="ABC Learning Center" />
        <meta name="keywords" content="Learning Course" />
        <meta name="author" content="Wildan Luqmanul Hakim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
