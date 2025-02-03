import { Offcanvas } from 'react-bootstrap';
import { useSidebar } from '@/Contexts/SidebarContext';
import TopHeader from '@/Components/Header/TopHeader';
import MainMenu from '@/Components/Menu/MainMenu';

export default function MobileSidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Offcanvas
      show={isSidebarOpen}
      onHide={toggleSidebar}
      className="bg-primary w-75"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <TopHeader />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <MainMenu className="px-3" />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
