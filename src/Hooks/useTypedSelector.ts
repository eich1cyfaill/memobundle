import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../Store/Reducers";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector