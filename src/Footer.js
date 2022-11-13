import "./Footer.css";

export default function Form() {
  return (
    <div>
      <footer className= "git">
        <small>
          <a
            href="https://github.com/smunroe34/react-project.git"
            className="git-link"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          <span> by Sasha Munroe </span>
        </small>
      </footer>
    </div>
  );
}