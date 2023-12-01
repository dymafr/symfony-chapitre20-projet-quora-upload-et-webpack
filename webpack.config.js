const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore.setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/app.ts')
  .addStyleEntry('question_show', './assets/styles/question_show.scss')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .copyFiles({
    from: './assets/images',
    pattern: /\.(png|jpg|jpeg|svg|gif)$/,
    to: 'images/[path][name].[ext]',
  })
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = '3.33';
  })
  .enableSassLoader()
  .enableTypeScriptLoader()
  .enableVueLoader();

module.exports = Encore.getWebpackConfig();
