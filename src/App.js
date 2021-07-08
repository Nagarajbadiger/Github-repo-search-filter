
import React from "react";
import "./App.css"


 function App() {
   const [inputValue, setInputValue] =React.useState("")
   const [repos, setRepos] =React.useState([]);


   React.useEffect(() => {
     if(!inputValue){
    return;
     }

     fetch("https://api.github.com/search/repositories?q=" + inputValue)
     .then(response =>{
       return response.json();
     })
     .then(data =>{
       console.log(data);
       setRepos(data.items)
     });
   },[inputValue]);

   console.log(repos);


  return (
    <div >
    <form onSubmit={(evt)=> {
      evt.preventDefault()
      setInputValue(evt.target.elements.query.value)
    }}>
    <div className="github-search">
       <div className="github-search-div">
         <div className="github-search-div1">
          <p className="para1">Git Repo Search Filter</p>
             <input type="text" name="query" className="github-search-input" placeholder="Search Github Repositories"/>
              <button onClick="App()" className="button1" type="button" >Search</button>
    </div>
    
    
    </div>


    </div>
    
  
    </form>
  <div className="repo-container">
      <div className="repo-para2"><p className="repo-container-para2"> Repo Search Result </p></div>
        <div className="repo-list"> 
    {repos.map(repo =>{
      return (
      <div className="repo">
        <div  className="repo-item" >
            <div className="repo-list">
           <div className="repo-image"><img className="circular-image" src={repo.owner.avatar_url} alt="repo img"></img></div><br></br>
           <div className="repo-name1"><p className="repo-name2" href={repo.html_url} >{repo.name}</p></div>
           <div className="repo-item-container">
           <div className="repo-item-container-child">
         <div>Forks:{repo.forks} </div>
       </div>

      <div className="repo-item-container-child">
        <div> Open issues:{repo.open_issues}</div>
      </div>


      </div>
      {/* <div className="repo-item-container"></div> */}
      <div className="repo-desc"><p className="repo-description" >Description: {repo.description}</p></div>
      <div className="repo-git"><a className="repo-git-url" href={repo.svn_url}> <button className="view-button">VIEW PROFILE</button></a> </div>
      </div>
      
      </div>
      </div>
      );
    })}
    </div>
    </div>
   
    


    </div>
  );
}
export default App;
