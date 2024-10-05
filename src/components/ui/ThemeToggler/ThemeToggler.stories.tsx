import type { Meta, StoryObj } from '@storybook/react';

import { ThemeToggler } from '.';
import { ThemeProvider } from '@/providers/ThemeProvider';

const meta: Meta<typeof ThemeToggler> = {
    title: 'Components/ThemeToggler',
    component: ThemeToggler,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'The ThemeToggler component is a dropdown menu that allows users to switch between light, dark, and system color themes. It provides an intuitive interface for theme selection and enhances the user experience by offering theme customization options.',
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Story />
            </ThemeProvider>
        ),
    ],
};

type Story = StoryObj<typeof ThemeToggler>;

export const Default: Story = {};

export default meta;
