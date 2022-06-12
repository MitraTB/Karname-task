import {Header} from '../components'
const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
