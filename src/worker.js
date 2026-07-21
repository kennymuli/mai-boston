/* mai — Worker: static assets only. */

export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
