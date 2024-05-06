'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Socials() {

    return (
        <Popover defaultOpen={true}>
            <PopoverTrigger className="underline text-red-600">sdotdev</PopoverTrigger>
            <PopoverContent className="p-2 !w-max flex gap-2 justify-center items-center">
                <a href="https://tiktok.com/@sdotdev" target="_blank"><FontAwesomeIcon icon={faTiktok}/></a>
                <a href="https://twitter.com/sdotdev"><FontAwesomeIcon icon={faXTwitter} target="_blank"/></a>
            </PopoverContent>
        </Popover>

    )
}