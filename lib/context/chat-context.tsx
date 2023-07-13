import { Dispatch, createContext } from 'react';
import {Message} from "../types/chat";
import {ActionType} from "../hooks/useCreateReducer";

export interface ChatInitialState {
    loading: boolean;
    messageIsStreaming: boolean;
    messages: Message[];
    currentMessage: Message | undefined;
    messageError: boolean;
}
export const initialState: ChatInitialState = {
    loading: false,
    messageIsStreaming: false,
    messageError: false,
    messages: [],
    currentMessage: undefined
}


export interface ChatContextProps {
    state: ChatInitialState;
    dispatch: Dispatch<ActionType<ChatInitialState>>;
}

const ChatContext = createContext<ChatContextProps>(undefined!);

export default ChatContext;
