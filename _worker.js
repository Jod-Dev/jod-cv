export default {
  async fetch(request, env, ctx) {
    // Add nodejs_compat flag
    env.NODEJS_COMPAT = true;
    
    // Handle routing for SPA
    const url = new URL(request.url);
    
    // Serve static files directly
    if (url.pathname.startsWith('/_next/') || 
        url.pathname.startsWith('/static/') ||
        url.pathname.includes('.')) {
      return env.ASSETS.fetch(request);
    }
    
    // For all other routes, serve index.html (SPA routing)
    const indexRequest = new Request(new URL('/index.html', request.url), request);
    return env.ASSETS.fetch(indexRequest);
  }
};
