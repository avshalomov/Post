function Footer() {
  // Simple footer for every page.
  return (
    <footer>
      <a target={"_blank"} href="https://www.linkedin.com/in/kananavshalomov/">
        <img src="/src/img/linkedin.png" alt="LinkedIn" />
      </a>
      <a target={"_blank"} href="https://github.com/avshalomov">
        <img src="/src/img/github.png" alt="GitHub" />
      </a>
      <a
        target={"_blank"}
        href="https://stackoverflow.com/users/17351432/kanan"
      >
        <img src="/src/img/stackoverflow.png" alt="Stack Overflow" />
      </a>
      <a target={"_blank"} href="mailto:Kananav95@gmail.com">
        <img src="/src/img/mail.png" alt="Kananav95@gmail.com" />
      </a>
      <p>© 2022 Post</p>
    </footer>
  );
}

export default Footer;
