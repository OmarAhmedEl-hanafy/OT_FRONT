import { IconButton, Tooltip } from "@material-tailwind/react";

function Legout() {
  return (
    <div>
      <Tooltip
        className="z-[999999] bg-main-color"
        content="Logout"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <IconButton
          className="bg-transparent text-main-color"
          placeholder={""}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
            console.log("logout");
          }}
        >
          <i className="fa-solid fa-right-from-bracket text-lg rotate-180 lg:rotate-0" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Legout;
