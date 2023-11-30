import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import { Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { watchersValue } from '../Redux/watchersSlice';

const Body = () => {
    const dispatch = useDispatch();
    const watchersCount = useSelector((store) => store?.watchers?.count);
    console.log(watchersCount)
    const [search, setSearch] = useState("");
    const [repos, setRepos] = useState([]);
    const [copyRepos, setCopyRepos] = useState([]);

    useEffect(() => {
        fetchRepos();
    }, [])

    useEffect(() => {
        filterWatchers(watchersCount)
    }, [watchersCount])

    // function to get the data from the api

    const fetchRepos = async() => {
        const repoData = await fetch("https://api.github.com/search/repositories?q=Q");
        const repoJson = await repoData.json();
        setRepos(repoJson.items);
        setCopyRepos(repoJson.items);
    }

    // filter the watchers based on the value seletced by the user in the dropdown


    const filterWatchers = (watchersCount) => {
        const filterWatchersList = repos.filter((repo) => repo?.watchers <= watchersCount);
        (filterWatchersList.length === 0) ? setCopyRepos(repos) : setCopyRepos(filterWatchersList);
    }    

    // filtering the repository based on the search

    const filterRepo = repos?.filter((repo) => repo?.owner?.login?.includes(search));
    return (repos?.length === 0) ? <h1>Loading</h1> : (
      <Container className="d-flex flex-column align-items-center my-5">
          
            <div className='d-flex'>
        {/* search bar and button */}
                
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='button' onClick={() => setCopyRepos(filterRepo)}>Search</button>
                
        {/* dropdown to filter watchers */}
               <DropdownButton className="mx-3"  id="dropdown-basic-button" title="watchers">
                    <Dropdown.Item onClick={() => dispatch(watchersValue(1000))}>&lt; 1000</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(watchersValue(1300))}>&lt; 2000</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(watchersValue(1500))}>&lt; 10000</Dropdown.Item>
                </DropdownButton>
                
                
            </div>   
        {/* displaying the repository cards */}
            
            <Row className='d-flex align-items-center'>
            {
              (copyRepos.length === 0) ? <h1 className='mt-3'>No Repository Found</h1> : copyRepos?.map((repo) => <UserCard data={repo} key={repo?.id}  />)
             }
          </Row>

      </Container>
  )
}

export default Body