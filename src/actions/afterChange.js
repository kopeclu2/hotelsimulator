export const afterChange = (changes,source) =>{
    return {
        type:'AFTER_CHANGE',
        payload: changes
    }    
}

export const afterChangeTable2 = (changes,source) =>{
    return {
        type:'AFTER_CHANGE_TABLE2',
        payload:changes
    }
}