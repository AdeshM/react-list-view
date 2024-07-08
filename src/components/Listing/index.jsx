// import React from "react"

const Listing = ({ rows }) => {
    const columns = rows?.map((el, id) => {
        return (
            <div key={el.id}>
                { el.id } &nbsp; | &nbsp;
                { el.name }
            </div>
        )
    });
    return (
        <>
            { columns }
        </>
    )
};

export default Listing;