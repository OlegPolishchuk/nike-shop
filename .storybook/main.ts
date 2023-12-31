import type {StorybookConfig} from "@storybook/nextjs";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    ({
          name: "@storybook/addon-styling",
          options: {}
        })
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config, options) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/*' : path.resolve(__dirname, '../src/*'),
        '@/common/ui': path.resolve(__dirname, '../src/common/ui'),
        '@/public/images': path.resolve(__dirname, '../public/images/*'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/common/hooks': path.resolve(__dirname, '../src/common/hooks'),
        '@/api': path.resolve(__dirname, '../src/api'),
        '@/providers': path.resolve(__dirname, '../src/providers'),
        '@/services': path.resolve(__dirname, '../src/services'),
        '@/common/constants/constants': path.resolve(__dirname, '../src/common/constants/constants.ts'),
        '@/graphql/client': path.resolve(__dirname, '../src/graphql/client.ts'),
        '@/graphql/apollo-client': path.resolve(__dirname, '../src/graphql/apollo-client.ts'),
      }
    }

    return config
  }
};
export default config;
