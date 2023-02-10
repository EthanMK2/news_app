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
        <a className={classes["linkedin-link"]} href="https://www.linkedin.com/in/ethanklukkert/" target="_blank">LinkedIn</a>
        <a className={classes["github-portfolio-link"]} href="https://github.com/EthanMK2" target="_blank">GitHub</a>
        <a className={classes["website-github-link"]} href="https://github.com/EthanMK2/news_app" target="_blank">This Site's GitHub</a>
        <a className={classes["resume-link"]} target="_blank">Resume</a>
      </section>
    </footer>
  );
};

export default Footer;
