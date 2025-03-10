import Header from './header';
import { useState, useEffect } from 'react';
import ContestList from './contest-list';
import Contest from './contest';
import NewContest from './new-contest';

// page: contestList, contest

const App = ({initialData}) => {
    const [page, setPage] = useState(initialData.currentContest ? 'contest' : 'contestList');
    const [currentContest, setCurrentContest] = useState(initialData.currentContest);
    const [newContest, setNewContest] = useState('button');

    useEffect(() => {
        window.onpopstate = (event) => {
            const newPage = event.state?.contestId ? "contest" : "contestList";
            setPage(newPage);
            setCurrentContest({id: event.state?.contestId});
        }
    });

    const navigateToContest = (contestId) => {
        window.history.pushState({contestId}, '', `/contest/${contestId}`);
        setPage('contest');
        setCurrentContest({id: contestId});
    };

    const navigateToContestList = () => {
        window.history.pushState({}, '', `/`);
        setPage('contestList');
        setCurrentContest({undefined});
    };

    const swapToNewContest = () => {
        if(newContest === 'button') {
            setNewContest('form');
        }
    }

    const pageContent = () => {
        switch(page) {
            case 'contestList':
                return <ContestList initialContests={initialData.contests} onContestClick = {navigateToContest}/>;
            case 'contest':
                return <Contest initialContest={currentContest} onContestListClick = {navigateToContestList}/>;
        }
    };

    const formNewContest = () => {
        switch(newContest) {
            case 'button':
                return <button className="add-new-contest" onClick={swapToNewContest}>Create New Contest</button>;
            case 'form':
                return <NewContest navigateToNewContest={navigateToContest}/>;
        }
    };

    return (
        <div className="container">
            {pageContent()}
            {page === 'contestList' && formNewContest()}
        </div>	
    );
};

export default App