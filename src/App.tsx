import Header from "./components/Header";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useLocation, Outlet } from "react-router-dom";

function App() {
  // const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        {/* <Nav currentPage={currentPage} /> */}
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
