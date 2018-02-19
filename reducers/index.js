import { FETCH_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case FETCH_DECKS:
            return {...state, ...action.decks};

        case ADD_DECK:
            //console.log(state);
            console.log(action);
            return {...state, ...action.deck};

        case ADD_QUESTION:
            const {title, questions, question, answer} = action.params;
            const newQuestions = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);

            return {
                ...state,
                [title]: {...state[title], questions: newQuestions},
            };

        default:
            return state;
    }
}

export default decks;