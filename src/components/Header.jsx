import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        TODO<i className="text-5xl font-bold">list</i> {""}
        <span className="text-sky-600">Tareas</span>
      </h1>
    </>
  );
};

export default Header;
