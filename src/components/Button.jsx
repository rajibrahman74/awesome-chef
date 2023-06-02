


import React from 'react';

const Button = (props) => {

    return (

        <button className="transition duration-300 border-2 border-[#10B981] text-white bg-success px-8 py-2.5 font-bold rounded-md flex items-center gap-2 hover:bg-transparent hover:text-gray-600">{props.text}</button>

    );

}

export { Button };