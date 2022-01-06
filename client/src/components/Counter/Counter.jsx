export default function Counter() {
    const currentPage = ((window.location.href).slice(27,29))

    return (
        <footer>
            <p>{currentPage}/13</p>
        </footer>
    )
}
