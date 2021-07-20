import React from 'react';


const blockchainList =(props)=>{
    const blockchain = props.blockchainList;
    console.log("props", props);
    console.log("blockchain", blockchain);
    /*return(
        <div className="main-title">
            <p>{JSON.stringify(Object.values(blockchain))}</p>
        </div>

    )*/
    return(
        <div>
            {blockchain.blocks.map(block=>{
                return (
                <div  className="main-title">
                        <p>
                             {JSON.stringify(block)}
                        </p>
                </div>)
            })}
        </div>
    )
}
export default blockchainList;
