import React from 'react';
import Pagination from './pagination';

class App extends React.Component {

    constructor(props: any) {
        super(props);

        var exampleItems = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems: any) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const labelsData = {
            first: '第一页',
            last: '最后一页',
            previous: '前一页',
            next: '后一页'
        }
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>React Pagination Component Demo</h1>
                        {(this.state as any).pageOfItems.map((item: { id: string | number | undefined; name: React.ReactNode; }) =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination
                            initialPage={1}
                            pageSize={10}
                            maxPages={10}
                            labels={labelsData}
                            items={(this.state as any).exampleItems}
                            onChangePage={this.onChangePage}
                        />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default App;