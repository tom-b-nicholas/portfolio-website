import portrait from "~/styles/images/portrait.jpg"
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
      <div className = 'about container-wrap'>
        <div className = 'portrait-container'>
          <img src = { portrait } alt="" />
        </div>
        <div className = 'about__text-container'>
          <p>
            I am a junior software engineer with a background in biostatistics and public health research. I made the switch to engineering because I wanted a career where I had to constantly update my knowledge. After a while I realised the fast pased world of web development is where I belonged.  
          </p>
        </div>
      </div>
      <div className = 'container-wrap part-b'>
        <p>
          In 2016 I completed a Bachelor of Science majoring in Mathematics at the University of New South Wales. During my Bachelors degree I completed a unit called the theory of statistics where I studied probability and distribution theory. This introduced me to the mathematical foundations for statistics.
        </p>
        <p>
          In 2017 I started studying a Master of Medical Sciences majoring in Public Health Sciences from the Karolinska Institute in Stockholm, Sweden. I learned solid research skills as well as advancing my biostatistical skills. I completed my Master's degree in 2019 with an original research project involving longitiudinal data analysis.
        </p>
        <p>
          In 2023 I decided to make the switch to software engineering and I started the Software Engineering Immersive course at General Assembly. I learned solid skills in Javascript, HTML, and CSS. I learned also gained experience using React.
        </p>
        <p>
          I am currently learning new skills and enjoy making projects with frameworks such as Remix and NEXT. Thanks for reading my story! Check out my projects and send me an email if you'd like to chat!
        </p>
      </div>
      <div className = 'section'></div>
    </div>
  );
}