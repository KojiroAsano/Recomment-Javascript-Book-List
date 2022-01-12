function App() {

    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json = await response.json();
            console.log(json.items.saleInfo);
            setData(json);
            setLoaded(true);
        }
        getData();
    }, []);

    console.log('loaded:', loaded, 'data', data);
    return(<>
        <div className="container">
        {loaded && data.items.map((item, i) => <mit-book
            title={item.volumeInfo.title}
            thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
            subtitle={item.volumeInfo.subtitle}
            author={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            key={i} />)}
        </div>
    </>);

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);