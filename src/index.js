import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import './globalStyles';
// import GlobalStyle from './globalStyles';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
