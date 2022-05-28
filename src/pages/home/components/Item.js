const Item = ({id, content, date, time, removeMemo, dataStatus}) => {
    function remove(){
        dataStatus.current = true;

        removeMemo(function (previousData){
            return previousData.filter(item => item.id !== id)
        })
    }


    return <div className="item">
        <div>
            <p>紀錄事項：{content} | 日期：{date} | 時間：{time}</p>
        </div>
        <button className="remove" onClick={remove}>移除</button>
    </div>
}

export default Item