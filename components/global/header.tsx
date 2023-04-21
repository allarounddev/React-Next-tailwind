import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";

export default function Header() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState('');
    const [selectedGame, setSelectedGame] = useState('ffxiv');

    const [results, setResults] = useState([]);

    function search() {
        setLoading('loading');

        fetch(`https://darsdev.pythonanywhere.com/g?query=${query}&game=${selectedGame}`)
        .then((response) => response.json())
        .then((res) => {
            setResults(res);
            setLoading('done');
        });
    }
    
    return(
        <div>
            <div className="flex items-center w-[100%] position-relative h-[88px] bg-main-bg">
                <div className="flex flex-row items-center h-[48px] w-[27%] ml-[9.5%]">
                    <Link href='/'>
                        <Image src='/logo.png' alt='logo' width={65} height={48}></Image>
                    </Link>
                </div>

                <div className="flex flex-row items-center h-[56px] w-[34.5%] ml-[19.6%]">
                    
                    <div className='rounded-[10px] w-[88.77%] flex justify-center border-[1px] bg-[#16256A] border-[#646DA0]'>
                        <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)} className='h-[40px] w-[30.5%] font-Urbansit text-[13px] font-bold bg-[#ffffff00] px-[2%]'>
                            <option value='ffxiv' className='bg-[#646DA0] h-[45px]'>FFXIV</option>
                            <option value='wow_gold' className='bg-[#646DA0] h-[45px]'>WOW</option>
                            <option value='lost_ark' className='bg-[#646DA0] h-[45px]'>Lost Ark</option>
                        </select>
                        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='h-[40px] bg-[#ffffff00] font-Urbanist font-bold pl-[2%] text-[13px] w-[44.8%]' placeholder="Search Anything..."></input>
                        <button onClick={search} className='w-[24.7%] h-[40px] font-Urbanist text-[13px] rounded-r-[10px] font-bold gradient-bg'>Search</button>
                    </div>
                
                    <button className='w-[20.4%] h-[40px] font-Urbanist font-bold border-[2px] border-main-blue rounded-[8px] ml-[5.8%]'>Login</button>
                    <button className='w-[20.4%] h-[40px] font-Urbanist font-bold rounded-[8px] ml-[5.8%] bg-main-blue'>Sign up</button>
                </div>
            </div>

            {loading === 'loading' && <p> Loading </p>}
            {loading === 'done' &&
                <div className='w-[20.75%] flex items-center justify-center font-Urbanist position-absolute top-0 left-0 z-9999 ml-[56.15%] mt-[-34px]'>
                    {results.map((result) => (
                        /* @ts-ignore */
                        <div key={result.index} className='h-[90px] w-[100%] flex items-center justify-center px-[1.5%] bg-[#16256A] flex-row'>
                            <div className='flex flex-col'>
                                {/* @ts-ignore */}
                                <div className='font-bold'>{result.server}</div>
                                {/* @ts-ignore */}
                                <div className='font-'>{result.game}</div>
                            </div>
                            {/* @ts-ignore */}
                            <div className='mr-[0px] ml-auto font-bold'>${result.price}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}