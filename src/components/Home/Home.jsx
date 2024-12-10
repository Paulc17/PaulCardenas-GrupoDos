import { Link } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

export default function HomePage(){
    const Imgbanner = "./banner.png"
    return(
<<<<<<< HEAD
        <><div className='h-full w-[100%] '>
            <a href="https://www.yamahamotos.cl/producto/r3-a/" target="_blank" rel="noopener noreferrer">
            <img src={Imgbanner} alt="banner" className='cursor-pointer' />
            </a>
        </div>
        <div>
            <Link to="/" className="bg-[#2d3a4b] px-[50px] py-[5px] text-[18px] uppercase leading-[46px] flex w-[250px] text-center text-[#ffffff] mt-[30px]">Compra Aqui</Link>
=======
        <><div className='mt-[15vh]'>
            <img src={Imgbanner} alt="banner" className='h-[full] w-[100%]' />
        </div>
        <div className='mb-[15vh]'>
            <Link to="/" className="bg-[#2d3a4b] px-[50px] py-[5px] text-[18px] uppercase leading-[46px] flex w-[210px] text-center text-[#ffffff] mt-[30px]">SHOP NOW</Link>
>>>>>>> f2e66a6e26ecb3d47bd37fc0c3616b26605805b4
            <ItemList />
        </div></>
    )
}