import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <p>
            <strong>
              <a
                className="info"
                href="https://github.com/OODemi52/slackUpload"
                rel="noreferrer"
                target="_blank"
              >
                Slack Image Uploader
              </a>
            </strong>
            <br />
            Application that allows users to upload multiple images in a
            specified directory to a specified Slack channel. This application
            aims to reduce the amount of time require to upload large amounts of
            images (100+) to Slack using their native application.
            <br />
            <em>
              Technologies Used: Typescript, React, Node.js, Express, Slack Web
              API, FS and PATH Modules, Electron
            </em>
          </p>
        </li>
        <li>
          <p>
            <strong>
              <a
                className="info"
                href="https://github.com/OODemi52/the-lords-library-backend"
                rel="noreferrer"
                target="_blank"
              >
                Asset Management Application
              </a>
            </strong>
            <br />
            Application that allows users to upload images in a specified
            directory to a specified Slack channel.
            <br />
            <em>
              Technologies Used: Javascript, React, Node.js, Express, Bcrpyt,
              JWT, MongoDB, Axios
            </em>
          </p>
        </li>
        <li>
          <p>
            <strong>
              <a
                className="info"
                href="https://github.com/OODemi52/webTerminalPortfolio"
                rel="noreferrer"
                target="_blank"
              >
                Interactive Web Terminal Portfolio
              </a>
            </strong>
            <br />
            Uncaught RangeError: Circular Reference. Maximum call stack size
            exceeded ;)
            <br />
            <em>Technologies Used: Typescript, React, Redux</em>
          </p>
        </li>
        <li>
          <p>
            <strong>
              <a
                className="info"
                href="https://github.com/OODemi52/Control-Ball-Valve-System"
                rel="noreferrer"
                target="_blank"
              >
                Ball-Valve Control System
              </a>
            </strong>
            <br /> An automated control valve created by the Coanda Corporation
            ENME 444 Fall 2020 Capstone group. The program is used to control a
            ball valve in an Experimemtal Reaction Turbine using a stepper motor
            as an actuator based on user input through buttons and data
            collected from a proximity sensor that is used to sense mass air
            flow rate.
            <br />
            <em>
              Technologies Used: C++, SoftwareSerial Library, LiquidCrystal_I2C
              Library, Time-Of-Flight Sensor, Stepper Motor, Arduino
            </em>
          </p>
        </li>
        <li>
          <p>
            <strong>LIDAR Camera Autofocus System</strong>
            <br />- - - Under Construction! - - -
          </p>
        </li>
      </ul>
    </>
  );
};

export default Projects;
