import Login from "./Login";

export default function HomePage() {
    return (
      <>
     <div className="wel-container">
      <Login />
          <img className="wel-image" src="home-welcome.jpg" alt="Image" />
          <div className="wel-overlay-text">
            <span className="wel-span">
              CAMBRIDGE
              <br />
              UNIVERSITY
            </span>
          </div>
        </div>
     <div className="home-main">
        <h1>Welcome</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        {/* img-container */}
        <div className="gallery">
          <img className="image" src="/home2.jpg" alt="home"/>
          <img className="image" src="/home3.jpg" alt="home"/>
          <img className="image" src="/home4.jpg" alt="home"/>
        </div>
        </div>
      </>
    );
  }
  