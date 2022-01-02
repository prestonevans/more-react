import SubHeader from "./SubHeader"
import CatUl from "./CatUl"
export default function CatList(props) {
    return (
        <section>
            <SubHeader title='Cat Lists' />
            <CatUl 
            list={['Cat nip','Laser pointer','Lasagna']}
            noun='like'
            alt='lasagna'
            img='https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
            />
            <CatUl 
            list={['Flea treatment', 'Thunder','Other cats']}
            noun='hate'
            alt='other cats'
            img='https://images.unsplash.com/photo-1617227789575-97fa0d5a2f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2458&q=80'
            />
        </section>
    )
} 