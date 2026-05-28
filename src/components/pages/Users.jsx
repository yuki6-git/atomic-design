import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [
  ...Array(10)
    .keys()
    .map((val) => {
      return {
        id: val,
        name: `${val}じゃけぇ`,
        image:
          'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUU3JThBJUFDfGVufDB8fDB8fHww',
        email: '1234@example.com',
        phone: '080-123-123',
        company: {
          name: 'あいう株式会社',
        },
        website: 'https://goog;le.com',
      };
    }),
];
export const Users = () => {
  return (
    <SContainer>
      <h1>ユーザー一覧</h1>
      <SearchInput />
      <SCardContainer>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SCardContainer>
    </SContainer>
  );
};
const SContainer = styled.div`
 text-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 `;
const SCardContainer = styled.div`
padding-top: 40px;
width: 100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-gap: 20px;
`;
