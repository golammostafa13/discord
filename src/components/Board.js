import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import TicTacToe from "./TicTacToe";
import { Routes, Route } from "react-router-dom";
import { personalInformation, permanentAddress, presentAddress, SSC, HSC, BSc, uiUx } from "../data";
import Cards from "./Cards";

const Board = ({ title, subTitle }) => {
  return (
    <div className="w-10/12 bg-gray-700">
      <Navbar title={title} subTitle={subTitle} />
      <Routes>
        <Route path="/" element={<TicTacToe />} />
        <Route path="/profile" element={<Table data={personalInformation}/>} />
        <Route path="/personal" element={<Table data={personalInformation}/>} />
        <Route path="/permanent" element={<Table data={permanentAddress}/>} />
        <Route path="/present" element={<Table data={presentAddress}/>} />
        
        <Route path="/education" element={<Table data={SSC}/>} />
        <Route path="/ssc" element={<Table data={SSC}/>} />
        <Route path="/hsc" element={<Table data={HSC}/>} />
        <Route path="/bsc" element={<Table data={BSc}/>} />

        <Route path="/experiences" element={<Cards data={uiUx} />} />
        <Route path="/ui/ux" element={<Cards data={uiUx} />} />
        <Route path="/database" element={<Cards data="" />} />
        <Route path="/front-end" element={<Cards data="" />} />
        <Route path="/back-end" element={<Cards data="" />} />
        <Route path="/blog" element={<Cards data="" />} />

        <Route path="/projects" element={<Cards data={uiUx} />} />
        <Route path="/figma" element={<Cards data={uiUx} />} />
        <Route path="/html-css" element={<Cards data="" />} />
        <Route path="/tailwind" element={<Cards data="" />} />
        <Route path="/javascript" element={<Cards data="" />} />
        <Route path="/database" element={<Cards data="" />} />
        <Route path="/front-end" element={<Cards data="" />} />
        <Route path="/back-end" element={<Cards data="" />} />
      </Routes>

      {/* { title !== 'Enjoy the Game - Tic Tac Toe' ? <Table /> : <TicTacToe /> } */}
    </div>
  );
};

export default Board;
