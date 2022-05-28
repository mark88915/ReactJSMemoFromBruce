import Item from './Item'

const List = ({ memoData, removeMemo, dataStatus }) => {
    return <div className="list">
        {
            memoData.map(item => {
                const { id, content, date, time } = item
                return <Item key={id} id={id} content={content} date={date} time={time} removeMemo={removeMemo} dataStatus={dataStatus} />
            })
        }
    </div>
}

export default List