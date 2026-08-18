/* Node-Loader: ersetzt `import.meta.env` durch ein Dummy-Objekt,
   damit die Vite-Module in plain Node importierbar sind.
   Aendert die Datei auf der Platte NICHT. */
export async function load(url, context, nextLoad) {
  const res = await nextLoad(url, context)
  if (url.startsWith('file:') && /\.(js|mjs|jsx)$/.test(url) && !url.includes('node_modules')) {
    let src = typeof res.source === 'string' ? res.source : Buffer.from(res.source).toString('utf8')
    if (src.includes('import.meta.env')) {
      src = src.replaceAll('import.meta.env', '({ BASE_URL: "/", MODE: "test", DEV: false, PROD: true })')
      return { ...res, source: src }
    }
  }
  return res
}
