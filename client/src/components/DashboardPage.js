import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom'; 
import OrderPage from './OrderPage';
import Header from './Header'
import PageNumberLink  from './PageNumberLink';
import '../styles/dashboard-page.css';

export class DashboardPage extends React.Component {
    componentDidMount() {
        this.props.history.push('/orders/0');
    }
    
    render() {
        const { currentPageIndex, pageCount } = this.props;

        const initialIndex = currentPageIndex - (currentPageIndex % 5);
        return (
            <div className="dashboard-page">
                <Header />
                <Route path="/orders/:pageIndex" component={OrderPage} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="controls">
                        <Link className="page-link" to={`/orders/${0}`}>{'<<'}</Link>
                        <div onClick={this.handlePrevClick}>
                            {currentPageIndex >= 1 &&<Link className="page-link"to={`/orders/${Number(currentPageIndex) - 1}`}>Prev</Link>}
                        </div>
                        <PageNumberLink index={initialIndex} />
                        <PageNumberLink index={initialIndex + 1} />
                        <PageNumberLink index={initialIndex + 2} />
                        <PageNumberLink index={initialIndex + 3} />
                        <PageNumberLink index={initialIndex + 4} />
                        {currentPageIndex < pageCount - 1 && <Link className="page-link" to={`/orders/${Number(currentPageIndex) + 1}`}>Next</Link>}
                        <Link className="page-link" to={`/orders/${pageCount - 1}`}>{`>>`}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPageIndex: Number(state.currentPage.index),
    pageCount: state.pageCount
});

export default connect(mapStateToProps)(DashboardPage);