import MDOPT from "./mdopt"

export default function Main() {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col gap-2 p-4">
            <span className="font-semibold text-4xl bg-neutral-900/50 p-4 mb-8 rounded-lg shadow-black shadow-lg">MoodieMoovy - Forget Choosing</span>
            <span className="font-semibold text-2xl">What Time is It</span>
            <MDOPT/>

            <span className="mt-12">Made with <a href="https://tmdb.org" className="underline" target="_blank">TMDB</a> & <a href="https://www.justwatch.com/" className="underline" target="_blank">JustWatch</a> by <a href="https://www.tiktok.com/@sdotdev" target="_blank" className="text-semibold underline text-red-600">sdotdev</a></span>
        </div>
    )
}