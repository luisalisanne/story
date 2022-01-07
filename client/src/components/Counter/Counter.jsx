import { useContext } from "react";
import Context from "../../context/Context";

export default function Counter() {
    // const currentPage = ((window.location.href).slice(27,29))

    const {counter} = useContext(Context)

    return (
            // <p>{currentPage}/13</p>
            <>Page {counter}/13</>
    )
}
