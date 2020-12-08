import Head from "next/head";
import NewsArticles from "../components/NewsArticles";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Articles App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NewsArticles />
    </div>
  );
};

export default Home;
