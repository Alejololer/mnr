import { addNewContest } from "../api-client";

const NewContest = ({ navigateToNewContest }) => {
    const handleNewNameSubmit = async (event) => {
        event.preventDefault();
        const contestNameInput = event.target.contestName;
        const descriptionInput = event.target.description;
        const contestCategoryInput = event.target.contestCategory;
        const newContest = {
            contestName: contestNameInput.value,
            description: descriptionInput.value,
            categoryName: contestCategoryInput.value,
        };

        try {
            const newContestId = await addNewContest({ contest: newContest });
            navigateToNewContest(newContestId);
        } catch (error) {
            console.error("Error creando el concurso:", error);
        }
    };

    return (
        <form className="add-new-contest" onSubmit={handleNewNameSubmit}>
            <input name="contestCategory" type="text" placeholder="Contest Category" />
            <input name="contestName" type="text" placeholder="Contest Name" />
            <input name="description" type="text" placeholder="Description" />
            <input type="submit" value="Create Contest" />
        </form>
    );
};

export default NewContest;