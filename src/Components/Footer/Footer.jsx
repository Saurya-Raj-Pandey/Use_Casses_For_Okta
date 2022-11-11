const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        color: "white",
        textAlign: "center",
        background: "rgb(30, 180, 2339)",
        padding: "50px",
        height: "10px",
      }}
    >
      {`Copyright © BeyondID ${year}`}
    </footer>
  );
};

export default Footer;
