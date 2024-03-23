import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by
        <a href="https://github.com/chiogzy" target="_blank" rel="noreferrer">
          Chioma Oguogho
        </a>
        and is on
        <a
          href="https://github.com/chiogzy/previousweather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        and
        <a
          href="https://musical-llama-76f8d4.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
