import { NavLink } from "react-router-dom";

interface LinkTileProps {
    title: string;
    param: string;
    image: string;
}

export default function LinkTile ({ title, param, image }: LinkTileProps) {

    return (
        <NavLink to = {`projects/${ param }`} className = 'tile'>
            <img  className = 'tile__image' src = { image } alt = "" />
            <div className = 'tile__content'>
                <h3 className = 'tile__content__title'>{ title }</h3>
            </div>        
        </NavLink>
    );
};