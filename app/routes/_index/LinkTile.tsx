import { NavLink } from "@remix-run/react";

interface LinkTileProps {
    title: string;
    param: string;
    image: string;
}

export default function LinkTile ({ title, param, image }: LinkTileProps) {

    return (
        <NavLink to = {`projects/${ param }`} className = 'tile'>
        {({ isActive, isPending }) => (
            <>
            <div className = 'tile__loader'>
                <span className ={ isPending ? 'loader': 'hidden' }></span> 
            </div>
            <img loading = 'lazy' className ={ isPending ? 'tile__image selected': 'tile__image' } src = { image } alt = "" />         
            <div className ={ isPending ? 'tile__content selected': 'tile__content' }>
                <h3 className = 'tile__content__title'>{ title }</h3>
            </div> 
            </>
        )}
        </NavLink>
    );
};