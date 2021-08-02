const pluginImg2Picture = require("eleventy-plugin-img2picture");

const addViteAssetShortcodes = require("./eleventy/vite-asset-shortcodes.js");

const OUTPUT_DIR = "_site";
const PATH_PREFIX = "/";

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginImg2Picture, {
      eleventyInputDir: ".",
      imagesOutputDir: `_site/images/`,
      urlPath: "/images/",
      formats: ["webp", "jpeg"],
      minWidth: 100,
      maxWidth: 1500,
      widthStep: 200,
      fetchRemote: true,
    });

  // Initialise Asset Pipeline
  addViteAssetShortcodes(eleventyConfig, OUTPUT_DIR, PATH_PREFIX);

	return {
    urlPrefix: PATH_PREFIX
  }
}
