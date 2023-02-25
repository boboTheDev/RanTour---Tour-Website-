import Navbar from "../../components/navbar/navbar.component.js";
import Hero from "../../components/hero/hero.component.js";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage="https://images.unsplash.com/photo-1573986953056-f18741cc963d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="CONTACT US"
        paragraph=""
        url="/"
        btnClass="hidebtn"
        btnText="Plan Now"
      />
    </>
  );
}

export default Contact;
