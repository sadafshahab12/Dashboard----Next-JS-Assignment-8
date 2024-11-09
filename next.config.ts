import type { NextConfig } from "next";
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },

  webpack(config, { isServer }) {
    // Example: Adding an alias to resolve directories
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'utils');

    // Example: Adding a Webpack plugin for bundle analysis
    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './bundles/report.html',
        })
      );
    }

    // Example: Custom CSS loader for SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    });

    return config;
  },
};

export default nextConfig;
