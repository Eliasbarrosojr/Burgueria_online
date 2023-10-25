import React from 'react';
import { UserContextProvider } from './UserContect/UserContext';
import { IProviderProps } from './UserContect/type';

const Provider = ({ children }: IProviderProps) => (
  <UserContextProvider>{children}</UserContextProvider>
);

export default Provider;
