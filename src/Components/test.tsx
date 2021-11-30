interface PropTypes {}

const App: React.FC<PropTypes> = () => {
  const fn2 = (): void => {};
  return <IntermediateComponent fn2={fn2} />;
};

//-------------------------

const IntermediateComponent: React.FC = (props) => {
  return <ChildComponent {...props} />;
};

//----------------------
const ChildComponent: React.FC = (props) => {
  return <div></div>;
};

export default App;
