function Header({ page }) {
  // Site logo and page name for every page.
  return (
    <header className="col-12 col-s-12">
      <img src="/src/img/icon.png" alt="Logo" />
      <h2>{page}</h2>
    </header>
  );
}

export default Header;
