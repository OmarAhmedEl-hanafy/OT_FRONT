
const TruncateText = ({ text, maxLength }:any) => {
//   const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
console.log(text.split(' '));

  const truncatedText = text.split(' ').length > maxLength ? text.substring(0, maxLength) + '...' : text+=text;
  return <>{truncatedText}</>;
};

export default TruncateText;
