import React, { useEffect, useState } from 'react';

const cache = {}; // in-memory cache

function WPEmbed(props) {
  const { url } = props;
  const [content, setContent] = useState('');

  useEffect(() => {
    async function fetchContent() {
      try {
        if (cache[url]) {
          // ha a tartalom már a cache-ben van, akkor visszatöltjük azt
          setContent(cache[url]);
        } else {
          // különben letöltjük a tartalmat
          const embedUrl = `https://tools.hellowp.io/wp-embed/?url=https://hu.wordpress.org/plugins/${url}/embed/`;
          const response = await fetch(embedUrl);
          const html = await response.text();
          setContent(html);

          // a kapott tartalmat eltároljuk a cache-ben
          cache[url] = html;
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchContent();
  }, [url]);

  return (
    <div
      className="wp-embed"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default WPEmbed;