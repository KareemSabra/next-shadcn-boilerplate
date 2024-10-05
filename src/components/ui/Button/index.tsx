import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/components/lib';
import { ButtonVariantClasses } from '@/components/classes/ButtonVariantClasses';
import { ButtonSizeClasses } from '@/components/classes/ButtonSizeClasses';
import { ButtonSize } from '@/components/types/ButtonSize';
import { ButtonVariant } from '@/components/types/ButtonVariant';

type ButtonProps = {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return <Comp className={cn(ButtonVariantClasses[variant], ButtonSizeClasses[size], baseClasses, className)} ref={ref} {...props} />;
    }
);
