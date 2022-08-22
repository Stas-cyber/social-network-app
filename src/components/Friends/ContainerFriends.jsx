import { connect } from "react-redux";
import { Friends } from "./Friends";

let mapStateToProps = (state) => {
    return {
        FriendsPage: state.FriendsPage
    }
}

const ContainerFriends = connect(mapStateToProps)(Friends);

export default ContainerFriends;