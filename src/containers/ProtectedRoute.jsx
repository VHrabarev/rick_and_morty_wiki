import { connect } from "react-redux";
import ProtectedRoute from "../components/ProtectedRoute";

const ProtectedRouteContainer = function(props) {
    return <ProtectedRoute {...props} />;
};

export default connect(store => ({ auth: store.auth.user.authStatus }))(ProtectedRouteContainer);