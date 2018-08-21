import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const PageNumberLink = ({ index, pageCount, currentPageIndex }) => {
    if (index < pageCount) {
        return (
            <div >
                <Link className={"page-link" + (Number(currentPageIndex) === index ? ' page-link--active' : '')}to={`/orders/${index}`}>{index}</Link>
            </div>
        );
    } else return null;
};

const mapStateToProps = (state) => ({
    pageCount: state.pageCount,
    currentPageIndex: state.currentPage.index
});

export default connect(mapStateToProps)(PageNumberLink);