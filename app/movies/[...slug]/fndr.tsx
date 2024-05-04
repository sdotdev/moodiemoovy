'use client'
import React, { use, useEffect, useState } from 'react'

interface Option {
    value: string;
    label: string;
}

interface UserSelection {
    mood: string;
    day: string;
    timeOfDay: string;
}

export default function Fndr({params}: {params: any}) {

    const ggg: UserSelection = {mood: params[0], day: params[1], timeOfDay: params[2]}
    const hh: string[] = findPerfectGenre(ggg)
    const [res, setRes] = useState<any>(["loading..","loading"])
    const [vidUr, setVidUr] = useState<string>("")
    const [minx, setMinx] = useState<number>(0)
    let c1 = false;
    let c2 = false
    const [details, setDetails] = useState<any>({})
    const [won, setWon] = useState<any>({})

    useEffect(() => {
        const fetchData = async () => {
            if (c1) return;
            c1 = true
            const options = {
                            method: 'GET',
                            headers: {
                              accept: 'application/json',
                              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGU0YzRkODIxYWYxYzMxZjkzNGZkOTA2ZGI4MzZjNSIsInN1YiI6IjY2MjJkM2UzMDQ0M2M5MDE4Nzc3NmE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDFzwnkZDsUzCud3TjsSES6lDrhE_1Zh06mnr8icrTs'
                            }
                          };
    
            try {
                // Fetch movie data
                const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&include_video=true&page=1&sort_by=popularity.desc&with_genres=${hh.join(",")}`, options);
                const movieData = await movieResponse.json();
                // console.log(movieData);
                
                // // Fetch video data for the first movie
                // const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieData.results[1].id}/videos?language=en-US`, options);
                // const videoData = await videoResponse.json();
                // console.log(videoData);
    
                // Set state variables
                setRes(shuffle(movieData.results));
                // setVidUr(videoData.results[minx].key);
            } catch (error) {
                // console.error(error);
            }
        };

        // console.log(typeof window)
    
        if (typeof window !== 'undefined') {
            fetchData();
        }
    }, []);

    useEffect(() => {
        // console.log(res[minx])
        if (res === undefined || res === null) return
        // console.log((navigator.geolocation))

        const fetchData = async () => {
            if (c2) return;
            c2 = true
            const options = {
                            method: 'GET',
                            headers: {
                              accept: 'application/json',
                              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGU0YzRkODIxYWYxYzMxZjkzNGZkOTA2ZGI4MzZjNSIsInN1YiI6IjY2MjJkM2UzMDQ0M2M5MDE4Nzc3NmE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDFzwnkZDsUzCud3TjsSES6lDrhE_1Zh06mnr8icrTs'
                            }
                          };
    
            if (res === undefined || res === null) return
            try { 
                const detailss = await fetch(`https://api.themoviedb.org/3/movie/${res[minx].id}?language=en-US`, options)
                const ddta = await detailss.json()
                setDetails(ddta)
                console.log("tya")
                
                const waon = await fetch(`https://api.themoviedb.org/3/movie/${res[minx].id}/watch/providers`, options)
                const wonn = await waon.json()
                console.log(wonn.results.US.flatrate)
                setWon(
                    wonn.results.US.flatrate
                  );

                const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${res[minx].id}/videos?language=en-US`, options);
                const videoData = await videoResponse.json();
                setVidUr(videoData.results[0].key);
            } catch (error) {
                // console.error(error);
            }
        };

        // console.log(typeof window)
    
        if (typeof window !== 'undefined') {
            fetchData();
        }
    },[res,minx])

    useEffect(() => {
        const handleKeyPress = (event:any) => {
          // Check if the right arrow key (keyCode 39) or spacebar (keyCode 32) is pressed
          if (event.keyCode === 39 || event.keyCode === 32) {
            event.preventDefault()
            // Call your function here
            setMinx(prevM => prevM + 1);
          }
        };
    
        // Add event listener when component mounts
        document.addEventListener('keydown', handleKeyPress);
    
        // Remove event listener when component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);
    
    return (
    <div className="md:w-1/2 w-11/12 p-3 px-6 min-h-[90vh] h-max max-h-max bg-neutral-800/75 mb-4 rounded-xl relative flex justify-start items-start flex-col">
        
        <button onClick={() => setMinx(prevM => prevM + 1)} className='w-8 h-8 bg-red-500 rounded-xl text-center absolute top-1/2 left-[92%] hover:scale-105 transition-all'>🢂</button>
       
        <a
        href="/"
        className="absolute top-0 left-0 bg-red-700 text-white p-1 aspect-square h-8 text-center font-extrabold rounded m-2"
      >
        ⇐
      </a>
        
        <span className="text-3xl mb-2 mx-auto w-1/2 text-center">{res[minx].title}</span>
        <iframe src={`https://www.youtube.com/embed/${vidUr}`} frameBorder="0" className='w-3/4 mx-auto aspect-video rounded-2xl bg-black mb-3'></iframe>
        <span>| Released: {details?.release_date?.slice(0,4) || ""} | Runtime: {mintoHM(details.runtime)} | </span>
        <div className='w-full flex p-2'>
            <div className={`${Array.isArray(won)? 'w-2/3': 'w-full'} min-h-48 h-max p-3 max-h-full overflow-y-auto`}>
                <span className='min-h-32 h-[25rem] md:h-[15rem] overflow-y-auto block'>{details.overview}</span>
            </div>

            {Array.isArray(won) ? (
            <div className="w-1/3 min-h-max md:h-[25rem] h-[35rem] flex flex-col justify-start items-center pl-2">
                <span>Watch On:</span>
                <ul className='h-1/2 overflow-y-auto'>
                    {Array.isArray(won) ? (
                        won.map((item:any, index:any) => (
                        <li key={index}><span key={index}>• {item.provider_name}</span></li>
                        ))
                    ) : (
                        <span>Nothing in our list/In your reigon</span>
                    )}
                </ul>
            </div>) : (<div></div>)}
        </div>
    </div>
    )
}

function findPerfectGenre(userSelection: UserSelection): string[] {
    const { mood, day, timeOfDay } = userSelection;
    const genreNumbers: { [key: string]: string[] } = {
        "relaxed": ["10751", "18", "99", "35", "10402"],
        "excited": ["28", "12", "878", "53"],
        "thrilled": ["28", "878", "53", "12"],
        "amused": ["35", "16", "10751"],
        "nostalgic": ["18", "10749", "9648"],
        "romantic": ["10749", "10751", "18"],
        "tense": ["53", "80", "9648", "27"],
        "inspired": ["10402", "10751", "18", "99"],
        "emotional": ["18", "10749", "80", "99"],
        "curious": ["9648", "18", "878"]
    };

    const dayGenreMap: { [key: string]: string[] } = {
        "sunday": ["10751", "18", "36", "35"],
        "monday": ["18", "80", "53"],
        "tuesday": ["35", "99", "9648"],
        "wednesday": ["18", "53", "9648"],
        "thursday": ["80", "53", "9648"],
        "friday": ["28", "53", "80"],
        "saturday": ["28", "12", "53"]
    };

    const timeOfDayGenreMap: { [key: string]: string[] } = {
        "morning": ["99", "16", "10751"],
        "midmorning": ["35", "16", "10751"],
        "noon": ["35", "10751"],
        "afternoon": ["35", "10751"],
        "evening": ["28", "878", "10749"],
        "night": ["27", "53", "9648"],
        "midnight": ["27", "53"],
        "late-night": ["27", "53", "9648"]
    };

    const moodGenres = genreNumbers[mood] || [];
    const dayGenres = dayGenreMap[day] || [];
    const timeOfDayGenres = timeOfDayGenreMap[timeOfDay] || [];

    // Function to find overlaps between two arrays
    const findOverlap = (arr1: string[], arr2: string[]): string[] => {
        return arr1.filter(genre => arr2.includes(genre));
    };

    // Find overlaps for all combinations
    const moodAndDayOverlap = findOverlap(moodGenres, dayGenres);
    const moodAndTimeOfDayOverlap = findOverlap(moodGenres, timeOfDayGenres);
    const dayAndTimeOfDayOverlap = findOverlap(dayGenres, timeOfDayGenres);

    // Combine all overlaps
    let allOverlaps = [
        ...moodAndDayOverlap,
        ...moodAndTimeOfDayOverlap,
        ...dayAndTimeOfDayOverlap
    ];

    // Remove duplicates
    allOverlaps = Array.from(new Set(allOverlaps));

    // If there are no overlaps in all three, but overlaps in two, include those genres
    const perfectGenres = allOverlaps.length === 0 ?
        moodAndDayOverlap.concat(moodAndTimeOfDayOverlap, dayAndTimeOfDayOverlap) :
        allOverlaps;

    return perfectGenres;
}

const shuffle = (array: any[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  function mintoHM(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    const hoursString = hours.toString().padStart(1, '0');
    const minutesString = remainingMinutes.toString().padStart(2, '0');
    
    return `${hoursString} ${hours == 1? 'hour' : 'hours'} ${minutesString} ${remainingMinutes == 1? 'minute' : 'minutes'}`;
}