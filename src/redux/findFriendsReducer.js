let min = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

const CHANGE_RELATIONSHIP = 'CHANGE_RELATIONSHIP';
const SHOW_PEOPLE = 'SHOW-PEOPLE';
const HIDE_PEOPLE = 'HIDE-PEOPLE';
const COUNT_PAGE = 'COUNT-PAGE';
const CHANGE_PAGE = 'CHANGE-PAGE';
const IS_FETCHING = 'IS-FETCHING';

export const Change_Flag = id => {
    return {
        'type': CHANGE_RELATIONSHIP,
        'id': id
    }
}
export const Show_More = array => {
    return {
        type: SHOW_PEOPLE,
        array: array
    }
}
export const Hide_Users = () => {
    return {
        type: HIDE_PEOPLE
    }
}
export const Count_Page = cnt => {
    return {
        type: COUNT_PAGE,
        cnt: cnt
    }
}
export const Change_Page = currentPage => {
    return {
        type: CHANGE_PAGE,
        currentPage: currentPage
    }
}
export const Is_Fetching = isFetching => {
    return {
        type: IS_FETCHING,
        isFetching: isFetching
    }
}

let initialState = {
    showPeople: [],
    currentPage: 1,
    pageSize: 5,
    pageCount: 100,
    isFetching: false
}

const findFriendsReducer = (state = initialState, action) => {
    let resultState = {...state};
    switch (action.type) {
        case SHOW_PEOPLE:
            resultState.showPeople = [...action.array];
            return resultState;
        case HIDE_PEOPLE:
            resultState.showPeople = [];
            return resultState;
        case CHANGE_RELATIONSHIP:
            resultState.showPeople = state.showPeople.map(el => {
                if (el.id === action.id) {
                    return {...el, followed: !el.followed};
                }
                return el;
            });
            return resultState;
        case COUNT_PAGE:
            resultState.pageCount = action.cnt;
            return resultState;
        case CHANGE_PAGE:
            resultState.currentPage = action.currentPage;
            return resultState;
        case IS_FETCHING:
            resultState.isFetching = action.isFetching;
            return resultState;
        default:
            return resultState;
    }
}

export default findFriendsReducer;