import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import 'semantic-ui-css/semantic.min.css';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyApp />);

//ReactDOM.render(<MyApp />, document.getElementById('root'));