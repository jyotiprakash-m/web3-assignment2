import dynamic from "next/dynamic";
import 'antd/dist/antd.css';

const App = dynamic(
  () => {
    return import("../components/App");
  },
  { ssr: false }
);

const Home = ({ accessToken }) => {
  return <App accessToken={accessToken} />;
}

const getServerSideProps = async () => {
  return { props: { accessToken: process.env.TOKEN_KEY } };
};
export default Home
export { getServerSideProps };