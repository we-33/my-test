import * as React from 'react';

interface IPerson {
    name: string,
    age: number
}

const defaultPerson: IPerson = {
    name: 'xxx',
    age: 0,
}
const personCxt = React.createContext(defaultPerson);

const ContextComp: React.FC = ()=>{
    return (
        <div className='ContextCon'>
            <personCxt.Provider value={{
                name: 'guo',
                age: 12
            }}>
                <PersonInfo></PersonInfo>
                <ShowAge></ShowAge>
            </personCxt.Provider>
        </div>
    )
}

class PersonInfo extends React.Component {
    static contextType = personCxt;
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: {} | Readonly<{}>){
        super(props)
    }
    render(){
        return (
            <div className='person'>
                <p>{ (this as any).context.toString() }</p>
                {/* <p>age:{ this.context.age }</p> */}
            </div>
        )
    }
}

function ShowAge(){
    return (
        <div>
            <personCxt.Consumer>
                {
                    (value)=> <p>age:{value.age}</p>
                }
            </personCxt.Consumer>
        </div>
    )
}


export default  ContextComp;