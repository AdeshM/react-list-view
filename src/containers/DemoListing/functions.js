const getCampaigns = async (query = '') => {
    // const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const campaigns = await fetch('/api/campaigns.json');
    await waitForMe(100);
    return campaigns.json();
}

async function waitForMe(time) {
    console.log(`Sleeping... for... >>> `, time)
    return new Promise(resolve => {
        setTimeout(() => { resolve([]) }, time)
    })
}

export {
    getCampaigns                                                                                                                                                                                                                                    ,
}