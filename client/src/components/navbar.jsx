/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LuDownload } from "react-icons/lu";
import portfolio from "../portfolio/portfolio-supakit.pdf";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  return (
    <div
      className="container_navbar"
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: sticky;
        top: 0;
      `}
    >
      <div
        className="navbarbutton-group"
        css={css`
          display: flex;
          gap: 30px;
          justify-content: center;
          padding: 30px 0;
          width: 80%;
        `}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          css={css`
            color: rgb(72, 77, 75);
            margin: 0 0 0 100px;
            font-weight: 500;
            text-align: center;
            width: 90px;
            cursor: pointer;
            border-radius: 99px;
            height: 30px;
            position: relative; /* Add this line */
            ::after {
              content: "";
              position: absolute;
              width: 0%;
              height: 2px;
              background-color: rgb(72, 77, 75);
              left: 0;
              bottom: -4px;
              transition: ease 0.42s;
            }
            :hover::after {
              width: 100%;
            }
          `}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="detail"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          css={css`
            color: rgb(72, 77, 75);
            margin: 0;
            font-weight: 500;
            cursor: pointer;
            width: 90px;
            border-radius: 99px;
            text-align: center;
            height: 30px;
            position: relative; /* Add this line */
            ::after {
              content: "";
              position: absolute;
              width: 0%;
              height: 2px;
              background-color: rgb(72, 77, 75);
              left: 0;
              bottom: -4px;
              transition: ease 0.42s;
            }
            :hover::after {
              width: 100%;
            }
          `}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="myproject"
          spy={true}
          smooth={true}
          offset={-100}
          duration={50}
          css={css`
            color: rgb(72, 77, 75);
            text-align: center;
            font-weight: 500;
            width: 120px;
            border-radius: 99px;
            height: 30px;
            cursor: pointer;
            position: relative; /* Add this line */
            ::after {
              content: "";
              position: absolute;
              width: 0%;
              height: 2px;
              background-color: rgb(72, 77, 75);
              left: 0;
              bottom: -4px;
              transition: ease 0.42s;
            }
            :hover::after {
              width: 100%;
            }
          `}
        >
          My project
        </Link>
      </div>
      <div className="download-resume">
        <a
          href={portfolio}
          download="supakit-portfolio"
          css={css`
            display: flex;
            height: 40px;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 20px;
            color: rgb(72, 77, 75);
          `}
        >
          Resume
          <LuDownload
            css={css`
              margin-left: 5px;
              font-size: 25px;
              color: rgb(72, 77, 75);
            `}
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
