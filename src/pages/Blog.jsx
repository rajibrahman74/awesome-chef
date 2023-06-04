/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Blog = () => {
  const contentRef = useRef(DataView);

  const generatePDF = () => {
    html2canvas(contentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save('download.pdf', { encoding: 'UTF-8' });
    });
  };

  return (
    <>
      <div>
        <div className="pt-20 pb-36 px-12 text-center">
        <h1 className="text-gray-600 py-5 md:text-8xl text-4xl font-sans font-bold">
           Blog 
          </h1>
          <h1 className="py-12 text-4xl font-sans font-bold">
            Here are the 4 Question/Answer!
          </h1>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-8"
          >
            <div className="collapse-title text-xl font-medium bg-[#ededee]">
              1.Tell us the differences between uncontrolled and controlled
              components?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p ref={contentRef} className="py-5">
                In React, controlled components are those that are bound to a
                state value and are modified via user input by updating the
                state value. They rely on the parent component to manage the
                state and handle all user input.
                <br />
                In contrast, uncontrolled components are components that do not
                rely on a state value to function, but instead manage their own
                state internally through the DOM. They are usually created using
                refs in React. Controlled components provide a more reliable way
                of managing state, while uncontrolled components are easier to
                set up but may lead to inconsistencies.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5"
          >
            <div className="collapse-title text-xl font-medium bg-[#ededee]">
              2.How to validate React props using PropTypes?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                React PropTypes is a type checking library that allows
                developers to validate the props being passed to a React
                component. It can help catch bugs early by checking that the
                props are of the expected type. <br />
                <br />
                By using PropTypes to validate our props, we can catch errors
                and improve the robustness of our React components.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5"
          >
            <div className="collapse-title text-xl font-medium bg-[#ededee]">
              3.Tell us the difference between nodejs and express js.?
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                <strong>Node.js:</strong> is a JavaScript runtime that allows
                developers to run JavaScript code on the server-side. It uses
                the V8 JavaScript engine from Google Chrome to execute
                JavaScript code outside of the browser environment. Node.js
                provides a rich set of built-in modules for working with file
                system, networking, and other aspects of server-side
                development.
                <br />
                <br />
                <strong>Express.js:</strong> is a lightweight and flexible web
                application framework built on top of Node.js. It provides a set
                of features and utilities for building web applications and
                APIs, such as routing, middleware, and HTTP request/response
                handling. Express.js allows developers to easily create
                server-side applications and APIs, and it has a wide range of
                community-contributed middleware and plugins that can extend its
                functionality.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5"
          >
            <div className="collapse-title text-xl font-medium bg-[#ededee]">
              4.What is a custom hook, and why will you create a custom hook??
            </div>
            <div className="collapse-content text-sm sm:text-base ">
              <p className="py-5">
                <strong> Custom Hooks:</strong> are used to reuse stateful logic
                easily across different components in an optimized and scalable
                format. Custom Hooks also produce a clean and structured
                codebase that reduces complexity and redundancy in your React
                project. <br />
                <br />
                Custom hooks can call hooks themselves, such as useEffect and
                useState. These built-in React hooks can work in custom hooks
                the same way they work in components. custom hooks can help to
                write cleaner, more efficient code that is easier to maintain
                and extend over time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* pdf generator */}
      <div className="text-center flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-bold mb-5">
          Our Receipie formula
        </h1>
        <div className="bg-success w-[12rem] h-[10rem] items-center justify-center flex flex-col text-center rounded-[2rem]">
          <DocumentTextIcon className="w-20 text-white" /> 
        <button
          className="text-white py-2 px-5 justify-center text-lg"
          onClick={generatePDF}
        >
          Download PDF
        </button>
        </div>
      
      </div>
      {/* end pdf generator */}
    </>
  );
};

export default Blog;