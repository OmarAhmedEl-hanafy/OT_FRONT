const TruncateText = ({ text, maxLength }: any) => {
  maxLength === "Max" ? (maxLength = text.split(" ").length) : "";
  const truncatedText = text.split(" ").map((word: any, index: number) => {
    if (index < maxLength) {
      return word + " ";
    }
  });

  return <>{truncatedText}</>;
};

export default TruncateText;
