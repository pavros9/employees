import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
        },
        exclude: /node_modules/
    }

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {loader: '@svgr/webpack', options: {icon: true}}
        ],

    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const babelLoader = buildBabelLoader()
    const cssLoader   = buildCssLoader(isDev);

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader
    ]
}