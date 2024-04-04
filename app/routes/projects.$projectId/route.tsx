import { useLoaderData } from "@remix-run/react";
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef } from 'react';
import type { LoaderFunctionArgs } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import stylesProjectURL from "~/styles/project.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesProjectURL,
    }
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {

    const { projectId } = params;

    if (!projectId) {
        throw new Response("Not Found", { status: 404 });
    }

    const blogMarkdown = await fetch(`https://raw.githubusercontent.com/BigBBazz/portfolio/main/${projectId}.md`, {
        method:'GET',
    })
    .then((res) => {
        if (res.ok) return res.text();
        else return Promise.reject("Didn't fetch text correctly");
    })
    .catch((error) => console.error(error));
    return { blogMarkdown };
};


export default function Project() {

    const listRef = useRef<null | HTMLDivElement>(null);

    const removeSpecialChars = (string: string) => {
        return string.replace(/[^\w]/gi,"");
    }

    const  scrollToTop = () => {
        listRef.current?.querySelector('#anchor')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
        });
    }

    const  scrollToSection = (event : React.MouseEvent) => {
        const target = event.target as HTMLUListElement;
        const nodes = listRef.current?.querySelectorAll('h3');
        if(nodes) {
            [...nodes].filter(node => node.textContent === target.id)[0].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            });
        }
    }

    const handleToggleVisible = () => {
        listRef.current?.querySelector('#to-top')?.classList.toggle("hidden", window.scrollY < 100);
    }

    useEffect(() => {
        window.addEventListener('scroll',  handleToggleVisible);
        return () => {
          window.removeEventListener('scroll', handleToggleVisible)
        };
    }, []);

    const { blogMarkdown } = useLoaderData<typeof loader>();
    
    return (
        <div className = 'project' ref = { listRef }>
            <div id = 'anchor'></div>
            <div className = 'project-contents section'>
                <ReactMarkdown 
                components={{
                    ul (props) {
                        const {node, ...rest} = props
                        return <ul className = 'dash' { ...rest } />
                    },
                    li(props) {
                        const {node, ...rest} = props
                        const id = (node?.children[0] as HTMLInputElement | null)?.value
                        return <li id = { id } onClick = { scrollToSection } { ...rest } />
                    }
                }}
                >
                    { blogMarkdown ?? blogMarkdown }
                </ReactMarkdown>
            </div>
            <div id = 'to-top' className = 'hidden' onClick = { scrollToTop }>
                <i className = 'arrow-up'/>
            </div>
        </div>
    );
}
  