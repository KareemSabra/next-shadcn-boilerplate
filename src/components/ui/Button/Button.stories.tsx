import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'The Button component is a versatile and customizable UI element designed for user interactions. It supports various styles, sizes, and states to fit different design needs and use cases. Use this component for actions such as form submissions, navigation triggers, or any clickable interface elements.',
            },
        },
    },
    argTypes: {
        variant: {
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            control: { type: 'select' },
        },
        size: {
            options: ['default', 'sm', 'lg', 'icon'],
            control: { type: 'select' },
        },
        children: {
            control: 'text',
        },
    },
    args: {
        children: 'Hello World',
    },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export default meta;
