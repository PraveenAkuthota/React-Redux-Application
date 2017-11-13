import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (

            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will be showing up as props inside the booklist.
    return {
        books: state.books
    }

}

    // Whatever is returned will be showing up as props inside the booklist.
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called the result should be passed to all of our reducers.
    return bindActionCreators ({ selectBook : selectBook}, dispatch);   // Second Parameter selectBook is the one that we have imported
    // bindActionCreators with dispatch, Dispatch takes all the actions and pass it on to all the different reducers present in the application.
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);    //connect takes a (function) & (component) and produces a container