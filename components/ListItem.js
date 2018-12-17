import Link from 'next/link'

const ListItem = (props) => (
    <li key={props.charData.name}>
        <Link as={`/p/${props.charData.name}`} href={`/post?id=${props.charData.name}`}>
            <a>{props.charData.name}</a>
        </Link>
    </li>
)

export default ListItem