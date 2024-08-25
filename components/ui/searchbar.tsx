import { Input } from "./input"
import { SearchIcon } from "lucide-react"

const SearchBar = () => {
  return (
    <>
      <Input icon={<SearchIcon />} placeholder="search" />
    </>
  )
}

export default SearchBar