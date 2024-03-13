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

////////////////////////////////////////////////////////////////////////////////////

/// PACKAGES

import { useState } from "react";

/// COMPONENTS 

import LinkTile from "./LinkTile";
import Modal from "./Modal";

/// IMAGES

import project1Img from "~/styles/images/project1.png";
import project2Img from "~/styles/images/project2test.png";
import project3Img from "~/styles/images/project3test.png";
// import portraitImg from "~/styles/images/portrait.jpg"
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

/// DATA 

const linkTileProps = {
  title: "Daily Learnings",
  param: "project1",
}
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
      image: project1Img
    },
    { 
      title: "Portfolio Website",
      param: 'project2',
      image: project2Img
    },
    { 
      title: "Precision Stocks",
      param: 'project3',
      image: project3Img
    }
];

  return (
    <main>
      <div className = 'section intro'>
        <h1 className = 'title'>Thomas Nicholas</h1>
        {/* <div className = 'intro__portrait'>
          <img className = 'intro__portrait__img' src = { portraitImg }/>
        </div> */}
          <p>
            I'm a motivated Software Engineer with a background in biostatistics and public health research. Combining strong analytical skills, programming knowledge and a commitment to continuous learning.
          </p>
      </div>
      <div className = 'section projects'>
        <h1 className = 'title'>Projects</h1>
        <div className = 'container-wrap'>
          { tileDataArray.map((linkTileProps, index) => <LinkTile key = { index } { ...linkTileProps }/> )}
        </div>
      </div>
      <div className = 'section resume'>
        <h1 className = 'title'>Resume</h1>
        {
          !open && 
          <div
          onClick={ handleOpen }
          style={{ width: "10rem", height: "20rem"}}
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
    </main>
  );
}
