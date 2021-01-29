import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       refetchOnWindowFocus: false,
       staleTime: 30000 //ms
     },
   },
 })

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
