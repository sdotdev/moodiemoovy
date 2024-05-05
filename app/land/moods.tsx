"use client"

import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]

export function Moods({c, oc, ovc, className=""}:{c:number, oc:string, ovc: ((arg0:string) => void), className:string}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const frameworks = cs[c].opts
   
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            className={`w-[200px] justify-between ${className}`}
          >
            {oc
              ? frameworks?.find((framework) => framework.value === oc)?.label
              : cs[c].cover}
            {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
            <FontAwesomeIcon icon={faCaretDown} className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." className="h-9"/>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks?.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue:any) => {
                    ovc(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <FontAwesomeIcon
                  icon={faCheck}
                    className={cn(
                      "ml-auto h-4 w-4",
                      oc === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
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