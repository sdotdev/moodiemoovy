import MDOPT from "./mdopt"
import Socials from "./socials"

export default function Main() {
    return (
        <div className="min-h-screen h-max w-full flex items-center justify-start tall:justify-center flex-col gap-2 p-4">
            <span className="font-semibold text-4xl bg-neutral-900/50 p-4 -mt-12 mb-8 rounded-lg shadow-black shadow-lg flex gap-1 justify-evenly items-center">
                <img src="/img/logo.png" className="w-8 aspect-square"/>
                <span>MoodieMoovy - Forget Choosing</span>
            </span>
            <span className="font-semibold text-2xl">What Time is It?</span>
            <MDOPT/>

            <div className="mt-12 flex gap-1">Made with <a href="https://tmdb.org" className="underline" target="_blank">TMDB</a> & <a href="https://www.justwatch.com/" className="underline" target="_blank">JustWatch</a> by 
                <div className="relative">
                    <div className="hidden md:block absolute -top-[6.65rem] -right-[6.65rem] bg-[url('/img/socialsA.png')] w-[7.25rem] h-[7.25rem] bg-contain invert"></div>
                    <Socials/>
                </div>
            </div>
        </div>
    )
}