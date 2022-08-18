// export const getLeaders = ( users ) => {
//     let uniqueData = users.reduce((acc, x) => {
//       if (acc.find((y) => y?.toUser?.id === x?.toUser?.id)) return acc.concat([]);
//       const points = users.filter((y) => y?.toUser?.id === x?.toUser?.id).map((y) => y?.points).reduce((a, b) => a + b, 0);
//       return acc.concat([{
//           ...x,
//           points
//       }])
//     }, []);
//     let filteredUniqueData = uniqueData.filter(x => x?.toUser?.name != undefined);
//     return filteredUniqueData.sort((a, b) => {
//         return b?.points - a?.points
//     });

// }

export const getLeaders = (users) => {
    let userBoard = {};
    users.forEach((u) => {
        let points = u.points;
        let giver = u.fromUser;
        let receiver = u.toUser;
        if (!userBoard[giver.name]) {
            userBoard[giver.name] = giver;
            userBoard[giver.name]["given"] = 0;
            userBoard[giver.name]["received"] = 0;
        }

        if (!userBoard[receiver.name]) {
            userBoard[receiver.name] = receiver;
            userBoard[receiver.name]["given"] = 0;
            userBoard[receiver.name]["received"] = 0;
        }

        userBoard[giver.name]["given"] += points;
        userBoard[receiver.name]["received"] += points;
    });
    // console.log(JSON.stringify());
    // let uniqueData = users.reduce((acc, x) => {
    //     if (acc.find((y) => y?.toUser?.id === x?.toUser?.id)) return acc.concat([]);
    //     const points = users.filter((y) => y?.toUser?.id === x?.toUser?.id).map((y) => y?.points).reduce((a, b) => a + b, 0);
    //     return acc.concat([{
    //         ...x,
    //         points
    //     }])
    // }, []);
    // let filteredUniqueData = uniqueData.filter(x => x?.toUser?.name != undefined);
    return Object.values(userBoard).sort((a, b) => {
        return b?.received - a?.received
    });

}