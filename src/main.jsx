import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
);
