import { Component } from 'react';

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  render() {
    return <div></div>;
  }
}

export default UserSearch;
