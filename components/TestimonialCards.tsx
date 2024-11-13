import React from 'react'
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface CardsProps {
    quote: string;
    image: string;
    name: string;
    profession: string;
}

const TestimonialCards: React.FC<CardsProps> = ({ quote, image, name, profession }) => {
    return (
        <>
            <div className='bg-white flex flex-col items-center p-16 shadow-[0_8px_12px_rgba(0,0,0,0.02)] space-y-6 rounded-2xl'>
                <div className='flex space-x-4'>
                    <FaStar className='text-mainColorPrimary' />
                    <FaStar className='text-mainColorPrimary' />
                    <FaStar className='text-mainColorPrimary' />
                    <FaStar className='text-mainColorPrimary' />
                    <FaStar className='text-mainColorPrimary' />
                </div>
                <h3 className='text-mainColorSecondary text-center'>{quote}</h3>
                <div className='flex items-center space-x-4'>
                    <Image src={image} alt={image} width={100} height={100} className='w-[50px] h-[50px] rounded-[50%]' />
                    <div>
                        <h5 className='text-md font-semibold text-mainColorSecondary'>{name}</h5>
                        <h6 className='text-xs text-mainColorNeutral'>{profession}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCards;
