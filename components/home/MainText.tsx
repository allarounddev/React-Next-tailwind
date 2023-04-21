import Image from "next/image"
import photoGroup from '../../public/photogroup.png'

export default function MainText() {
    return(
        <div className="h-screen bg-bg-purple position-absoulte flex items-center">
            <div className="w-[52.5%] bg-white color-white flex items-center h-[100%] absolute z-10">
                <div className="ml-[9%] w-[85.37%] float-right">
                    <div className="font-odibee text-[68px] md:text-[67px] md:leading-[70px] leading-[80px]">
                        The Art of In-Game Trading will never be easier with <span className="bg-clip-text text-[#ffffff00] gradient-text">Our Exclusive Discord Bot</span>
                    </div>
                    
                    <div className="mt-[16px] text-[#8E95BB] position-relative">
                        For gamers, by gamers.
                    </div>

                    <Image src='/trustpilot.png' width='233' height='34' className="mt-[16px] z-0" alt=''></Image>

                    <a href="https://discord.gg/997KA6FpEn">
                        <button className="bg-main-blue w-[26%] h-[54px] mt-[40px] text[16px] font-Urbanist font-bold rounded-[8px]">Join Our Discord</button>
                    </a>
                </div>
            </div>

            {/* <Image src={photoGroup} alt='' className="object-none object-right mt-[150px] right-0 ml-auto z-0"></Image>             */}
        </div>
    )
}