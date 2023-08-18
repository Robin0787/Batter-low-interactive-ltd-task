import { createContext, useReducer } from "react";

const initialData = {
    projectName: '',
    client: '',
    contractor: '',
    description: '',
    maxX: '',
    minX: '',
    maxY: '',
    minY: '',
    maxZ: '',
    minZ: '',
    KP: []
}

const reducer = (state, action) => {
    const value = action.data;
    switch (action.type) {
        case 'updateName':
            return {
                ...state,
                projectName: value
            };
        case 'updateClient':
            return {
                ...state,
                client: value
            };
        case 'updateContractor':
            return {
                ...state,
                contractor: value
            };
        case 'description':
            return {
                ...state,
                description: value
            };
        case 'max_x':
            return {
                ...state,
                maxX: +value
            };
        case 'min_x':
            return {
                ...state,
                minX: +value
            }
        case 'max_y':
            return {
                ...state,
                maxY: +value
            }
        case 'min_y':
            return {
                ...state,
                minY: +value
            }
        case 'max_z':
            return {
                ...state,
                maxZ: +value
            }
        case 'min_z':
            return {
                ...state,
                minZ: +value
            }
        case 'KP' :
            return {
                ...state,
                KP: value
            }
        default:
            return state;
    }
}

export const infoContext = createContext(null);

const Provider = ({ children }) => {
    const [allInfo, dispatch] = useReducer(reducer, initialData);
    return (
        <infoContext.Provider value={{ allInfo, dispatch }} >
            {children}
        </infoContext.Provider>
    );
};

export default Provider;