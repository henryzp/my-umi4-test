import { history } from 'umi';

export default function HomePage() {
  console.log('=====我渲染了======');
  return (
    <div>
      <button onClick={() => {
        history.push({
          search: '?a=1&b=2',
        })
      }}>点我</button>
    </div>
  );
}
