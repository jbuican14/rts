interface ChildProps {
  color: string;
  onClick: () => void;
}

// Disable the properties of the react
// Cannot use child prop of this child here unless define in interface children: type children
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// Tell that this is a react component and will recieve childprops
// FC == React.FunctionComponent
// This can add Children
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
