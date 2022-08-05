
const getData = async () => {
    try{
        const res = await axios.get('data.json');
            console.log(res.data);
        
    }
    catch(e){

        console.log('ERROR', e);
    }

};