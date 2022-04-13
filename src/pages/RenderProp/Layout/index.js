import Mouse from "../../../components/Mouse";

import CatImage from "../../../static/images/why-does-my-cat-get-the-crazies.webp";

const Layout = () => {
  return (
    <div>
      <Mouse
        render={({ x, y }) => (
          <h1>
            X: {x}; Y: {y}
          </h1>
        )}
      />
      <Mouse
        render={({ x, y }) => (
          <img
            src={CatImage}
            width={150}
            height={100}
            style={{ position: "absolute", top: y, left: x }}
          />
        )}
      />
    </div>
  );
};

export default Layout;
