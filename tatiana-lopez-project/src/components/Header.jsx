import styles from "./Header.module.css";

const Header = (props) => {
  const className = `${styles.header} ${styles.h1}`;
  return (
  <header className={className}>
    {props.title}
  </header>
  )
};

export default Header;