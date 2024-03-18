'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageDisplayer({url}){
    const {imageState, setImageState} = useState('https://res.cloudinary.com/dd7mi7bpp/image/upload/v1690665596/cld-sample-5.jpg')

    return <Image
                src={imageState}
                width={1024}
                height={1792}
                alt="Dalle Generated Image"
                style={{
                    objectFit: "contain",
                    width: '100%',
                    height: 'auto',
                            }}>
            </Image>
}