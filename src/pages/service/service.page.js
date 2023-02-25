import Navbar from "../../components/navbar/navbar.component.js";
import Hero from "../../components/hero/hero.component.js";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage="https://images.unsplash.com/photo-1609170300214-51ea0fed6a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1539&q=80"
        title="SERVICE"
        paragraph=""
        url="/"
        btnClass="hidebtn"
        btnText="Plan Now"
      />
    </>
  );
}

export default Service;
