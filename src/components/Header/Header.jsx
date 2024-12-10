import Navbar from '../Navbar/Navbar';

export default function HeaderComponent() {
<<<<<<< HEAD
  const Imagen = "/logo.png";
  
  return (
    <>
      <div className="w-full h-[130px] flex items-center justify-center bg-white">
        <img src={Imagen} alt="logo" className="w-[100px] h-[100px] absolute left-0 ml-2" />
        <Navbar />
      </div>
    </>
  );
=======
    const Imagen = "/logo.png";
    
    return (
      <>
        <div className='fixed top-0 left-0 w-full flex justify-between z-15 bg-white'>
          <img src={Imagen} alt="logo" className="w-[15vh] h-[15vh]" />
          <Navbar />
        </div>
      </>
    );
>>>>>>> f2e66a6e26ecb3d47bd37fc0c3616b26605805b4
}