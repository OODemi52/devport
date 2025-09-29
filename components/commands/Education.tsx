"use client";

const Education: React.FC = () => {
  return (
    <ul>
      <li>
        <p>
          <strong>Master of Science (M.Sc)</strong>
          <em>
            <br />
            Information Systems and Technology
            <br />
            with Graduate Certificate in Artificial Intelligence
          </em>
          <br />
          <a
            className="info underline"
            href="https://www.gwu.edu"
            target="_blank"
          >
            The George Washington University
          </a>{" "}
          | 2022 - 2024
        </p>
      </li>
      <br />

      <li>
        <p>
          <strong>Bachelor of Science (B.Sc)</strong>
          <em>
            <br />
            Mechanical Engineering
            <br />
          </em>
          <a className="info underline" href="https://umbc.edu" target="_blank">
            University of Marylnad - Baltimore County
          </a>{" "}
          | 2016 - 2020
        </p>
      </li>
      <br />
    </ul>
  );
};

export default Education;
