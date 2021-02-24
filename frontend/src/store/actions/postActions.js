export const fetchPostAction = (payload) => ({
    type: "FETCH_ALL",
    payload
});

export const addPostAction = (payload) => ({
    type: "ADD_POST",
    payload
})

export const addComment = (payload) => ({
    type: "ADD_COMMENT",
    payload
})