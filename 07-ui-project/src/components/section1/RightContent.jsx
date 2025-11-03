import RightCard from "./RightCard"

const RightContent = ({users}) => {
  
  return (
    <div id="right" className="h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto">
      {
        users.map((user) => {
          return <RightCard key={user.id} user={user}/>
        })
      }
    </div>
  )
}

export default RightContent