import './header.css';

export default function Header() {
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:5173/login'; // Redireciona para a página de login
  };
  return (
    <>
      <div id="header">
          <div id="esquerda">
              <img id="logoimg" src="./src/assets/images/logoV2.png" alt="Logo"></img>
              <p>Repositório do bem</p>
          </div>
          <div id="direit">
          <button id="bto" onClick={handleButtonClick}>
          Sou uma empresa
          </button>
            
          </div>
      </div>
    </>    
    
  )
}
