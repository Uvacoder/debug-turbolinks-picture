export default ({ mode }) => {
  return {
    logLevel: mode === "development" ? "warn" : "info",
    build: {
      outDir: "_site",
      sourcemap: true,
      manifest: true,
      rollupOptions: {
        input: "/js/main.js",
      },
    },
  };
};
