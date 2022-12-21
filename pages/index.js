import dynamic from "next/dynamic";
import 'antd/dist/antd.css';
import { accessToken } from '../utils/protector';
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
  return { props: { accessToken } };
};
export default Home
export { getServerSideProps };