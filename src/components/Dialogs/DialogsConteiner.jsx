import { addMessage} from "../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
            dialogState: state.dialogState,
        }

}
export default compose(
    connect(mapStateToProps,{addMessage}),
    withAuthRedirect,
)(Dialogs)

//const DialogsConteiner = withAuthRedirect(connect(mapStateToProps,{addMessage,MessageChange})(Dialogs));

//export default DialogsConteiner;