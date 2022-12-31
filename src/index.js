import React from "react";
import ReachDOM from 'react-dom/client';
import App from './App';
import searchImages from "./api";

searchImages();

const el = document.getElementById('root');
const root = ReachDOM.createRoot(el);

root.render(<App />);