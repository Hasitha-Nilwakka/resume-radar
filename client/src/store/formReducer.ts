export interface FormState {
  resume : File | null,
  description : string,
  darkMode : boolean
}

export const initialState : FormState = {
  resume : null,
  description : '',
  darkMode : false
} 

export type ACTION_TYPE = 
      | {type : 'RESUME_FILE', content : File | null}
      | {type : 'JOB_DESCRIPTION', content : string}
      | {type : 'SET_THEME'}


export function reducer(state : FormState, action : ACTION_TYPE) : FormState{
    switch(action.type) {
      case 'JOB_DESCRIPTION' : {
        return {...state, description : action.content}
      } 
      case 'RESUME_FILE' : {
        return {...state, resume : action.content}
      }
      case 'SET_THEME' : {
        if (!state.darkMode) {
           document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        return {...state, darkMode : !state.darkMode}
      }
      default : {
        return state
      }
    }
}