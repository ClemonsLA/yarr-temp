'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageDisplayer({url}){
    const {imageState, setImageState} = useState('')
    useEffect(()=> {
    },[imageState])

    return <div className="grid justify-center">
            <Image
                src={url}
                width={1024}
                height={1792}
                alt="Dalle Generated Image"
                style={{
                    objectFit: "contain",
                    width: '100%',
                    height: 'auto',
                            }}
                sizes="100vw"
                priority={true}
                loading='eager'
                onLoad={(e) => console.log(e.target.naturalWidth)}>
            </Image>
    </div>
}