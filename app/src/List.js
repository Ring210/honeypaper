import img1 from './illust-1.webp';



export default function List() {
  return (
    <div className="list">
      <div className="msg">
        <img id="img1" src={img1} alt="A man wearing yellow shirt, standing by large notebook." />
        <p>You haven't created yet?<br /> To create new one, tap on plus button to create new one!</p>
        <a href="example.com">Demo notebook</a>
      </div>
    </div>
  );
}
