import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OrderMenu } from "./components/OrderMenu";
import { Breadcrumbs } from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Breadcrumbs />
        <Hero />
        <OrderMenu />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
