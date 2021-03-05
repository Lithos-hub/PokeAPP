const { merge } = require("webpack-merge");
const commonConfig = require("./src/config/webpack.common");


module.exports = (env, argv) => {
    
    const mode = argv.mode ? argv.mode : "production";
    const modeConfig = require(`./src/config/webpack.${mode}`)

    
    return merge(commonConfig, modeConfig)

};