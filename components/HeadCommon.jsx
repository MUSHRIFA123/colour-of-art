import SchemaOrg from "@/components/SchemaOrg";

const HeadCommon = () =>  {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <SchemaOrg /> 

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;700;900&family=Poppins:wght@400;500;600;700;800&display=swap" />

      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_CODE}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_CODE}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
}

export default HeadCommon;
