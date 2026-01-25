import { useEffect, useState } from 'react';

const cache = {};

const htmlEntities = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&#8211;': '\u2013',
  '&#8212;': '\u2014',
  '&#8216;': '\u2018',
  '&#8217;': '\u2019',
  '&#8220;': '\u201C',
  '&#8221;': '\u201D',
  '&nbsp;': ' ',
};

function decodeHtmlEntities(text) {
  if (!text) return '';
  return text.replace(/&[^;]+;/g, (match) => htmlEntities[match] || match);
}

function WPEmbed({ url }) {
  const [plugin, setPlugin] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPlugin() {
      try {
        if (cache[url]) {
          setPlugin(cache[url]);
          return;
        }

        const fields = [
          'name',
          'slug',
          'author',
          'rating',
          'active_installs',
          'short_description',
          'icons',
          'banners'
        ].join(',');

        const apiUrl = `https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${url}&fields=${fields}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
          setError(true);
          return;
        }

        cache[url] = data;
        setPlugin(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    fetchPlugin();
  }, [url]);

  if (error) {
    return (
      <a
        href={`https://hu.wordpress.org/plugins/${url}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="wp-embed-link"
      >
        {url} - WordPress bővítmény
      </a>
    );
  }

  if (!plugin) {
    return <div className="wp-embed-loading">Betöltés...</div>;
  }

  const icon = plugin.icons?.['2x'] || plugin.icons?.['1x'] || plugin.icons?.svg || plugin.icons?.default || null;
  const pluginUrl = `https://hu.wordpress.org/plugins/${url}/`;
  const name = decodeHtmlEntities(plugin.name);
  const description = decodeHtmlEntities(plugin.short_description);
  const author = decodeHtmlEntities(plugin.author?.replace(/<[^>]*>/g, '') || '');

  return (
    <div className="wp-embed">
      <a href={pluginUrl} target="_blank" rel="noopener noreferrer" className="wp-embed-card">
        {icon && (
          <div className="wp-embed-icon">
            <img src={icon} alt={name} />
          </div>
        )}
        <div className="wp-embed-content">
          <h4 className="wp-embed-title">{name}</h4>
          {description && <p className="wp-embed-description">{description}</p>}
          <div className="wp-embed-meta">
            {author && <span className="wp-embed-author">Szerző: {author}</span>}
            <span className="wp-embed-rating">★ {(plugin.rating / 20).toFixed(1)}</span>
            <span className="wp-embed-downloads">{Number(plugin.active_installs).toLocaleString('hu-HU')}+ aktív telepítés</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default WPEmbed;