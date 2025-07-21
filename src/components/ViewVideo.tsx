
import ReactPlayer from 'react-player/lazy'

function ViewVideo({vid}:any) {

    const setting = {
        controls: true,
        playing:true,
        light:true,
        volume:0.5,
    }

  return (
    <div className='border border-main-color bg-main-color/50 w-[340px] md:w-[700px] lg:w-[750px] ml-5 '>
        <ReactPlayer url={vid} {...setting} width={'100%'} style={{minWidth:'100%'}}/>
    </div>
  )
}

export default ViewVideo