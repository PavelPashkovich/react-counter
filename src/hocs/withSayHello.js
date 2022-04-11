const withSayHello =
  (Component) =>
  ({ ...props }) => {
    const sayHello = () => {
      alert("Hello, HOC!");
    };
    return <Component {...props} sayHello={sayHello} />;
  };

export default withSayHello;
