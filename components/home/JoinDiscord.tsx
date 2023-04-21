import Link from 'next/link'

export default function JoinDiscord() {
  return (
    <div className="flex flex-row bg-[#000C49] items-center w-[100%] overflow-x-hidden h-[258px]">
        <div className='flex flex-col ml-[9.5%]'>
            <div className="text-[49px] text-white font-odibee">
                Join Our Discord Today !
            </div>
            <div className="text-[16px] mt-[23px] font-Urbansit w-[80%] text-white">
            Join our Discord community for in-game trading, expert advice, and the latest trading opportunities. With a welcoming community of like-minded gamers, our Discord server is the perfect place to start trading like a pro.
            </div>
        </div>

        <a href="https://discord.gg/TfPghapWkn" className="text-[16px] flex items-center justify-center ml-auto mr-[9.5%] font-Urbansit border-none text-center w-[13%] h-[54px] rounded-[12px] bg-[#1845F3] font-bold">
            Join Now
        </a>
    </div>
  )
}