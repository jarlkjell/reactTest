import React from 'react'
import TextField from '@mui/material/TextField';
import './LogoSearch.css'
import SearchIcon from '@mui/icons-material/Search';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <div className="Search">
        <TextField
          id="standard-search"
          label="What are you looking for?"
          type="search"
          variant="standard"/>
          <div className="SearchIcon">
          <SearchIcon/>
          </div>
        </div>
    </div>
  )
}

export default LogoSearch