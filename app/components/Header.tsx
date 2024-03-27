import { NavLink } from "@remix-run/react";

type HeaderProps = {
    handleClick: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
};

export default function Header({ handleClick, isActive }: HeaderProps) {

    return (
        <div id = 'header' className = { !isActive ? 'header' : 'header responsive'}>
            <NavLink
                id = 'header__logo'
                to="/"
                className={ ({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                >
                <span
                    onClick={ () => { if (isActive) handleClick(isActive) } }
                >TN
                </span>
            </NavLink>
            <NavLink
                to="/about"
                className={ ({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                onClick={ () => { if (isActive) handleClick(isActive) } }
                >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={ ({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                onClick={ () => { if (isActive) handleClick(isActive) } }
                >
                Contact
            </NavLink>
            <div className = 'hamburger-container'>
                <button 
                    className = { isActive ? 'hamburger hamburger-active' : 'hamburger' }
                    onClick =  { () => handleClick(isActive) }>
                        <span className = 'line-first'></span>
                        <span className = 'line-second'></span>
                        <span className = 'line-third'></span>
                </button>
            </div>

        </div>
    );
}