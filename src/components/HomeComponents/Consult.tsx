
function Consult({ consult }: any) {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{ boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}
        className="flex items-center justify-center w-[55px] h-[55px] bg-main-color rounded-full"
      >
        {consult.icon}
      </div>

      <div className="">
        <h4 className="font-bold text-[16px]">{consult.text}</h4>
      </div>
    </div>
  );
}

export default Consult;
