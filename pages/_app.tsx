import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import Layout from "../src/components/Layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }

  }
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
      </QueryClientProvider>
  )
}

export default MyApp
