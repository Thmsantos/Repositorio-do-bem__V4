import './navebar.css'; // Importe o CSS para o componente

function Navebar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-home">
          <p>Home</p>
        </div>
        <div className="navbar-user">
          <img src="./src/assets/images/user 2.png" alt="user 2" className="navbar-img" />
        </div>
      </div>
    </>
  );
}

export default Navebar;
