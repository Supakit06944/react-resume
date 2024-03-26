/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import portImage from "../pictures/resume-photo.jpg";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Header() {
  return (
    <div
      id="home"
      className="container_detail"
      css={css`
        width: 100%;
        padding: 80px 0 110px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className="section_contain"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 80%;
          background-color: rgb(35, 37, 12);
          border-radius: 30px;
        `}
      >
        <div
          className="content"
          css={css`
            padding: 0 0 0 70px;
          `}
        >
          <Tabs
            position="relative"
            variant="unstyled"
            css={css`
              padding: 40px 0 0 0;
            `}
          >
            <TabList
              css={css`
                color: white;
                padding-left: 10px;
              `}
            >
              <Tab
                css={css`
                  color: white;
                `}
              >
                Home
              </Tab>
              <Tab>Contact</Tab>
            </TabList>
            <TabIndicator
              //   mt="-1.5px"
              height="2px"
              bg="white"
              borderRadius="1px"
            />
            <TabPanels
              css={css`
                color: white;
              `}
            >
              <TabPanel>
                {true && (
                  <h1
                    css={css`
                      color: white;
                      margin: 0;
                      padding: 50px 0 0 0;
                      font-weight: 600;
                      font-size: 30px;
                    `}
                  >
                    Developer
                  </h1>
                )}
                <h1
                  css={css`
                    margin: 0;
                    color: white;
                    font-size: 65px;
                    font-weight: 700;
                  `}
                >
                  Supakit Saengow
                </h1>
              </TabPanel>
              <TabPanel>
                <p
                  css={css`
                    margin: 0;
                    padding: 50px 0 0 0;
                    font-weight: 500;
                    font-size: 14px;
                  `}
                >
                  Address : 14/4 Long, Huai O, Phrae 54150
                </p>
                <p
                  css={css`
                    margin: 0;
                    font-weight: 500;
                    font-size: 14px;
                  `}
                >
                  Phone : 081-707-9101
                </p>
                <p
                  onClick={() =>
                    navigator.clipboard.writeText("saengowsupakit@gmail.com")
                  }
                  css={css`
                    cursor: pointer;
                    margin: 0;
                    font-weight: 500;
                    padding: 0 0 10px 0;
                    font-size: 14px;
                  `}
                >
                  Email : saengowsupakit@gmail.com
                </p>
                <a
                  href="https://github.com/Supakit06944"
                  target="_blank"
                  css={css`
                    color: white;
                    margin: 0 0;
                    font-weight: 700;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                  `}
                >
                  github{" "}
                  <FaGithub
                    css={css`
                      margin-left: 5px;
                    `}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/supakit-saengow-9479ba2b4/"
                  target="_blank"
                  css={css`
                    color: white;
                    margin: 0;
                    font-weight: 700;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                  `}
                >
                  Linkedin{" "}
                  <IoLogoLinkedin
                    css={css`
                      margin-left: 5px;
                    `}
                  />
                </a>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div
          className="portimage"
          css={css`
            width: 350px;
            height: 450px;
          `}
        >
          <img
            src={portImage}
            css={css`
              width: 350px;
              height: 450px;
              object-fit: cover;
              border-radius: 0px 30px 30px 0px;
              /* border-radius: 999px; */
            `}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
