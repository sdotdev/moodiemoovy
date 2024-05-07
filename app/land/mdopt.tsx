'use client'

import { Button } from "@/components/ui/button"
import { Moods } from "./moods"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { UserRegion } from "./userRegion"

export default function MDOPT() {
    const [mood, setMood] = useState("")
    const [day, setDay] = useState("")
    const [time, setTime] = useState("")
    const router = useRouter()

    let chosenprvdrs = Array(provdlbls.length).fill(false)

    const fnd = () => {
        if (day && time && mood) {
            let provsstr = ""
            chosenprvdrs.forEach((val:string, index:number) => {
                if (val) {
                    provsstr += provdlbls[index].value
                }
            })
            provsstr = provsstr.slice(0, -1);
            localStorage.setItem("providersmoodiemoovy", provsstr)
            router.replace(`/movies/${mood}/${day}/${time}`)
        }
    }

    const grs = () => {
        const randomIndexMood = Math.floor(Math.random() * cs[0].opts.length);
        const randomIndexDay = Math.floor(Math.random() * cs[1].opts.length);
        const randomIndexTimeOfDay = Math.floor(Math.random() * cs[2].opts.length);

        // Get random values from each section
        const randomMood = cs[0].opts[randomIndexMood].value;
        const randomDay = cs[1].opts[randomIndexDay].value;
        const randomTimeOfDay = cs[2].opts[randomIndexTimeOfDay].value;
        let provsstr = ""
            chosenprvdrs.forEach((val:string, index:number) => {
                if (val) {
                    provsstr += provdlbls[index].value
                }
            })
            provsstr = provsstr.slice(0, -1);
            localStorage.setItem("providersmoodiemoovy", provsstr)

        router.push(`/movies/${randomMood}/${randomDay}/${randomTimeOfDay}`)

    }

    return (<>
        <div className="flex justify-center items-center gap-2 flex-col text-center md:flex-row">
            <div className="md:block flex justify-center items-center flex-col gap-2">
                <span>A(n) </span>
                <Moods c={0} oc={mood} ovc={setMood}/>
            </div>
            <div className="md:block flex justify-center items-center flex-col gap-2">
                <Moods c={1} oc={day} ovc={setDay} className="mr-2"/>
                <Moods c={2} oc={time} ovc={setTime}/>
            </div>
        </div>
        {mood && day && time? (
                    <span>Chosen: {ifcv(mood)? "An" : "A"} {cfl(mood)}, {cfl(day)} {cfl(time)}</span>
        ): (
            <span className="opacity-75">e.g A nostalgic, friday afternoon</span>
        )}

        <div>
            <span className="text-3xl">Select your providers and region:</span>
            <div className="flex gap-5">
                <div className="w-full flex flex-col gap-[0.125rem] my-2 pl-12">
                    {provdlbls.map((item, index) => (
                        <div className={`flex items-center space-x-2 ${index%2==0? "-ml-2" : ""}`} key={index}>
                            <Checkbox id={`prv${index}`} defaultChecked={false} onCheckedChange={(cc:boolean) => { chosenprvdrs[index] = cc }}/>
                            <label
                            htmlFor={`prv${index}`}
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                            {item.label}
                            </label>
                    </div>
                    ))}
                </div>
                <div>
                    <UserRegion/>
                </div>
            </div>
        </div>

        <Button onClick={fnd} className="bg-red-700">Find!</Button>
        <span>OR</span>
        <button onClick={grs} className='bg-gray-700 p-2 rounded-2xl'>Random Selections</button>
    </>)
}

function cfl(str:string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ifcv(str:string): boolean {
    const firstChar = str.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
}

const cs = [
    {
        cover: "Choose Mood...",
        opts: [
            { value: "relaxed", label: "Relaxed" },
            { value: "excited", label: "Excited" },
            { value: "thrilled", label: "Thrilled" },
            { value: "amused", label: "Amused" },
            { value: "nostalgic", label: "Nostalgic" },
            { value: "romantic", label: "Romantic" },
            { value: "tense", label: "Tense" },
            { value: "inspired", label: "Inspired" },
            { value: "emotional", label: "Emotional" },
            { value: "curious", label: "Curious" }
          ]
    },
    {
        cover: "Choose Day...",
        opts: [
            { value: "sunday", label: "Sunday" },
            { value: "monday", label: "Monday" },
            { value: "tuesday", label: "Tuesday" },
            { value: "wednesday", label: "Wednesday" },
            { value: "thursday", label: "Thursday" },
            { value: "friday", label: "Friday" },
            { value: "saturday", label: "Saturday" }
        ]
    },
    {
        cover: "Choose Time of Day...",
        opts: [
            { value: "morning", label: "Morning" },
            { value: "midmorning", label: "Midmorning" },
            { value: "noon", label: "Noon" },
            { value: "afternoon", label: "Afternoon" },
            { value: "evening", label: "Evening" },
            { value: "night", label: "Night" },
            { value: "midnight", label: "Midnight" },
            { value: "late-night", label: "Late Night" }
        ]
    }
]

const provdlbls = [
    {label: "Amazon (Prime) Video", value:"Amazon Video,Amazon Prime Video,"},
    {label: "Netflix", value:"Netflix,"},
    {label: "Apple TV", value:"Apple TV,"},
    {label: "Hulu", value:"Hulu,"},
    {label: "Sky GO", value:"Sky Go,"},
    {label: "WOW", value:"WOW,"},
    {label: "BBC iPlayer", value:"BBC iPlayer,"},
]