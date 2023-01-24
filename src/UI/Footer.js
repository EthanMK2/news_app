import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <p>
          Like This App?{" "}
          <a className={classes["portfolio-link"]}>
            <strong>See My Full Portfolio.</strong>
          </a>
        </p>
      </section>
      <section className={classes["footer-links"]}>
        <a className={classes["linkedin-link"]}>LinkedIn</a>
        <a className={classes["github-portfolio-link"]}>GitHub</a>
        <a className={classes["website-github-link"]}>This Site's GitHub</a>
        <a className={classes["resume-link"]}>Resume</a>
      </section>
    </footer>
  );
};

export default Footer;
