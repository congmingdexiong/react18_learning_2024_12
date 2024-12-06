import logo from './logo.svg';


const articleType = 1;
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是猪猪乐1</div>
  } else if (articleType === 1) {
    return <div>我是猪猪乐2</div>
  } else {
    return <div>我是猪猪乐3</div>
  }
}
function App() {
  return (
    <div className="App1">
      {getArticleTem()}
    </div>
  );
}

export default App;
