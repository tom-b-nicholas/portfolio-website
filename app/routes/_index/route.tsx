export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

//////////////////////////////////////////////////////

import { useState } from "react";

/// COMPONENTS 

import LinkTile from "./LinkTile";
import Modal from "./Modal";

/// IMAGES

import bookIcon from "~/styles/images/read-book-icon.svg";
import stockIcon from "~/styles/images/stock-icon.svg";
import htmlIcon from "~/styles/images/icons8-html-5.svg";
import css3Icon from "~/styles/images/icons8-css3.svg";
import jsIcon from "~/styles/images/icons8-javascript.svg";
import reactIcon from "~/styles/images/icons8-react-native.svg";
import rIcon from "~/styles/images/icons8-r-project.svg";
import typeIcon from "~/styles/images/icons8-typescript.svg";
import postgIcon from "~/styles/images/icons8-postgresql.svg";
import pythonIcon from "~/styles/images/icons8-python.svg";
import expIcon from "~/styles/images/icons8-express-js.svg";
import remixIcon from "~/styles/images/remix-logo-icon.svg";
import CV from "~/styles/images/cv.jpg";

/// CSS

import type { LinksFunction } from "@remix-run/node";
import stylesIndexURL from "~/styles/index/index.css";
import stylesLinkTileURL from "~/styles/index/LinkTile.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesIndexURL,
    },
    {
      rel: "stylesheet",
      href: stylesLinkTileURL,
    },
  ];
};
///

export default function Index() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const tileDataArray = [
    { 
      title: "Daily Learnings",
      param: 'project1',
      image: bookIcon
    },
    { 
      title: "Portfolio Website",
      param: 'project2',
      image: remixIcon
    },
    { 
      title: "Precision Stocks",
      param: 'project3',
      image: stockIcon
    }
  ];

  const IconArray = [
    htmlIcon,
    css3Icon,
    jsIcon,
    typeIcon,
    reactIcon,
    expIcon,
    postgIcon,
    pythonIcon,
    rIcon
  ]

  return (
    <div className = 'container-col index'>
      <div className = 'section intro'>
        <h1 className = 'title'>
          Thomas Nicholas
        </h1>
        <p>
          I'm a motivated Software Engineer with a background in biostatistics and public health research. Combining strong analytical skills, programming knowledge and a commitment to continuous learning.
        </p>
      </div>
      <div className = 'section intro__icons'>
          <h1 className = 'title'>
            Tech Stack
          </h1>
          <div className = 'container-wrap'>
            { IconArray.map((icon, index) => <img key = { index } src = { icon } alt="" />) }
          </div>
          <span>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></span>
        </div> 
      <div className = 'section projects'>
        <h1 className = 'title'>
          Projects
        </h1>
        <div className = 'container-wrap projects__container'>
          { tileDataArray.map((linkTileProps, index) => <LinkTile key = { index } { ...linkTileProps }/> )}
        </div>
      </div>
      <div className = 'section resume'>
        <h1 className = 'title'>
          Resume
        </h1>
        {
          !open && 
          <div
          onClick={ handleOpen }
          style={{ width: "10rem", height: "20rem", marginTop: "2rem"}}
          >
            <img 
            src={CV}
            style={{width: "100%"}}
            />
          </div>
        }
        {
          <Modal isOpen = { open } setOpen = { setOpen }>
            <div
            style={{ maxWidth: "90vw"}}
            >
              <img 
              src={CV}
              style={{width: "100%", maxHeight: "90vh"}}
              />
            </div>
          </Modal>
        }
      </div>
    </div>
  );
}
