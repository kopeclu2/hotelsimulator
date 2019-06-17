import fetchTables from '../settings/axiosSettings';

export const afterChange = (changes, source) => ({
        type:'AFTER_CHANGE',
        payload: changes
    });

export const afterChangeTable2 = (changes, source) => ({
        type:'AFTER_CHANGE_TABLE2',
        payload:changes
    });
export const fetchMonth = (month) => async(dispatch,getState) => {
    const data = JSON.stringify(getState().tableData.data[month]);
    const URL = '/?fbclid=IwAR1Qe3yfUBe7uFsCWA2GJqyg9_YadSznrGKSP8Wr-KUqt4HhvahN84-XOs4';
    const response  = await fetchTables.get(URL);
    dispatch({
    type:'FETCH_TABLE',
    payload:response.data
    });
}
    
;
