import ListView from "../../components/ListVanilla/List002"
import ListView002_1 from "../../components/ListVanilla/ListView002"
export default function DemoListVanilla({version}) {

    const Component = version == '2.1'
        ? <>Hello 2.1 <ListView002_1 /></>
        : <ListView />

    return (
        <>
            HELLO!
            {/* <ListView version={version} /> */}
            {/* <ListView002_1 /> */}
            { Component }
        </>
    )

}