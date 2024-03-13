import { useState } from "react"
import { NavLink } from "@remix-run/react";
import Hamburger from "./Hamburger";
export default function Header() {

    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <div className = { !isActive ? 'header' : 'header responsive'}>
            <div className = { !isActive ? 'header__links' : 'header__links responsive'}>
                <NavLink
                    id = 'header__logo'
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >
                    <span
                        onClick={ () => isActive && handleClick() }
                    >TN
                    </span>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    onClick={ () => isActive && handleClick() }
                    >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    onClick={ () => isActive && handleClick() }
                    >
                    Contact
                </NavLink>
            </div>
                
                <button 
                    className = { isActive ? 'hamburger hamburger-active' : 'hamburger' }
                    onClick =  { handleClick }>
                        <span className = 'line-first'></span>
                        <span className = 'line-second'></span>
                        <span className = 'line-third'></span>
                </button>
        </div>
    );
}