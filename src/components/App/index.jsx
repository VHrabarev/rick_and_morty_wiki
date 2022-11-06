import { useEffect } from "react";
import Header from "../../containers/Header.jsx";
import Main from "../../containers/Main.jsx";
import Footer from "../../containers/Footer.jsx";

const App = function(props) {
    const {checkUser} = props;
    useEffect(() => {
        checkUser();
    }, []);
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;