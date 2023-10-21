import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header, Navbar, Footer, Loading } from "../components";
import { useAuth } from "../hooks";

export default function Main() {
  const { loading } = useAuth();
  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <main>
        <Outlet />
      </main>

      <Footer />
      {loading && <Loading />}
      <ScrollRestoration />
    </>
  );
}
