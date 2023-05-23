import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "../../assets/thumbnail/thumbnail.png";
import {
  url,
  defaultDescription,
  socialSEO,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
  favicon,
} from "../../constants/userInfo";

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  location = "",
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
      "${socialLinks.facebook}",
			"${socialLinks.twitter}",
			"${socialLinks.github}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.stackoverflow}",
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta
        property="og:url"
        content={`${url}${location}/?ref=nikhilgupta.me`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={socialSEO.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={socialSEO.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.linkedin} />
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
