import React from "react";

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.hackillinois.org/upload/blobstore/mentors/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#2b2f71",
          overflow: "hidden",
        }}
      >
        <div class="d-none d-xl-block">
          <img
            src="https://hackillinois.org/static/media/right_bush.ff5006d4.svg"
            style={{
              position: "absolute",
              width: 400,
              right: 0,
              zIndex: 2,
              pointerEvents: "none",
              bottom: -25,
            }}
          />
          <img
            src="https://hackillinois.org/static/media/left_bush.b4004bd2.svg"
            style={{
              position: "absolute",
              width: 450,
              bottom: "10%",
              left: 0,
              zIndex: 2,
            }}
          />
          <img
            src="https://hackillinois.org/static/media/foreground_tree.be84f661.svg"
            style={{
              position: "absolute",
              height: "120%",
              bottom: "-5%",
              left: "-3%",
              zIndex: 10,
            }}
          />
          <img
            src="https://hackillinois.org/static/media/right_tree.8729b691.svg"
            style={{
              position: "absolute",
              height: "100%",
              bottom: 0,
              right: 0,
              zIndex: 10,
            }}
          />
          <img
            src="https://hackillinois.org/static/media/left_tree.df032b36.svg"
            style={{
              position: "absolute",
              height: "100%",
              bottom: 0,
              left: 0,
            }}
          />
          <img
            src="https://hackillinois.org/static/media/ground.80f1e25e.svg"
            style={{
              position: "absolute",
              minWidth: "110%",
              minHeight: 300,
              bottom: "-2%",
              left: "-5%",
              zIndex: 5,
            }}
          />
          <img
            src="https://hackillinois.org/static/media/bug.685753dc.svg"
            style={{
              position: "absolute",
              width: "7vh",
              bottom: "30px",
              left: "11.5vh",
              zIndex: 10,
            }}
          />
        </div>
        <div class="container" style={{ position: "relative", zIndex: 20 }}>
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <img
                style={{ width: "135px" }}
                src="https://hackillinois.org/static/media/logo.fff5a98b.svg"
              />
            </a>
            <ul class="nav">
              <li class="nav-item nav-link" style={{ color: "white" }}>
                Home
              </li>
              <li class="nav-item nav-link" style={{ color: "white" }}>
                Mentors
              </li>
              <li class="nav-item nav-link" style={{ color: "white" }}>
                Prizes
              </li>
              <li class="nav-item nav-link" style={{ color: "white" }}>
                Schedule
              </li>
            </ul>
          </header>
        </div>
        <div class="container" style={{ height: 600 }}>
          <h3
            class="text-white text-uppercase mb-3"
            style={{ position: "relative", zIndex: 10 }}
          >
            Mentors
          </h3>
          <div
            class="bg-gradient"
            style={{
              borderRadius: 20,
              position: "relative",
              height: "100%",
              overflowY: "scroll",
              padding: 50,
              zIndex: 10,
            }}
          >
            {items.map((item) => (
              <div class="row text-white align-items-center">
                <div class="col-lg-2 order-md-1">
                  <img
                    class="align-middle"
                    src={item.profile}
                    width="140"
                    height="140"
                    borderRadius="50%"
                  ></img>
                </div>
                <div class="col-lg-10 order-md-2">
                  <h2 class="featurette-heading">
                    {item.firstName + " " + item.lastName}
                  </h2>
                  <span class="lead">{item.description}</span>
                </div>
                <p />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
