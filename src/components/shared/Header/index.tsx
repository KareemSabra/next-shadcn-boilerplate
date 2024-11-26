import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggler } from '@/components/ui/ThemeToggler';

export function Header() {
    return (
        <header className="flex h-16 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <div className="flex-1" />

            <ThemeToggler />
        </header>
    );
}
