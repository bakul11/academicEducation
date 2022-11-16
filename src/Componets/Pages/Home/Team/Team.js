import React from 'react';
import tema1 from '../../../../images/team/10.jpg'
import tema2 from '../../../../images/team/9.jpg'
import tema3 from '../../../../images/team/12.jpg'
import tema4 from '../../../../images/team/11.jpg'
import TeamCart from './TeamCart';
import LightSpeed from 'react-reveal/LightSpeed';

const teamData = [
    {
        photo: tema4,
        name: 'tanamna tana',
        title: 'designer',
        shortDis: 'From twelve to one he read or overlooked.'
    },
    {
        photo: tema1,
        name: 'daren sami',
        title: 'designer',
        shortDis: 'From twelve to one he read or overlooked.'
    },
    {
        photo: tema3,
        name: 'Lata lorek',
        title: 'designer',
        shortDis: 'From twelve to one he read or overlooked.'
    },
    {
        photo: tema2,
        name: 'selina gomes',
        title: 'designer',
        shortDis: 'From twelve to one he read or overlooked.'
    }
]

const Team = () => {
    return (
        <div className='container mt-5 mb-5'>
            <LightSpeed left>
                <div className="team-sec text-center mb-5">
                    <h3 className='fw-bold'>Meet with Expert Team</h3>
                    <p>Meet the outstanding performers in our industry-award-winning team of professionals </p>
                </div>
            </LightSpeed>
            <div className="team">
                <div className="row gy-5">
                    {
                        teamData?.map(team => <TeamCart team={team} key={team?.name} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;