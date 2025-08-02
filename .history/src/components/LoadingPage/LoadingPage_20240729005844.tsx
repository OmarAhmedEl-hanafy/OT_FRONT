import { Grid } from "react-loader-spinner";

function LoadingPage() {
  return (
    <div className="absolute top-0 left-0 h-screen w-full bg-bg-main z-[9999999] flex items-center justify-center">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="rgb(26,43,76)"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default LoadingPage;
