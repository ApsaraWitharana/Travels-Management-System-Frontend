import { createContext, useEffect, useReducer } from "react";

const storedUser = localStorage.getItem("user");
const initialState = {
    user: storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null,
    loading: false,
    error: null,
};


export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return { ...state, user: null, loading: true, error: null };
        case "LOGIN_SUCCESS":
            return { ...state, user: action.payload, loading: false, error: null };
        case "LOGIN_FAIL":
            return { ...state, user: null, loading: false, error: action.payload };
        case "REGISTER_SUCCESS":
            return { ...state, user: action.payload, loading: false, error: null };
        case "LOGOUT":
            return { ...state, user: null, loading: false, error: null };
        default:
            return state;
    }
};


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
