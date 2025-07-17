const MetaOG = ({ ogData }) => {
  return (
    <>
      <meta property="og:title" content={ogData["og-title"]} /> 
      <meta property="og:description" content={ogData["og-description"]} /> 
      <meta property="og:url" content={ogData["og-url"]} /> 
      <meta property="og:site_name" content={ogData["og-site_name"]} />
      <meta property="og:locale" content={ogData["og-locale"]} />
      <meta property="og:image" content={ogData["og-image"]} /> 
      <meta property="og:image:alt" content={ogData["og-image-alt"]} /> 
      <meta property="og:image:type" content={ogData["og-image-type"]} />
      <meta property="og:image:width" content={ogData["og-image-width"]} />
      <meta property="og:image:height" content={ogData["og-image-height"]} />
      <meta property="og:type" content={ogData["og-type"]} />
    </>
  )
}

export default MetaOG;