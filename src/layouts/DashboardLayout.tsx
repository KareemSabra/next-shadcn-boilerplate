'use client';

import { Header } from '@/components/shared/Header';
import { AppSidebar } from '@/components/shared/Sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex flex-col w-full h-full">
                <Header />
                <main className="flex-1 w-full h-full overflow-y-auto p-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
