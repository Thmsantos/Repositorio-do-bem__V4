import "./header.css"
function HeaderSignUp(){

    return (
        <div className="header">
        <a href="#" className="nav-link">home</a>
        <a onClick={() => window.location.href = 'http://localhost:5173/home'} className="nav-link">pontos de coleta</a>
    </div>

    )

}
export default HeaderSignUp;