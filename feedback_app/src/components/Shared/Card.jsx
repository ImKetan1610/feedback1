function Card({ children, ketan }) {
  //   return <div className={`card ${ketan && "ketan"}`}>{children}</div>;
  return (
    <div
      className='card'
      style={{
        backgroundColor: ketan ? "#000" : "#fff",
        color: ketan ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  ketan: false,  //here we are passing a default value of ketan is false for the lighter bg
};

export default Card;
