import { PERFORM_MATCH } from '../actions/index';

export default function(state = null, action){

    switch(action.type){
        case PERFORM_MATCH:
            return { title: action.payload.title };
    }

    return state;
}