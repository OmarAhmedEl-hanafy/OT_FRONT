import img1 from '../../assets/images/slider-middle/img-1.png';

function SliderInMiddle() {
  return (
    <section>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className="h-[400px]">
                        <img src={img1} alt="Spiritual side" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SliderInMiddle