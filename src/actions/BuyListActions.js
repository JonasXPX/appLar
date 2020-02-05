export const NEW_NAVIGATOR = 'NEW_NAVIGATOR'

export const customList = (customListBuy) => {
    return {
        type: 'customList',
        payload: {
            customListBuy: customListBuy
        }
    }
};

export const newCustomList = (customListBuy) => {
    return {
        type: 'newCustomList',
        payload: {
            customListBuy: customListBuy
        }
    };
};

export const setKey = key => ({
    type: 'SET_KEY',
    key
})