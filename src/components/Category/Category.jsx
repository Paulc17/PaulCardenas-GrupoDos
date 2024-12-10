<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

export default function ProductsCategory() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
=======
// HOOKS DE REACT PARA USESTATE Y EFFECT
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// IMPORTO FUNCION PARA OBTENER LOS PRODUCTOS POR CATEGORIAS
import { getProductByCategory } from "../../data/asyncMock";

// IMPORTO ITEMLIST
import ItemList from "../ItemList/ItemList";

// IMPORTO EL LOADING
import Loading from "../Loading/Loading";

export default function ProductsCategory(){
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
>>>>>>> f2e66a6e26ecb3d47bd37fc0c3616b26605805b4
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);

<<<<<<< HEAD
    return (
        <div className="container mx-auto max-w-[1170px]">
            <CategoryMenu />
            {loading ? (
                <Loading />
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}
=======

    return(
    <div className="container mx-auto max-w-[1170px]">
        {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                
                <ItemList products={products}/>
        )}   
    </div>   
    )
};
>>>>>>> f2e66a6e26ecb3d47bd37fc0c3616b26605805b4
