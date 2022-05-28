import { useState } from "react"
import { v4 } from "uuid"

const Editor = ({record, dataStatus}) => {
    function ContentChange(e){
        setContent(e.target.value)
    }

    function DateChange(e){
        setDate(e.target.value);
    }

    function TimeChange(e){
        setTime(e.target.value);
    }

    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function RecordTheMemo(){
        dataStatus.current = true;
        record(function(previousData){
            return [{
                id: v4(),
                content,
                date,
                time},
                ...previousData
            ]
        });
    }

    return <div>
        <h1>Memo</h1>
        <p>待記事項</p>
        <input type="text" value = {content} onChange={ContentChange}></input>
        <p>記事日期</p>
        <input type="date" value = {date} onChange={DateChange}></input>
        <p>記事時間</p>
        <input type="time" value = {time} onChange={TimeChange}></input>
        <button className="add" onClick={RecordTheMemo}>新增</button>
    </div>
}

export default Editor