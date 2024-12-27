import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development'

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const svgPlugin = {
        plugins: [
            {
                name: 'convertColors',
                params: {
                    currentColor: true
                }
            }
        ]
    }

    const svgrLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: { 
                icon: true,
                svgPlugin
            }
        }]
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? `[path][name]__[local]` : `[hash:base64:8]`
            }
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
            cssLoaderWithModules, 
            "sass-loader"
        ]
    }

    const swcLoader = {
        test: /\.(ts|tsx)$/,  // This will include both .ts and .tsx files
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: "swc-loader",
            options: {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true
                    },
                    transform: {
                        react: {
                            runtime: 'automatic'
                        }
                    }
                }
            }
        }
    }
    
    return [scssLoader, swcLoader, assetLoader, svgrLoader]
}