import { Html, useProgress } from '@react-three/drei';

//цей файл щоб коли ми перевантажували сторінку то сайт не злітав і не був чорний екран

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 14,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader;
