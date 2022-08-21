const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPassthroughCopy("./styles.css")
    eleventyConfig.addPassthroughCopy("source/assets/img");

    return {
        dir: {
            input: "source",
            output: "_site",
            includes: "includes"
        }
    }
}