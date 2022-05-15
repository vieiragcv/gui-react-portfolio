/*------------------------------------------------------------
-                          Header
------------------------------------------------------------*/


function Header() {
  return (
    <header className="fle-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="logo">👨‍💻</span> @vieiragcv
        </a>
      </h2>

      <nav>

        <ul className="flex-row">

          <li className="mx-2">About Me</li>
          <li className="mx-2">Projects</li>
          <li className="mx-2">Resume</li>
          <li className="mx-2">Contact</li>

        </ul>

      </nav>

    </header>
  )
}

export default Header;