const paths = {
    users: {
        GetInformation: 'Users',
        PostLogin: 'Users/Login',
        PostCreate: 'Users/Create',
    },
    positions: {
        getAll: 'positions',
        getTrendsTop: 'positions/Tops7Days',
    },
    userPositions: {
        getPatrimony: 'UserPositions/Patromony',
        postPosition: 'UserPositions',
    },
    transferAmount: {
        postPix: 'AmountTransfer/pix',
    }
};

export default paths;
