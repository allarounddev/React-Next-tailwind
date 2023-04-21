import Image from 'next/image'

export default function BenifitView()
{   
    return (
        <div className="h-[719px] bg-bg-secondary flex justify-center">
            <div className="h-[479px] w-[81%] flex items-center flex-col mt-[120px]">
                <div className="flex font-odibee text-[49px] text-center leading-[58.8px]">
                    Some Advantages Of Using Our Service
                </div>
                <div className="flex mt-[4px] font-odibee text-[19px] leading-[24px] text-center gradient-text text-[#ffffff00]">
                    Our Goal At Nanohana Shop Is To Make Trading As Convinient and As Accesible As Possible
                </div>

                <div className="mt-[64px] flex flex-row w-[100%]">
                    <div className="bg-[#010518] border-[#25347D] border-solid border-[1px] rounded-[4px] mt-[20px] h-[328px] w-[32%] shadow-card">
                        <div className='flex flex-row ml-[5.8%] mt-[48px] items-center'>
                            <Image src='/benifit1.png' width='68' height='68' alt='' className=''></Image>
                            <div className="flex font-Urbanist text-[150%] md:text-[135%] text-center ml-[3.85%] leading-[33.6px]">
                                Easy to Use
                            </div>
                        </div>
                        <div className='flex ml-[5.8%] mt-[24px] font-Urbanist text-[110%] leading-[28px] w-[80%]'>
                            Trade in-game currency with max efficiency and best prices using our fast and simple bot. With 24/7 live human support, our platform provides an unparalleled trading experience.
                        </div>
                    </div>
                    
                    <div className="bg-[#010518] ml-[1.85%] border-[#25347D] border-solid border-[1px] rounded-[4px] mt-[20px] h-[328px] w-[32%] shadow-card">
                        <div className='flex flex-row ml-[5.8%] mt-[48px] items-center'>
                            <Image src='/benifit1.png' width='68' height='68' alt='' className=''></Image>
                            <div className="flex font-Urbanist text-[150%] md:text-[135%] text-center ml-[3.85%] leading-[33.6px]">
                                Easy to Use
                            </div>
                        </div>
                        <div className='flex ml-[5.8%] mt-[24px] font-Urbanist text-[110%] leading-[28px] w-[80%]'>
                            Trade in-game currency with max efficiency and best prices using our fast and simple bot. With 24/7 live human support, our platform provides an unparalleled trading experience.
                        </div>
                    </div>


                    <div className="bg-[#010518] ml-[1.85%] border-[#25347D] border-solid border-[1px] rounded-[4px] mt-[20px] h-[328px] w-[32%] shadow-card">
                        <div className='flex flex-row ml-[5.8%] mt-[48px] items-center'>
                            <Image src='/benifit1.png' width='68' height='68' alt='' className=''></Image>
                            <div className="flex font-Urbanist text-[150%] md:text-[135%] text-center ml-[3.85%] leading-[33.6px]">
                                Unique Levelling System
                            </div>
                        </div>
                        <div className='flex ml-[5.8%] mt-[24px] font-Urbanist text-[110%] leading-[28px] w-[80%]'>
                            Our levelling system rewards frequent users with better prices. The more you trade, the higher your level becomes, unlocking exclusive benefits that make your trading experience even more rewarding.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}