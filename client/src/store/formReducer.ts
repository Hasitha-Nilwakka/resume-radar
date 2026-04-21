export interface FormState {
  resume : File | null,
  description : string
}

export const initialState : FormState = {
  resume : null,
  description : ''
} 

export type ACTION_TYPE = 
      | {type : 'RESUME_FILE', content : File | null}
      | {type : 'JOB_DESCRIPTION', content : string}


export function reducer(state : FormState, action : ACTION_TYPE) : FormState{
    switch(action.type) {
      case 'JOB_DESCRIPTION' : {
        return {...state, description : action.content}
      } 
      case 'RESUME_FILE' : {
        return {...state, resume : action.content}
      }
      default : {
        return state
      }
    }
}