import React from "react";

const Button = ({labelText, descriptionText}) => {
    return (
        <div className="navButton">
            <p>{labelText}</p>
            <p>{descriptionText}</p>
        </div>
    );
};

const Nav = ({options}) => {
    return (
        <div id="NavScreen">
            <div>
                {options.map(option => (
                    <Button labelText={option.title} descriptionText={option.desc} />
                ))}
            </div>
        </div>
    );
};

export default Nav;