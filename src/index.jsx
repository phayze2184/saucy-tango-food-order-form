import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Render the React app inside the root element defined in index.html.
createRoot(document.getElementById('root')).render(<App />);
