import "./destination.styles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popolar Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Tall Volcano, Batangles</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="image">
          <img
            alt="desination"
            src="https://images.unsplash.com/photo-1581991745458-970b73c0cc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <img
            alt="desination2"
            src="https://images.unsplash.com/photo-1581991745458-970b73c0cc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
