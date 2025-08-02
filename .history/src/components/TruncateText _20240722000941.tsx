const TruncateText = ({ text, maxLength }: any) => {
  //   const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  console.log(text.split(" "));

  maxLength === "Max" ? (maxLength = text.split(" ").length) : "";
  const truncatedText = text.split(" ").map((word: any, index: number) => {
    if (index < maxLength) {
      return word + " ";
    }
  });

  return <>{truncatedText}</>;
};

export default TruncateText;
