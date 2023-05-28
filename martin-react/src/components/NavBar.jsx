const NavBar = () => {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Destacados</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Hombre</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Mujer</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Niño/a</a>
            </li>
        </ul>

    )
}

export default NavBar;