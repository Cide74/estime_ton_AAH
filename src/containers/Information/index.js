import { connect } from "react-redux";
import Counter from "src/components/Information/Counter.js";
const mapStateToProps = state => ({
  nbArticle: state.user.nbArticle
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
