"use client";

import './styles/cassette-list.scss';
import Cassette from ".";

const className = 'mt-cassette-list';

export default function CassetteList() {
    const cassettes = [{
        id: '1lksdf8',
        title: 'Pussy channel',
        genere: 'Neo perreo, reagetton, latin',
        creator: 'Minerva tapes',
        date: '12-12-2020',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        img: 'https://i.pinimg.com/564x/66/0b/50/660b50559b3ef195881ca9f7b2b506be.jpg'
    }, {
        id: '1lksdff',
        title: 'Pussy channel',
        description: 'SIDE A .....  SIDE B ....',
        img: 'https://i.pinimg.com/564x/b2/80/a4/b280a40894115ea97446ea620169b661.jpg'
    }, {
        id: '1lksdf4',
        title: 'Pussy channel',
        description: 'SIDE A .....  SIDE B ....',
        img: 'https://i.pinimg.com/564x/41/0c/42/410c42fd1a036db88b0fa5d187e5d4dd.jpg'
    }, {
        id: '1lksasdfasd',
        title: 'Pussy channel',
        description: 'SIDE A .....  SIDE B ....',
        img: 'https://i.pinimg.com/564x/41/0c/42/410c42fd1a036db88b0fa5d187e5d4dd.jpg'
    }, {
        id: '1lksdfghfg',
        title: 'Pussy channel',
        description: 'SIDE A .....  SIDE B ....',
        img: 'https://i.pinimg.com/564x/41/0c/42/410c42fd1a036db88b0fa5d187e5d4dd.jpg'
    }, {
        id: '1lksa83j8',
        title: 'Pussy channel',
        description: 'SIDE A .....  SIDE B ....',
        img: 'https://i.pinimg.com/564x/41/0c/42/410c42fd1a036db88b0fa5d187e5d4dd.jpg'
    }, {
        id: '1lksosudy',
        title: 'Pussy channel',
        description: 'SIDE A .....  SIDE B ....',
        img: 'https://i.pinimg.com/564x/41/0c/42/410c42fd1a036db88b0fa5d187e5d4dd.jpg'
    }];

    return <div className={className}>
        {cassettes.map(({ id, ...cassette }) => {

            console.log('buenos días')
            return <Cassette key={id} {...cassette} />
        })}
    </div>
}




