import { lazy } from "react";
const ReactPlayer = lazy(() => import("react-player"));

function ViewVideo({ vid }: { vid: string }) {
  const playerProps = {
    url: vid,
    controls: true,
    playing: true,
    light: true,
    volume: 0.5,
    width: "100%",
    style: { minWidth: "100%" },
  };

  return (
    <div className="border border-main-color bg-main-color/50 w-[340px] md:w-[700px] lg:w-[750px] ml-5">
      <ReactPlayer {...playerProps} />
    </div>
  );
}

export default ViewVideo;
