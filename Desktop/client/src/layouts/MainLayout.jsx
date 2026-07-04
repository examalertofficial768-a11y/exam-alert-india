import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="container mt-4">
        {children}
      </main>
    </>
  );
}

export default MainLayout;