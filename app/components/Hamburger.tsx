interface HamburgerProps {
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
}

export default function Hamburger({ isActive, setIsActive }: HamburgerProps) {

    const handleClick = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <button 
        className = { isActive ? 'hamburger hamburger-active' : 'hamburger' }
        onClick =  { handleClick }>
            <span className = 'line-first'></span>
            <span className = 'line-second'></span>
            <span className = 'line-third'></span>
        </button>
    )
}