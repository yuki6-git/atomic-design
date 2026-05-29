import { PrimaryButton } from './components/atoms/PrimaryButton';
import { SecoundaryButton } from './components/atoms/SecoundaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnlyLayout } from './components/templates/HeaderOnly';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { Top } from './components/pages/Top';
import { Users } from './components/pages/Users';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/users"
          element={
            <HeaderOnlyLayout>
              <Users />
            </HeaderOnlyLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
