import Fndr from "./fndr";

export default function Home({ params }: { params: { slug: string[] } }) {

    return (
        <div className="w-full h-screen flex justify-start pt-12 gap-3 items-center flex-col">
            <Fndr params={params.slug}/>
        </div>
    )
}