import { connect } from "react-redux";
import Footer from "../components/Footer";

const FooterContainer = function() {
    return <Footer />
};

export default connect()(FooterContainer);