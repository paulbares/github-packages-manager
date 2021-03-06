module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/github-packages-manager/' : '/',
    outputDir: "docs",
    chainWebpack: config => config.optimization.minimize(false)
}