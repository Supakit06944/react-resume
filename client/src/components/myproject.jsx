/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LuDownload } from "react-icons/lu";
import portfolio from "../portfolio/portfolio-supakit.pdf";

function MyProject() {
  return (
    <div
      id="myproject"
      className="container_detail"
      css={css`
        width: 100%;
        display: flex;
        padding: 10px 0 110px 0;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className="section_content"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 80%;
          background-color: rgb(35, 37, 12);
          border-radius: 30px;
          color: white;
          padding: 50px 0 50px 0;
        `}
      >
        <div className="education">
          <h1
            css={css`
              color: white;
              margin: 0;
              padding: 0px 0 0 70px;
              font-weight: 600;
              font-size: 20px;
            `}
          >
            CSS Mini Project
          </h1>
          <h4
            css={css`
              color: white;
              margin: 0;
              padding: 10px 0 0 70px;
              font-weight: 500;
              font-size: 14px;
            `}
          >
            A landing page and responsive education website developed as a team
            project using Git for collaboration. Technologies used: [HTML,
            TailwindCSS, Git]
          </h4>
        </div>

        <div
          className="workexperience"
          css={css`
            width: 100%;
          `}
        >
          <h4
            css={css`
              color: white;
              margin: 0;
              padding: 10px 0 0 70px;
              font-weight: 500;
              font-size: 20px;
            `}
          >
            Tourist Attraction Search Website
          </h4>
          <h4
            css={css`
              color: white;
              margin: 0;
              padding: 10px 0 0 70px;
              font-weight: 500;
              font-size: 14px;
            `}
          >
            A website that can search for tourist attractions and recommend them
            based on requirements. Technologies used: [React, TailwindCSS]
          </h4>
        </div>

        <h4
          css={css`
            color: white;
            margin: 0;
            padding: 10px 0 0 70px;
            font-weight: 500;
            font-size: 20px;
          `}
        >
          Create API
        </h4>
        <h4
          css={css`
            color: white;
            margin: 0;
            padding: 10px 0 0 70px;
            font-weight: 500;
            font-size: 14px;
          `}
        >
          Create a basic API from requests and write API documentation.
          Technologies used: [Node.js, JavaScript]
        </h4>
        <h4
          css={css`
            color: white;
            margin: 0;
            padding: 10px 0 0 70px;
            font-weight: 500;
            font-size: 20px;
          `}
        >
          Pet Sitter Website
        </h4>
        <h4
          css={css`
            color: white;
            margin: 0;
            padding: 10px 0 0px 70px;
            font-weight: 500;
            font-size: 14px;
          `}
        >
          Create a website with a team where my responsibilities include :
          <ul
            css={css`
              color: white;
              margin: 0;
              padding: 10px 0 10px 25px;
              font-weight: 500;
              font-size: 14px;
            `}
          >
            <li>Homepage: Front-end for the owner's landing page.</li>
            <li>
              Manage Booking: Front-end for managing booking pages, including
              API integration for updating booking status to waiting or
              confirmed.
            </li>
            <li>
              Manage Pet: Front-end for managing pet information, including API
              integration for creating, updating, and importing images of pets.
            </li>
            <li>
              Sitter Homepage: Created a sidebar for navigating paths to URLs.
            </li>
          </ul>
          Technologies used: [HTML, React, CSS, Node.js, Supabase, Git,
          JavaScript]
        </h4>
      </div>
    </div>
  );
}

export default MyProject;
