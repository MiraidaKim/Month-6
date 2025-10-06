import { Outlet } from "react-router-dom";
import Header from './Header'


import rickImg from "../assets/3.jpg";
import mortyImg from "../assets/5.jpg";

export default function Layout() {
  return (
    <div className="layout">
      <div className="bg-characters">
        <img src={rickImg} alt="Rick" className="rick" />
        <img src={mortyImg} alt="Morty" className="morty" />
      </div>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">Rick & Morty Explorer</footer>
    </div>
  );
}

