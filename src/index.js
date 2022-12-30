import React from "react";
import ReachDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReachDOM.createRoot(el);

root.render(<App />);