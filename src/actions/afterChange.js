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
    const response  = await fetchTables.post('/',data);
    console.log(response);
    dispatch({
    type:'FETCH_TABLE',
    payload:null
    });
}
    
;
