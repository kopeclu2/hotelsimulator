
import {combineReducers} from 'redux';
import {initialStateMonths,initialBlueTwo,intialGreenOne,intialGreenTwo} from './initialState';



const initialState = {
    data: initialStateMonths,
      tableGreenOne:intialGreenOne,
      tableGreenTwo:intialGreenTwo,
      tableBlueTwo:initialBlueTwo,
      readOnly:false
      
}
const dataReducer = (state = initialState,action) =>{
    if(action.type==='AFTER_CHANGE'){         
        if(action.payload!==null){
            /** LOAD STATE DATA */
             const newData = state.data; 
                        /** ROW */          /** COLUMN */           /**NEW VALUE */
             //newData[action.payload[0][0]][action.payload[0][1]] = action.payload[0][3];
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
    if(action.type==='FETCH_TABLE'){
       ;
        return Object.assign({}, state, {
            data: {...state.data,"Leden":action.payload}
            })
    }
    return state;
}

export const actionReducers = combineReducers({tableData:dataReducer});
