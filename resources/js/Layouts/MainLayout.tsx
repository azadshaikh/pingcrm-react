import { Head } from '@inertiajs/react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import MainMenu from '@/Components/Menu/MainMenu';
import FlashMessages from '@/Components/Messages/FlashMessages';
import TopHeader from '@/Components/Header/TopHeader';
import BottomHeader from '@/Components/Header/BottomHeader';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function MainLayout({ title, children }: MainLayoutProps) {
  return (
    <>
      <Head title={title} />
      <div className="min-vh-100 d-flex flex-column">
        {/* Header Section */}
        <Navbar expand="md" className="flex-column p-0">
          <TopHeader />
          <BottomHeader />
        </Navbar>

        {/* Main Content Section */}
        <Container fluid className="flex-grow-1">
          <Row className="h-100">
            {/* Sidebar */}
            <Col md={3} lg={2} className="d-none d-md-block bg-primary sidebar">
              <MainMenu className="p-3" />
            </Col>

            {/* Main Content */}
            <Col md={9} lg={10} className="main-content px-4 py-3">
              <div className="h-100 overflow-auto" scroll-region="true">
                <FlashMessages />
                {children}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
