import { connect } from "react-redux";
import Sursribers from "./Sursribers";

let mapStateToProps = (state) => {
    return {
        SurscribersPage: state.SurscribersPage
    }
}

const ContainerSurcribers = connect(mapStateToProps)(Sursribers);

export default ContainerSurcribers;