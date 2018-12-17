import Header from '../components/Header'
import ListItem from '../components/ListItem'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <div>
        <Header />

        <h2>Teste</h2>
        <ul>
            {props.url.query.results.map((charData) => (
                <ListItem charData={charData}/>                
            ))}
        </ul>
        <div className="button-container">
            
        </div>
    </div>
)

export default Index