import './Video.scss';

const Video = () => {
  return (
    <section className="video">
        <video 
            poster="https://i.imgur.com/l2Xfgpl.jpg" 
            controls
            className="video__player"> 
        </video>    
    </section>
  )
}

export default Video