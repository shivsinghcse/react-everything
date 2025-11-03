import style from "./Header.module.css"

const Header = () => {
  return (
    <>
        <div className={style.header}>
            <h1>Header</h1>
            <button className={style.btn}>Login</button>
        </div>
    </>
  )
}

export default Header