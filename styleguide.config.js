
const path = require('path');

module.exports = {
    title: 'React Perfectly Components',
    defaultExample: true,
    components: 'src/components/**/[A-Z]*.js',
    updateWebpackConfig(webpackConfig) {
        const dir = path.resolve(__dirname, 'src');
        webpackConfig.module.loaders.push(
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: dir,
                loader: 'style!css?modules&importLoaders=1'
            }
        );
        return webpackConfig;
    }
};
