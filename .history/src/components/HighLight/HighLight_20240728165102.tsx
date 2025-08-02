type props = {
  text: string;
};

function HighLight({ text }: props) {
  return (
    <div className="bg-[#1a2b4c] px-4 py-2 rounded-2xl max-w-max">
      <h5
        className="capitalize text-white text-[16px] font-semibold"
        style={{ color: "white !important" }}
      >
        {text}
      </h5>
    </div>
  );
}

export default HighLight;
