import https from 'https';

const search = 'AnimatedTextProps underlineDuration';
const url = `https://api.github.com/search/code?q=${encodeURIComponent(search)}`;

const options = {
  headers: {
    'User-Agent': 'Node.js',
    'Accept': 'application/vnd.github.v3.text-match+json'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    if (json.items && json.items.length > 0) {
      console.log(json.items[0].html_url);
      console.log(json.items[0].text_matches);
    } else {
      console.log('No results found.');
    }
  });
}).on('error', err => console.error(err));
