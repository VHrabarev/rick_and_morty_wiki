import { connect } from "react-redux";
import Header from "../components/Header";
import { PAGES, SETTINGS } from "../api/constans";

const HeaderContainer = function(props) {
    let {auth} = props;
    
    return <Header auth={auth} pages={PAGES} settings={SETTINGS} />
};

export default connect(store => ({auth: "anon"}))(HeaderContainer);