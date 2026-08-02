/**
 * Minimal Cloudflare Worker entry point for the independently hosted static site.
 * Sites provides the ASSETS binding from dist/client at deploy time.
 */
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
