"use client";

const Socials: React.FC = () => {
  const socials = {
    LinkedIn: "https://www.linkedin.com/in/demi-daniel-akanle/",
    Github: "https://github.com/OODemi52",
    //"Instagram (Personal)": "https://www.instagram.com/doubleodemi/",
    //"Instagram (Photogrpahy)": "https://www.instagram.com/d__labs/",
  };

  return (
    <p>
      {Object.entries(socials).map(([name, link]) => (
        <span key={name}>
          <a
            className="info"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <br />
        </span>
      ))}
    </p>
  );
};

export default Socials;
