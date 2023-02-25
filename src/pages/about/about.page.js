import Navbar from "../../components/navbar/navbar.component.js";
import Hero from "../../components/hero/hero.component.js";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage="https://images.unsplash.com/photo-1584467414812-31122c9beeca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80"
        title="ABOUT"
        paragraph=""
        url="/"
        btnClass="hidebtn"
        btnText="Plan Now"
      />
    </>
  );
}

export default About;
