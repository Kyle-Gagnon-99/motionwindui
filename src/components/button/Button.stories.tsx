import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import React from "react";

const meta = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        controls: {
            exclude: /buttonType/g,
        },
    },
    argTypes: {
        children: {
            control: {
                type: "text",
            },
            defaultValue: "Button",
            description: "Any JSX children",
        },
        size: {
            defaultValue: "default",
            description: "The size of the button",
        },
        spacing: {
            defaultValue: "default",
            description: "The spacing of the button",
        },
        rounded: {
            defaultValue: "default",
            description: "How round the button is",
        },
        disabled: {
            control: {
                type: "boolean",
            },
            defaultValue: "false",
            description: "Whether or not this button is disabled",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const StoryTemplate: Story = {
    args: {
        children: "Button",
    },
    render: ({ children, ...args }) => {
        return (
            <Button {...args}>
                <span>{children}</span>
            </Button>
        );
    },
};

export const Primary: Story = {
    ...StoryTemplate,
};

export const Secondary: Story = {
    ...StoryTemplate,
    args: {
        ...StoryTemplate.args,
        intent: "secondary",
    },
};

export const Success: Story = {
    ...StoryTemplate,
    args: {
        ...StoryTemplate.args,
        intent: "success",
    },
};

export const Warning: Story = {
    ...StoryTemplate,
    args: {
        ...StoryTemplate.args,
        intent: "warning",
    },
};

export const Danger: Story = {
    ...StoryTemplate,
    args: {
        ...StoryTemplate.args,
        intent: "danger",
    },
};
