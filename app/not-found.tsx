'use client'
import { redirect,useRouter } from 'next/navigation'

export default function Page404() {

    const router = useRouter()

    const grs = () => {
        const randomIndexMood = Math.floor(Math.random() * cs[0].opts.length);
        const randomIndexDay = Math.floor(Math.random() * cs[1].opts.length);
        const randomIndexTimeOfDay = Math.floor(Math.random() * cs[2].opts.length);

        // Get random values from each section
        const randomMood = cs[0].opts[randomIndexMood].value;
        const randomDay = cs[1].opts[randomIndexDay].value;
        const randomTimeOfDay = cs[2].opts[randomIndexTimeOfDay].value;

        router.push(`/movies/${randomMood}/${randomDay}/${randomTimeOfDay}`)

    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-1">
            <span><span className="text-5xl">404</span> - page not found</span>
            <div className='flex gap-2 justify-center items-center'>
                <a href="/" className="underline">Home</a>
                <button onClick={grs} className='bg-red-700 p-2 rounded-2xl'>Random Selections</button>
            </div>
        </div>
    )
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