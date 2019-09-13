import React from 'react';

import paginate from './page';



interface Iprops {
    onChangePage: any,
    initialPage: number,
    items: any,
    pageSize: any,
    maxPages: any,
    labels: any
}
class Pagination extends React.Component<Iprops> {
    styles: {};
    constructor(props: any) {
        super(props);
        this.state  = { pager: {} };
        this.styles = {};

        if (!props.disableDefaultStyles) {
            this.styles = {
                ul: {
                    margin: 0,
                    padding: 0,
                    display: 'inline-block'
                },
                li: {
                    listStyle: 'none',
                    display: 'inline',
                    textAlign: 'center'
                },
                a: {
                    cursor: 'pointer',
                    padding: '6px 12px',
                    display: 'block',
                    float: 'left'
                }
            }
        }

        if (props.styles) {
            this.styles = {
                ul: { ...(this.styles as any).ul, ...props.styles.ul },
                li: { ...(this.styles as any).li, ...props.styles.li },
                a: { ...(this.styles as any).a, ...props.styles.a }
            };
        }
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps: { items: any; }, prevState: any) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page: number | undefined) {
        var { items, pageSize, maxPages } = this.props;
        var pager = (this.state as any).pager;

        pager = paginate(items.length, page, pageSize, maxPages);

        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems);
    }

    render() {
        var pager = (this.state as any).pager;
        var labels = this.props.labels;
        var styles = this.styles;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
        return (

            <ul className="pagination" style={(styles as any).ul}>
                <li className={`page-item first ${pager.currentPage === 1 ? 'disabled' : ''}`} style={(styles as any).li}>
                    <a className="page-link" onClick={() => this.setPage(1)} style={(styles as any).a}>{labels.first}</a>
                </li>
                <li className={`page-item previous ${pager.currentPage === 1 ? 'disabled' : ''}`} style={(styles as any).li}>
                    <a className="page-link" onClick={() => this.setPage(pager.currentPage - 1)} style={(styles as any).a}>{labels.previous}</a>
                </li>
                {pager.pages.map((page: React.ReactNode, index: string | number | undefined) =>
                    <li key={index} className={`page-item page-number ${pager.currentPage === page ? 'active' : ''}`} style={(styles as any).li}>
                        <a className="page-link" onClick={() => this.setPage(page as any)} style={(styles as any).a}>{page}</a>
                    </li>
                )}
                <li className={`page-item next ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} style={(styles as any).li}>
                    <a className="page-link" onClick={() => this.setPage(pager.currentPage + 1)} style={(styles as any).a}>{labels.next}</a>
                </li>
                <li className={`page-item last ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} style={(styles as any).li}>
                    <a className="page-link" onClick={() => this.setPage(pager.totalPages)} style={(styles as any).a}>{labels.last}</a>
                </li>
            </ul>
        );
    }
}

export default Pagination;