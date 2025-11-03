import 'remixicon/fonts/remixicon.css'
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
const App = () => {

  const users = [
    {
      id: 1,
      userImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      intro: "Prime customers, that have access to bank credit and are satisfied with the current product",
      btnText: "Satisfied",
      btnColor: "bg-blue-600"
    },
    {
      id: 2,
      userImage: "https://images.unsplash.com/photo-1661784396825-3a823effaf87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      btnText: "Underserved",
      btnColor: "bg-fuchsia-600"
    },
    {
      id: 3,
      userImage: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit",
      btnText: "Underbanked",
      btnColor: "bg-amber-400"
    }
  ]

  return (
    <>
      <Section1 users = {users}/>
      <Section2 />
    </>
  )
}

export default App;