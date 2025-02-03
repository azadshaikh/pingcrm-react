import { Head } from '@inertiajs/react';
import { Container } from 'react-bootstrap';
import MainMenu from '@/Components/Menu/MainMenu';
import FlashMessages from '@/Components/Messages/FlashMessages';
import TopHeader from '@/Components/Header/TopHeader';
import BottomHeader from '@/Components/Header/BottomHeader';
import MobileSidebar from '@/Components/Sidebar/MobileSidebar';
import { SidebarProvider } from '@/Contexts/SidebarContext';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function MainLayout({ title, children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <Head title={title} />
      <div className="min-vh-100 d-flex">
        {/* Desktop Sidebar */}
        <div className="sidebar bg-primary d-none d-lg-block" style={{ width: '260px' }}>
          {/* Logo Section */}
          <div className="px-4 py-3">
            <TopHeader />
          </div>

          {/* Navigation Menu */}
          <MainMenu className="px-4 mt-3" />
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar />

        {/* Main Content Wrapper */}
        <div className="flex-grow-1 main-content">
          {/* Top Navigation */}
          <BottomHeader />

          {/* Main Content */}
          <Container fluid className="px-4 py-4">
            <FlashMessages />
            {children}
          </Container>
        </div>
      </div>
    </SidebarProvider>
  );
}
