import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://thumb.tildacdn.com/tild6331-6165-4633-a433-626163313532/-/format/webp/PAGL-logo.png"
        alt="logo__pagl"
      />
    </header>
  );
};
export default Header;
