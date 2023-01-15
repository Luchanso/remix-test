const { mountRoutes } = require("remix-mount-routes");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  assetsBuildDirectory: "public/training/build",
  // serverBuildPath: "build/index.js",
  publicPath: "/training/build/",
  routes: (defineRoutes) => {
    // /myapp => app/routes/index.tsx
    const baseRoutes = mountRoutes("/training", "routes");
    // /test => app/addins/test/index.tsx
    // const testRoutes = mountRoutes('/test', 'addins/test')

    // use standard Remix defineRoutes API
    // /some/path/* => app/addins/catchall.tsx

    const routes = {
      ...baseRoutes,
    };
    return routes;
  },
};
