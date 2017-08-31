import update from 'react-addons-update';

const initialState = []

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            const data = action.payload.data.map(user => {
                return {
                    "name": user.name,
                    "id": user.id,
                    "email": user.email
                }
            })
            
            return update(state, {
                $merge: {data}
            })
    }
    return state;
};
