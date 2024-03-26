/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LuDownload } from "react-icons/lu";
import portfolio from "../portfolio/portfolio-supakit.pdf";

function About() {
  return (
    <div
      id="detail"
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
          padding: 35px 0 35px 0;
        `}
      >
        <div className="technicalskill">
          <h1
            css={css`
              color: white;
              margin: 0;
              padding: 0px 0 0 70px;
              font-weight: 600;
              font-size: 20px;
            `}
          >
            Technical Skill
          </h1>
          <ul
            css={css`
              color: white;
              margin: 0;
              padding: 10px 0 0 70px;
              font-weight: 500;
              font-size: 14px;
            `}
          >
            <li>Front-End Dev: HTML, CSS, JavaScript, React, TailwindCSS</li>
            <li>Back-End Dev: Node.js, MongoDB, PostgreSQL, Supabase</li>
            <li>Subskill: Git, Trello, Cloudinary</li>
          </ul>
        </div>
        <div className="education">
          <h1
            css={css`
              color: white;
              margin: 0;
              padding: 20px 0 0 70px;
              font-weight: 600;
              font-size: 20px;
            `}
          >
            Education
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
            Independent Study, Chiang Mai University, 2023
            <ul
              css={css`
                color: white;
                margin: 0;
                padding: 5px 0 0 25px;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              <li>Research philosophy for effective comparative analysis</li>
              <li>
                Identify topic aligned with academic interests through shared
                insights.
              </li>
              <li>
                Plan and execute a seminar using the Zoom platform for
                accessibility
              </li>
            </ul>
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
            Internship cameraman, Page Innirun, 2022 (3 months)
            <ul
              css={css`
                color: white;
                margin: 0;
                padding: 5px 0 0 25px;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              <li>
                Facilitating regular communication with the principal actor and
                director.
              </li>
              <li>consistently producing two video clips per day</li>
            </ul>
          </h4>
        </div>

        <div
          className="workexperience"
          css={css`
            width: 100%;
          `}
        >
          <h1
            css={css`
              color: white;
              margin: 0;
              padding: 20px 0 0 70px;
              font-weight: 600;
              font-size: 20px;
            `}
          >
            Work Experience
          </h1>
          <div
            className="techup"
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <h4
              css={css`
                color: white;
                margin: 0;
                padding: 10px 0 0 70px;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              TechUp Bootcamp
            </h4>
            <h4
              css={css`
                color: white;
                margin: 0;
                padding: 10px 70px 0 0;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              Aug 2023 - Mar 2024
            </h4>
          </div>
          <ul
            css={css`
              color: white;
              margin: 0;
              padding: 5px 0 0 95px;
              font-weight: 500;
              font-size: 14px;
            `}
          >
            <li>Full-Stack Software Development</li>
            <li>Basics of Programming (Part-Time)</li>
          </ul>

          <div
            className="humanities"
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <h4
              css={css`
                color: white;
                margin: 0;
                padding: 10px 0 0 70px;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              Bachelor of Humanities
            </h4>
            <h4
              css={css`
                color: white;
                margin: 0;
                padding: 10px 70px 0 0;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              Aug 2019 - Apr 2023
            </h4>
          </div>
          <ul
            css={css`
              color: white;
              margin: 0;
              padding: 5px 0 0 95px;
              font-weight: 500;
              font-size: 14px;
            `}
          >
            <li>GPA 3.21</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
