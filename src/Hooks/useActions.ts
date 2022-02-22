import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionsCreators from '../Store/ActionCreators/index'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionsCreators, dispatch)
}