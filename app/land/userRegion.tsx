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

  export function UserRegion() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        console.log(value)
    },[value])
   
    return (
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.label.toLowerCase() === value)?.label
              : "Select Your Region..."}
            <FontAwesomeIcon icon={faCaretDown} className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 h-64">
          <Command>
            <CommandInput placeholder="Search..." className="h-9"/>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="h-full overflow-y-auto">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.label}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    localStorage.setItem("reigonmoodiemoovy", frameworks.find((framework) => framework.label.toLowerCase() === currentValue.toLowerCase())?.value as string)
                  }}
                >
                  {framework.label}
                  <FontAwesomeIcon
                  icon={faCheck}
                    className={cn(
                      "ml-auto h-4 w-4",
                      "opacity-0"
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

  
  const frameworks = [
    { label: "Andorra", value: "AD" },
    { label: "United Arab Emirates", value: "AE" },
    { label: "Antigua and Barbuda", value: "AG" },
    { label: "Albania", value: "AL" },
    { label: "Angola", value: "AO" },
    { label: "Argentina", value: "AR" },
    { label: "Austria", value: "AT" },
    { label: "Australia", value: "AU" },
    { label: "Azerbaijan", value: "AZ" },
    { label: "Bosnia and Herzegovina", value: "BA" },
    { label: "Barbados", value: "BB" },
    { label: "Belgium", value: "BE" },
    { label: "Burkina Faso", value: "BF" },
    { label: "Bulgaria", value: "BG" },
    { label: "Bahrain", value: "BH" },
    { label: "Bermuda", value: "BM" },
    { label: "Bolivia", value: "BO" },
    { label: "Brazil", value: "BR" },
    { label: "Bahamas", value: "BS" },
    { label: "Belarus", value: "BY" },
    { label: "Belize", value: "BZ" },
    { label: "Canada", value: "CA" },
    { label: "Congo", value: "CD" },
    { label: "Switzerland", value: "CH" },
    { label: "Cote D'Ivoire", value: "CI" },
    { label: "Chile", value: "CL" },
    { label: "Cameroon", value: "CM" },
    { label: "Colombia", value: "CO" },
    { label: "Costa Rica", value: "CR" },
    { label: "Cuba", value: "CU" },
    { label: "Cape Verde", value: "CV" },
    { label: "Cyprus", value: "CY" },
    { label: "Czech Republic", value: "CZ" },
    { label: "Germany", value: "DE" },
    { label: "Denmark", value: "DK" },
    { label: "Dominican Republic", value: "DO" },
    { label: "Algeria", value: "DZ" },
    { label: "Ecuador", value: "EC" },
    { label: "Estonia", value: "EE" },
    { label: "Egypt", value: "EG" },
    { label: "Spain", value: "ES" },
    { label: "Finland", value: "FI" },
    { label: "Fiji", value: "FJ" },
    { label: "France", value: "FR" },
    { label: "United Kingdom", value: "GB" },
    { label: "French Guiana", value: "GF" },
    { label: "Ghana", value: "GH" },
    { label: "Gibraltar", value: "GI" },
    { label: "Guadaloupe", value: "GP" },
    { label: "Equatorial Guinea", value: "GQ" },
    { label: "Greece", value: "GR" },
    { label: "Guatemala", value: "GT" },
    { label: "Guyana", value: "GY" },
    { label: "Hong Kong", value: "HK" },
    { label: "Honduras", value: "HN" },
    { label: "Croatia", value: "HR" },
    { label: "Hungary", value: "HU" },
    { label: "Indonesia", value: "ID" },
    { label: "Ireland", value: "IE" },
    { label: "Israel", value: "IL" },
    { label: "India", value: "IN" },
    { label: "Iraq", value: "IQ" },
    { label: "Iceland", value: "IS" },
    { label: "Italy", value: "IT" },
    { label: "Jamaica", value: "JM" },
    { label: "Jordan", value: "JO" },
    { label: "Japan", value: "JP" },
    { label: "Kenya", value: "KE" },
    { label: "South Korea", value: "KR" },
    { label: "Kuwait", value: "KW" },
    { label: "Lebanon", value: "LB" },
    { label: "St. Lucia", value: "LC" },
    { label: "Liechtenstein", value: "LI" },
    { label: "Lithuania", value: "LT" },
    { label: "Luxembourg", value: "LU" },
    { label: "Latvia", value: "LV" },
    { label: "Libya", value: "LY" },
    { label: "Morocco", value: "MA" },
    { label: "Monaco", value: "MC" },
    { label: "Moldova", value: "MD" },
    { label: "Montenegro", value: "ME" },
    { label: "Madagascar", value: "MG" },
    { label: "Macedonia", value: "MK" },
    { label: "Mali", value: "ML" },
    { label: "Malta", value: "MT" },
    { label: "Mauritius", value: "MU" },
    { label: "Malawi", value: "MW" },
    { label: "Mexico", value: "MX" },
    { label: "Malaysia", value: "MY" },
    { label: "Mozambique", value: "MZ" },
    { label: "Niger", value: "NE" },
    { label: "Nigeria", value: "NG" },
    { label: "Nicaragua", value: "NI" },
    { label: "Netherlands", value: "NL" },
    { label: "Norway", value: "NO" },
    { label: "New Zealand", value: "NZ" },
    { label: "Oman", value: "OM" },
    { label: "Panama", value: "PA" },
    { label: "Peru", value: "PE" },
    { label: "French Polynesia", value: "PF" },
    { label: "Papua New Guinea", value: "PG" },
    { label: "Philippines", value: "PH" },
    { label: "Pakistan", value: "PK" },
    { label: "Poland", value: "PL" },
    { label: "Palestinian Territory", value: "PS" },
    { label: "Portugal", value: "PT" },
    { label: "Paraguay", value: "PY" },
    { label: "Qatar", value: "QA" },
    { label: "Romania", value: "RO" },
    { label: "Serbia", value: "RS" },
    { label: "Russia", value: "RU" },
    { label: "Saudi Arabia", value: "SA" },
    { label: "Seychelles", value: "SC" },
    { label: "Sweden", value: "SE" },
    { label: "Singapore", value: "SG" },
    { label: "Slovenia", value: "SI" },
    { label: "Slovakia", value: "SK" },
    { label: "San Marino", value: "SM" },
    { label: "Senegal", value: "SN" },
    { label: "El Salvador", value: "SV" },
    { label: "Turks and Caicos Islands", value: "TC" },
    { label: "Chad", value: "TD" },
    { label: "Thailand", value: "TH" },
    { label: "Tunisia", value: "TN" },
    { label: "Turkey", value: "TR" },
    { label: "Trinidad and Tobago", value: "TT" },
    { label: "Taiwan", value: "TW" },
    { label: "Tanzania", value: "TZ" },
    { label: "Ukraine", value: "UA" },
    { label: "Uganda", value: "UG" },
    { label: "United States of America", value: "US" },
    { label: "Uruguay", value: "UY" },
    { label: "Holy See", value: "VA" },
    { label: "Venezuela", value: "VE" },
    { label: "Kosovo", value: "XK" },
    { label: "Yemen", value: "YE" },
    { label: "South Africa", value: "ZA" },
    { label: "Zambia", value: "ZM" },
    { label: "Zimbabwe", value: "ZW" }
  ];
  