
const TruncateText = ({ text, maxLength }:any) => {
//   const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  const truncatedText = text.split(' ').length > maxLength ? text.substring(0, maxLength) + '...' : text;
  return <p>{truncatedText}</p>;
};

export default TruncateText;
