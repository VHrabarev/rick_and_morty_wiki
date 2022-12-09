import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Location from "../components/Location";
import { getLocationById } from "../store/reducers/promiseReducer";
import Backdrop from "./Backdrop.jsx";

const LocationContainer = function(props) {
    const {location, getLocation, pending} = props;
    const {id} = useParams();

    useEffect(() => {
        getLocation({id});
    }, [id]);

    return pending ? <Backdrop /> : <Location location={location} />;
};

export default connect(store => ({
    location: store.promise.location,
    pending: store.promise.pending.location,
}), { getLocation: getLocationById })(LocationContainer);