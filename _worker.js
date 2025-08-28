export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle static assets
    if (url.pathname.startsWith('/_next/') || 
        url.pathname.startsWith('/static/') ||
        url.pathname.includes('.')) {
      return env.ASSETS.fetch(request);
    }
    
    // For all other routes, serve index.html
    const indexRequest = new Request(new URL('/index.html', request.url), request);
    return env.ASSETS.fetch(indexRequest);
  }
};
