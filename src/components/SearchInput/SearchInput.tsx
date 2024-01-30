import React from "react";
import { styles } from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";
import { cx } from "@emotion/css";

interface SearchInputProps {
  value: string;
  onValueChange: () => void;
  onSubmit: () => void;
  placeHolderText?: string;
  className?: string;
}
const SearchInput = ({
  value,
  onValueChange,
  onSubmit,
  placeHolderText,
  className,
}: SearchInputProps) => {
  return (
    <form className={cx(styles.searchInput, className)}>
      <input
        placeholder={placeHolderText}
        type="text"
        name="search"
        onChange={onValueChange}
        autoFocus
      />
      <SearchIcon />
    </form>
  );
};

export default SearchInput;
