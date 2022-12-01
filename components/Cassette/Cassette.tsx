"use client";
import Image from 'next/image'
const className = 'mt-cassette';

type CaseteProps = {
    img: string;
    url?: string;
    title: string;
    description: string;
    genere: string;
    creator: string;
    date: string,
}

export default function Cassette(props: CaseteProps) {

    const { img, title, description, creator, date, genere } = props;

    const handleOnClick = () => {
        
    }

    return <div className={`${className}__wrapper`} role='button' onClick={handleOnClick}  >
        <div className={className} >

            <div className={`${className}__img-container`}>
                <span>nuevo</span>
                {/* <img src={img} alt="casete image" /> */}
                <Image fill src={img} alt='xd' />
            </div>


            <div className={`${className}__title-container`} >
                <p>{title}</p>
                <p>{date}</p>

            </div>

            {/* 
        <div className={`${className}__ref-container`}>
            <p> <strong>Título:</strong> {title} </p>
            <p> <strong>Creador:</strong> {creator} </p>
            <p> <strong>Fecha:</strong> {date} </p>
            <p> <strong>Género:</strong> {genere} </p>
        </div> */}

            {/* <div className={`${className}__sidea-container`}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

        <div className={`${className}__sideb-container`}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div> */}



        </div>
    </div>
};

