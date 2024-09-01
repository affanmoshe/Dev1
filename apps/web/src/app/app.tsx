// _app.tsx or _app.js
import { Provider } from 'react-redux';
import { store } from '@/lib/store'; // Import the store instance directly
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
