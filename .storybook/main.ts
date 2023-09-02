import type {StorybookConfig} from "@storybook/nextjs";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
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
        '@/common/ui': path.resolve(__dirname, '../src/common/ui')
      }
    }

    return config
  }
};
export default config;
