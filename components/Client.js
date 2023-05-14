export function Table({Theader, Tbody, Tclass}){
    // console.log(Theader);
    return(
        <table className={Tclass}>
            <thead>
                <tr>
                  {
                    Theader.map((h)=>{
                        return <TabHead key={h} item={h} />
                    })
                  }
                </tr>
            </thead>
            <tbody>
              {
                Tbody.map((h)=>{
                    return <TabBody key={h.id} items={h.noms} />
                })
              }
            </tbody>
        </table>
    )
}

export function TabHead({item}){
    return(
        <th>{item}</th>
    )
}

export function TabBody({items}){
    return(
        <tr>
            {
                items.map((item)=>{
                    return <td key={item}>{item}</td>;
                })
            }
        </tr>
    )
}