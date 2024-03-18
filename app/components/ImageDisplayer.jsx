'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageDisplayer({url}){
    const {imageState, setImageState} = useState('')

    return <div className="grid justify-center" style={{ position: 'relative', width: '500px', height: '300px' }}>
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
                loading="lazy">
            </Image>
    </div>
}