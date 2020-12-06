export function fetchData () {
    return async function (dispatch) {
        try {
            const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
            const data = await response.json();
            dispatch({
                type: 'FETCH_CHARACTERS',
                data
            })
        } catch (error) {
            console.log(error);
        }
    }
}