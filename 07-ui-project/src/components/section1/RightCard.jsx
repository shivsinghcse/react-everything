import RightCardContent from "./RightCardContent"
const RightCard = ({user}) => {

  
  return (
    <div className="h-full shrink-0 w-80 bg-red-500 rounded-4xl overflow-hidden relative">
        <img src={user.userImage}
        className="h-full w-full  object-cover"/>
        <RightCardContent user={user}/>
    </div>
  )
}

export default RightCard