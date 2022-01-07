import { useLocation } from "react-router-dom"

export default function CurrentPage() {

    //? useContext to access data
    let location = useLocation()
    // console.log(location)
    // console.log((location.pathname).slice(-2))

    return (
            <p>{(location.pathname).slice(-2)}/13</p>
    )
}
