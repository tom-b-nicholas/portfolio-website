import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { useState, MouseEvent } from "react";

/// COMPONENTS ///
import Header from "./components/Header";
import Footer from "./components/Footer";
/// CSS ///
import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/shared.css";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
//////

export const meta: MetaFunction = () => [{
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
}];

export default function App() {

  const [isActive, setIsActive] = useState<boolean>(false);
  
  const handleClick = () => {
    console.log('triggered handleClick');
    setIsActive(isActive => !isActive);
  }

  const handleClickOutside = (event: MouseEvent) => {
    console.log('triggered clickoutside');
    console.log(event.currentTarget);
    isActive && setIsActive(false);
}

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body onClick = { (event: MouseEvent) => handleClickOutside(event) }>
        <Header handleClick = { handleClick } isActive = { isActive }/>
        <div className = 'main'>
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
