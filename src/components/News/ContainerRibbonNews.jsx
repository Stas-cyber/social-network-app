import { connect } from "react-redux";
import News from "./RibbonNews";

let mapStateToProps = (state) => {
    return {
        NewsPage: state.NewsPage
    }
}

const ContainerRibbonNews = connect(mapStateToProps)(News);

export default ContainerRibbonNews;