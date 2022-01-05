import React, {useState} from 'react'

export default function Footer(props) {
    const [page, setPage] = useState(0);

    return (
        <footer>
            <p>{page}</p>
        </footer>
    )
}
