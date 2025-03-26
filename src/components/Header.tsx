import { Link } from "react-router-dom";

function Header() {
    return (
        <header className=" text-white p-12 px-16 bg-blend-overlay z-10 bg-bg/50 fixed w-full ">
            <nav className="flex justify-between items-center">
                <div className="text-3xl font-bold font-kanit"><Link to="/" className="hover:opacity-50 transition-discrete transition-all">My Portfolio</Link></div>
                <ul className="flex gap-6">
                    <li><Link to="/" className="hover-animation">Home</Link></li>
                    <li><Link to="/about" className="hover-animation">About</Link></li>
                    {/* <li><Link to="/portfolio" className="hover-animation">Portfolio</Link></li> */}
                    <li><Link to="/contact" className="hover-animation">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;