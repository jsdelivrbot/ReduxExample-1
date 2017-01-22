/**
 * Created by 2A on 22-01-17.
 */
import React, { Component} from 'react';
import { connect } from 'react-redux'

class BookList extends Component {

    renderList() {
        console.log('[BookList] -> renderList');
        return this.props.books.map((book) => {
            return (
              <li key={book.title} className="list-group-item">
                  {book.title}
              </li>
            );
        });
    }

    render() {
        console.log('[BookList] -> render');
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    console.log('[BookList] -> mapStateToProps');
    // whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);