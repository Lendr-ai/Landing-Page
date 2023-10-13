import React, { useState } from "react";
import CodeContentNode from "./CodeContentNode";

const CodeSnippet = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  return (
    <div className="bg-bgcode p-8 rounded-2xl h-full w-full shadow-2xl">
      <ul className="flex gap-1 lg:gap-4 justify-start lg:justify-center items-center overflow-scroll scrollbar-hide">
        <li
          className={
            activeLanguage === "javascript"
              ? "bg-bgcodebutton text-bgcode font-bold px-4 py-2 rounded-2xl cursor-pointer"
              : "font-bold cursor-pointer px-4 py-2 text-white"
          }
          onClick={() => setActiveLanguage("javascript")}
        >
          Node.js
        </li>
        <li
          className={
            activeLanguage === "ruby"
              ? "bg-bgcodebutton text-bgcode font-bold px-4 py-2 rounded-2xl cursor-pointer"
              : "font-bold cursor-pointer px-4 py-2 text-white"
          }
          onClick={() => setActiveLanguage("ruby")}
        >
          Ruby
        </li>
        <li
          className={
            activeLanguage === "python"
              ? "bg-bgcodebutton text-bgcode font-bold px-4 py-2 rounded-2xl cursor-pointer"
              : "font-bold cursor-pointer px-4 py-2 text-white"
          }
          onClick={() => setActiveLanguage("python")}
        >
          Python
        </li>
        <li
          className={
            activeLanguage === "php"
              ? "bg-bgcodebutton text-bgcode font-bold px-4 py-2 rounded-2xl cursor-pointer"
              : "font-bold cursor-pointer px-4 py-2 text-white"
          }
          onClick={() => setActiveLanguage("php")}
        >
          PHP
        </li>
        <li
          className={
            activeLanguage === "java"
              ? "bg-bgcodebutton text-bgcode font-bold px-4 py-2 rounded-2xl cursor-pointer"
              : "font-bold cursor-pointer px-4 py-2 text-white"
          }
          onClick={() => setActiveLanguage("java")}
        >
          Java
        </li>
        <li
          className={
            activeLanguage === "go"
              ? "bg-bgcodebutton text-bgcode font-bold px-4 py-2 rounded-2xl cursor-pointer"
              : "font-bold cursor-pointer px-4 py-2 text-white"
          }
          onClick={() => setActiveLanguage("go")}
        >
          Go
        </li>
      </ul>
      <div className="mt-4 overflow-scroll scrollbar-hide">
        <CodeContentNode language={activeLanguage} />
      </div>
    </div>
  );
};

export default CodeSnippet;
