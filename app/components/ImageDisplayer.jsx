'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageDisplayer({url}){
    const {imageState, setImageState} = useState(url);
    return <Image
                src={url}
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