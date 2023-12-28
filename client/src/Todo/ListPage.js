


const ListPage = ({actions, deleteAction}) => {
    return (
        <>
            <h2>리스트 페이지</h2>
            <ul>
                {actions.map((action) => {
                    <li key={action.id}>
                        {action.title} - {action.genere} -{action.date}
                        <button onClick={() => deleteAction(action.id)}>Delete</button>
                    </li>
                })}
            </ul>
        
        </>
    )

}


export default ListPage;