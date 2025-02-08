import { useState, useEffect } from 'react';
import { fetchContest } from '../api-client';
import Header from './header';

const Contest = ({initialContest}) => {
    const [contest, setContest] = useState(initialContest);

    // useEffect(() => {
    //     fetchContest(initialContest.id).then((contest) => {
    //         setContest(contest);
    //     });
    // }, [initialContest.id]);
    return (
        <>
            <Header message={contest.contestName}/>
            <div className="contest">
                <div className="title">
                    Contest Description
                </div>
                <div className="description">
                    {contest.description}
                </div>
            </div>
    </>
    );
};

export default Contest;