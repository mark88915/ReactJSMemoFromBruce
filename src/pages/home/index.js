import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from '../global/constants'

import Editor from './components/Edit'
import List from './components/List'

import './index.css'

async function FetchData(setMemo){
    const res = await fetch(API_GET_DATA);
    const {data} = await res.json();
    setMemo(data);
}

async function FetchSetMemo(data){
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({data})
    });
}

const Home = () => {

    const [memo, setMemo] = useState([]);
    const submittingDataStatus = useRef(false);

    useEffect(() => {
        if(!submittingDataStatus.current){
            return;
        }

        FetchSetMemo(memo).then(data => submittingDataStatus.current = false);
    }, [memo]);

    useEffect(() => {        
        FetchData(setMemo);
    }, []);   

    return <div className='app'>
        <Editor record = {setMemo} dataStatus = {submittingDataStatus}/>
        <List memoData = {memo} removeMemo = {setMemo} dataStatus = {submittingDataStatus}/>
    </div>
}

export default Home