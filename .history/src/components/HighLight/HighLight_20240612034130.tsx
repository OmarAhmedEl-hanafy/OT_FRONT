
type props = {
    text:string,
}

function HighLight({text}:props) {
  return (
    <div className="bg-[#EFEEFE] text-main-color px-4 py-2 rounded-2xl max-w-max">
        <h5 className="capitalize text-[16px] font-semibold">{text}</h5>
    </div>
  )
}

export default HighLight