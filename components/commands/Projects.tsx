"use client";

const Projects: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <p>
            <strong>
              <a
                className="info underline"
                href="https://github.com/ChristChapelMD/slackshots-frontend"
                target="_blank"
              >
                SlackShots
              </a>
            </strong>
            <br />
            Open-source, multi-tenant file management system for Slack that
            automates bulk image uploads and improves workflow efficiency across
            multiple channels.
            <br />
            <em>
              Technologies Used: Next.js, TypeScript, Node.js, MongoDB, PostHog,
              AWS
            </em>
          </p>
        </li>
        <br />

        <li>
          <p>
            <strong>
              <a
                className="info underline"
                href="https://github.com/OODemi52/chronocast"
                target="_blank"
              >
                ChronoCast
              </a>
            </strong>
            <br />
            Multi-channel Stream management system with a performance-critical
            Go backend, supporting AI-driven intent capture and
            PostgreSQL-backed scheduling.
            <br />
            <em>Technologies Used: Go, PostgreSQL, Docker</em>
          </p>
        </li>
        <br />

        <li>
          <p>
            <strong>
              <a
                className="info underline"
                href="https://github.com/OODemi52/V-EazyWorship"
                target="_blank"
              >
                V-Eazy Worship
              </a>
            </strong>
            <br />
            Automated scripture and lyric extraction tool that reverse-engineers
            SQLite databases and generates structured outputs for worship
            service planning.
            <br />
            <em>Technologies Used: Go, SQLite, TypeScript, Tailwind CSS</em>
          </p>
        </li>
        <br />
      </ul>
    </>
  );
};

export default Projects;
