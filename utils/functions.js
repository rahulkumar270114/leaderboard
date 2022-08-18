export const getLeaders = ( users ) => {
    let uniqueData = users.reduce((acc, x) => {
      if (acc.find((y) => y?.toUser?.id === x?.toUser?.id)) return acc.concat([]);
      const points = users.filter((y) => y?.toUser?.id === x?.toUser?.id).map((y) => y?.points).reduce((a, b) => a + b, 0);
      return acc.concat([{
          ...x,
          points
      }])
    }, []);
    let filteredUniqueData = uniqueData.filter(x => x?.toUser?.name != undefined);
    return filteredUniqueData.sort((a, b) => {
        return b?.points - a?.points
    });

}