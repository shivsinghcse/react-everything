

const RightCardContent = (props) => {
    const {id, intro, btnText, btnColor} = props.user
  return (
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className="bg-white text-xl font-semibold w-12 h-12  rounded-full flex justify-center items-center">{id}</h2>
            <div>
                <p className=" text-xl leading-normal text-white mb-10">{intro}</p>
            <div className="flex justify-between">
                <button className={`${btnColor} text-white font-medium px-8 py-2 rounded-full`}>{btnText}</button>
                <button className={`${btnColor} text-white font-medium px-4 py-2 rounded-full`}>
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
            </div>
        </div>
  )
}

export default RightCardContent