import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  articles: [],
  apiKey: "aoglAnyQnekzxWTAs35xvWFb0a3LkOHV",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    case "SET_QUREY":
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${state.apiKey}`
      )
      .then(({ data }) => {
        setArticles(data.results);
      });
  }, []);

  const setArticles = (data) => {
    dispatch({
      type: "SET_ARTICLES",
      payload: data,
    });
  };

  return (
    <StateContext.Provider value={{ state, setArticles }}>
      {children}
    </StateContext.Provider>
  );
};

export const useDataLayer = () => useContext(StateContext);
