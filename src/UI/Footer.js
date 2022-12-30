import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Like This App?{" "}
        <a className={classes["portfolio-link"]}><em>See My Full Portfolio.</em></a>
      </p>
      <div className={classes["footer-links"]}>
        <a className={classes["linkedin-link"]}>LinkedIn</a>
        <a className={classes["github-portfolio-link"]}>GitHub</a>
        <a className={classes["website-github-link"]}>This Site's GitHub</a>
        <a className={classes["resume-link"]}>Resume</a>
      </div>
    </footer>
  );
};

export default Footer;
