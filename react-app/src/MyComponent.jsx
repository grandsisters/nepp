const MyComponent = ({ name, children }) => {
  return (
    <div>
      나의 새롭고 멋진 {name} 컴포넌트
      <br />
      {children}
    </div>
  );
};

export default MyComponent;
