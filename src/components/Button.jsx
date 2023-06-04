


import React from 'react';

const Button = (props) => {

    return (

        <button className="btn border-0 inline-flex items-center justify-center h-10 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 disabled:cursor-not-allowed disabled:borde">{props.text}</button>

    );

}

export { Button };