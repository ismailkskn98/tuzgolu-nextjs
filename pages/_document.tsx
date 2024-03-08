import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="Copyright © 2024 Tuzgölü Motorlu Araçlar tescillenmiş markadır, Tüm Hakları Saklıdır." />
        <meta name="content-language" content="tr" />
        <meta name="author" content="ismail-Keskin" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tuzgölü Motorlu Araçlar" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Tuzgölü Motorlu Araçlar mercedes Benz hafif ticari (sprinter) araçlarınızın mekanik tamir bakım ve yedek parça Tedariğinin yapılması, yolda kalınan durumlarda yol yardımının sağlanması amacıyla sizler için vardır."
        />
        <meta
          name="keywords"
          content="tuzgölü, tuzgölümotor, tuzgölümotorluaraçlar, ankaramotor, ankaramotorluaraçlar, dolmuş, mercedes"
        />
        <link rel="canonical" href="https://www.tuzgolumotorluaraclar.com/" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className="dark:bg-dark-gray bg-light-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
