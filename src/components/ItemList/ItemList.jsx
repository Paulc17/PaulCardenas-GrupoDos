import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

<<<<<<< HEAD
export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);
=======
export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProducts().then((data) =>{
            setProducts(data)
            setLoading(false)
        });
    }, []);

>>>>>>> f2e66a6e26ecb3d47bd37fc0c3616b26605805b4

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
<<<<<<< HEAD
                <div className="flex flex-wrap justify-center">
=======
                <div className="flex flex-wrap">
>>>>>>> f2e66a6e26ecb3d47bd37fc0c3616b26605805b4
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}