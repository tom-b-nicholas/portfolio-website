/// CSS

import type { LinksFunction } from "@remix-run/node";
import stylesAboutURL from "~/styles/about.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesAboutURL,
    }
  ];
};

export default function About() {
    return (
        <div className = 'container-col'>
            <div className = 'section'>
               <h1 className = 'title'>About Me</h1> 
            </div>
        </div>
        
    );
  }