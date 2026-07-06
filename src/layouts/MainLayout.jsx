import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
<main className="container-fluid px-lg-5 mt-4">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;