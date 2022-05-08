import axios from "axios"
import { useEffect, useState } from "react"

const useProductDetail = id => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `https://polar-castle-01342.herokuapp.com/inventory/${id}`
        axios.get(url)
            .then(function (response) {

                setProduct(response.data)
            })
    }, [id])
    return [product, setProduct]
}

export default useProductDetail