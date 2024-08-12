import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  padding: 20px;
`;

function User() {
  return (
    <UserContainer>
      <h2>User</h2>
      <p>This is the User component. Implement the functionality here.</p>
    </UserContainer>
  );
}

export default User;
