import Navbar from "../../components/navbar/navbar.component.js";
import Hero from "../../components/hero/hero.component.js";
import Destination from "../../components/destination/destination.component.js";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1614426840630-57ff5addc7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        title="Holiday In Yangon"
        paragraph="Your Favourite Hideouts In Town"
        url="/"
        btnClass="showbtn"
        btnText="Plan Now"
      />
      <Destination />
    </>
  );
}

export default Home;
