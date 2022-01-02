import SubHeader from "./SubHeader"
import CatLikes from "./CatLikes"
export default function CatList(props) {
    return (
        <section>
            <SubHeader title='Cat Lists' />
            <CatLikes likes={['Cat nip','Laser pointer','Lasagna']}/>
        </section>
    )
} 