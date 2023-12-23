/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    async viteFinal(config) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            assetsInclude: ["/sb-preview/runtime.js"], // Bug workaround, see https://github.com/storybookjs/storybook/issues/25256
        });
    },
};
export default config;
