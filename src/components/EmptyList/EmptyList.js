import React from 'react';
import classes from './EmptyList.scss';

class ListEmpty extends React.Component {
    render() {
        return (
            <div className={classes.list_empty}>
                <img src="img/razz-berry.svg" alt="" />
                <p>Awww! We don't have the pokemon you are looking for.</p>
                <p>Till we get it for you, have this razzberry !</p>
            </div>
        );
    }
}

export default ListEmpty;
