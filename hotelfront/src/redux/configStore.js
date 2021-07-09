import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

//(수정) - 만든 리듀서 모듈 임포트해주기


//히스토리 객체 만들기
export const history = createBrowserHistory();

//루트 리듀서 - (수정)
//combineReducers({ bucket, a, b... });
const rootReducer = combineReducers({
  
  //만든 히스토리를 리듀서에 넣어주기(히스토리와 라우터가 연결됨)
  router: connectRouter(history),
});

//미들웨어 준비 > 히스토리를 이용해서 미들웨어
const middlewares = [thunk.withExtraArgument({history: history})];

// 현재 환경
const env = process.env.NODE_ENV;

// 개발환경- 로거
if (env === "development") {
  //require : 패키지 가지고 올 때 개발 환경에서만 필요한 패키지이기 때문에 불필요한 프로젝트 크기 확장을 막아줌
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//redux devTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
    
    //미들웨어 묶기
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    let store = (initialStore) => createStore(rootReducer, enhancer);

    export default store();