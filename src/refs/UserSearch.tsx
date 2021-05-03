import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Bar', age: 30 },
  { name: 'Foo', age: 32 },
  { name: 'John', age: 33 },
  { name: 'Doh', age: 34 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);
  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}> Find User</button>
      <div>
        Name : {user && user.name}
        <> Age: {user && user.age}</>
      </div>
    </div>
  );
};

export default UserSearch;
