import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import * as dotenv from 'dotenv'

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev, analyze, apiUrl } = options

    const env =  dotenv.config({path: `.env.${isDev ? 'development' : 'production'}`})
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            'process.env': JSON.stringify(env.parsed)
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled'
        }),
    ]
}