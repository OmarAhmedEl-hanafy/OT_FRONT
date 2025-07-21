import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function NotFound() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-2xl">Page Not Found</p>
      <Button
        color="blue"
        className="mt-6"
        onClick={() => (window.location.href = "/")}
        placeholder={''}
        onPointerEnterCapture={()=>{}}
        onPointerLeaveCapture={()=>{}}
      >
        Go Home
      </Button>
    </div>
    <Footer/>
    </>
  );
}

export default NotFound;
