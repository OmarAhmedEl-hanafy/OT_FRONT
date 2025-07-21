
const TruncateText = ({ text, maxLength }:any) => {
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  return <p>{truncatedText}</p>;
};

// Usage
const App = () => (
  <div>
    <TruncateText text="This is a very long text that needs to be truncated." maxLength={20} />
  </div>
);

export default App;
