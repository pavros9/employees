import './styles/index.scss';
import './styles/tailwind.css';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    );
};

export default App;
