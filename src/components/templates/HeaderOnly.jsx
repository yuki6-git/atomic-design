import { Header } from '../atoms/layout/Header';

export const HeaderOnlyLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
