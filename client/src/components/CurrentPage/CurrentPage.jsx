import { useLocation } from "react-router-dom"

export default function CurrentPage() {

    //? useContext to access data
    let location = useLocation()
    // console.log(location)
    // console.log((location.pathname).slice(-2))
    
    const slicedLocation = location.pathname.slice(-2)

    // CONDITIONAL RENDERING to not display the current page on Landing page

    if((slicedLocation.includes('/')===false)) {return (
            <p>{slicedLocation}/13</p>
    )} else {
        return (
            <p></p>
        )
    }
}
