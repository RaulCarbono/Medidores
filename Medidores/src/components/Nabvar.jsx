import { Title_filter } from "./Title_filter"
export const Nabvar = () => {
  return (
    <div className="navbar_container">
        <div className="navbar_search">
            <input className="size" type="text" />
            <span></span>
        </div>
        <Title_filter />
    </div>
  )
}