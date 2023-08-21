import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);
  const [repoNames,setArray] = useState(['StudentFeedbackSystem','ElectionPrediction','Spring-JWT','Email-Sender']);

  useEffect(() => {
    const getRepoData = async() => {
      let data = await fetch("https://api.github.com/users/Shivang370/repos");
      let array = await data.json();
      
      setrepoFunction(array)
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    
    let repos = array.map((rep,idx)=>{
      return convertRepoToGraphQL(rep);
    })
    console.log(repos);
    repos = repos.filter((item)=>{
      return repoNames.includes(item.node.name);
    });
    console.log(repos);
    setrepo(repos)
    
  }
  function convertRepoToGraphQL(repo) {
    const repoNode = {
      node: {
        name: repo.name,
        description: repo.description || null,
        language: repo.language || null,
        forkCount: repo.forkCount || 0,
        stargazers: {
            totalCount: repo.stargazers ? repo.stargazers.totalCount : 0
        },
        url: repo.url || null,
        id: repo.id,
        diskUsage: repo.diskUsage || 0,
        primaryLanguage: {
            name: repo.primaryLanguage ? repo.primaryLanguage.name : null,
            color: repo.primaryLanguage ? repo.primaryLanguage.color : null
        }
    }
    };

    return repoNode;
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo && repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
