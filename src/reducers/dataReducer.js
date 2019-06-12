
import {combineReducers} from 'redux';



const initialState = {
    data:[
        ["2016", 89, 15,15,15,15,15,15,15,15,15,15,15,15,15,15,69,69, 169,149,58,58,4,5,18,5,48,1,8],
        ["2016", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,10, 11, 12, 13,149,58,58,4,5,18,5,48,1,8],
        ["2017", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,20, 11, 14, 13,149,58,58,4,5,18,5,48,1,8],
        ["2018", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,30, 15, 12, 13,149,58,58,4,5,18,5,48,1,8],
        ["2018", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,30, 15, 12, 13,149,58,58,4,5,18,5,48,1,8],
        ["2018", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,30, 15, 12, 13,149,58,58,4,5,18,5,48,1,8],
        ["2018", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,30, 15, 12, 13,149,58,58,4,5,18,5,48,1,8]
      ],
      table2:[
        ["2016", 89, 15,15,15,15,15,15,15,15,15,15,15,15,15,15,69,69, 169,149,58,58,4,5,18,5,48,1,8],
        ["2016", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,10, 11, 12, 13,149,58,58,4,5,18,5,48,1,8],
        ["2017", 15,15,15,15,15,15,15,15,15,15,15,15,15,15,20, 11, 14, 13,149,58,58,4,5,18,5,48,1,8],
      ],
      readOnly:false
      
}
const dataReducer = (state = initialState,action) =>{
    if(action.type==='AFTER_CHANGE'){         
        if(action.payload!==null){
            fetch('google.com',{
                method:'POST',
                body:JSON.stringify(state.data)
            })
            /** LOAD STATE DATA */
             const newData = state.data; 
                        /** ROW */          /** COLUMN */           /**NEW VALUE */
             newData[action.payload[0][0]][action.payload[0][1]] = action.payload[0][3];
             /** CHANGE CHANGED DATA */
            return Object.assign({}, state, {
                data: newData
              });
        }            
    }
    if(action.type==='AFTER_CHANGE_TABLE2'){         
        if(action.payload!==null){
            fetch('google.com',{
                method:'POST',
                body:JSON.stringify(state.table2)
            })
                 /** LOAD STATE DATA */
                 const newData = state.table2; 
                        /** ROW */          /** COLUMN */           /**NEW VALUE */
                newData[action.payload[0][0]][action.payload[0][1]] = action.payload[0][3];
                /** CHANGE CHANGED DATA */
                return Object.assign({}, state, {
                    table2: newData
                    });
        }            
    }
    if(action.type==='READ_ONLY'){         
        if(action.payload!==null){
            return{
                ...state,
                readOnly:!state.readOnly  
            }
        }            
    }
    return state;
}

export const actionReducers = combineReducers({tableData:dataReducer});
