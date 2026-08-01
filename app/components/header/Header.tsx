import Link from "next/link";
import "./header.css";

const Header = () => (
  <>
    <header className="header glass-effect">
      <div>
        <h1>Merchant Core</h1>
      </div>

      <nav>
        <Link href={"#solution"}>Solution</Link>
        <Link href={"#features"}>Features</Link>
        <Link href={"#downloads"}>Downloads</Link>
      </nav>

      <div>
        <button className="get-started-button" id="get-strated">
          <span>Get Started</span>
        </button>
      </div>
    </header>
  </>
);

export default Header;
