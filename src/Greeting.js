export default function Greeting(props) {
    const {greeting = 'Hello World'} =props
    return (
        <h1>{greeting}</h1>
    )
}