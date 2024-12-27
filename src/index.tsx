import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './API/apollo';
import App from  '@/components/App/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}><App /></ApolloProvider>
    
)