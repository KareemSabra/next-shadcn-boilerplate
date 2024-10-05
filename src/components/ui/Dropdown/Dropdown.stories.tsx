import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '.';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof DropdownMenu> = {
    title: 'Components/Dropdown',
    component: DropdownMenu,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'The Dropdown component is a flexible menu system that allows for nested submenus, custom triggers, and various styling options. It provides an intuitive way to present a list of actions or options to the user in a compact format.',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '3em' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};
